import "./Admin.css";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

import { useUser } from "../../contexts/UserProvider.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Admin = () => {
    const { t } = useTranslation();
    const { userState } = useUser();
    const { loggedInUserState } = useLoggedInUser();
    const navigate = useNavigate();
    const [classifiedUsers, setClassifiedUsers] = useState(() => {
        const saved = sessionStorage.getItem('adminGameState');
        return saved ? JSON.parse(saved) : {};
    });
    const [showHint, setShowHint] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [gameResult, setGameResult] = useState(null);
    
    // Seleccionar 5 usuarios aleatorios del rango 7-16 (índices 6 a 15)
    // 2 usuarios con isBot=false y 3 usuarios con isBot=true
    const suspectUsers = useMemo(() => {
        if (!userState?.allUsers?.length) {
            return [];
        }

        // Intentar restaurar usuarios guardados
        const savedUsers = sessionStorage.getItem('adminGameUsers');
        if (savedUsers) {
            try {
                const parsed = JSON.parse(savedUsers);
                // Verificar que los usuarios guardados aún existen en allUsers
                const userIds = parsed.map(u => u._id);
                const stillValid = userIds.every(id => 
                    userState.allUsers.some(user => user._id === id)
                );
                
                if (stillValid && parsed.length === 5) {
                    return parsed;
                }
            } catch (e) {
                console.error('Error parsing saved users:', e);
            }
        }

        const availableUsers = userState.allUsers.slice(6, 16) || [];
        
        if (availableUsers.length === 0) {
            return [];
        }
        
        // Separar usuarios por isBot
        const bots = availableUsers.filter(user => user.puzzle?.isBot === true);
        const humans = availableUsers.filter(user => user.puzzle?.isBot === false);
        
        // Mezclar aleatoriamente cada grupo
        const shuffledBots = [...bots].sort(() => Math.random() - 0.5);
        const shuffledHumans = [...humans].sort(() => Math.random() - 0.5);
        
        // Seleccionar 3 bots y 2 humanos
        const selectedBots = shuffledBots.slice(0, 3);
        const selectedHumans = shuffledHumans.slice(0, 2);
        
        // Combinar y mezclar aleatoriamente el resultado final
        const combined = [...selectedBots, ...selectedHumans];
        const result = combined.sort(() => Math.random() - 0.5);
        
        // Guardar usuarios para mantenerlos al volver
        if (result.length > 0) {
            sessionStorage.setItem('adminGameUsers', JSON.stringify(result));
        }
        return result;
    }, [userState?.allUsers]);

    // Guardar estado de clasificación cuando cambie
    useEffect(() => {
        sessionStorage.setItem('adminGameState', JSON.stringify(classifiedUsers));
    }, [classifiedUsers]);

    const handleClassification = (userId, classification) => {
        setClassifiedUsers(prev => {
            const newState = {
                ...prev,
                [userId]: classification
            };
            // Guardar inmediatamente en sessionStorage
            sessionStorage.setItem('adminGameState', JSON.stringify(newState));
            return newState;
        });
    };

    const handleProfileClick = (username) => {
        // Marcar que venimos del admin
        sessionStorage.setItem('fromAdmin', 'true');
        navigate(`/profile/${username}`);
    };

    const allUsersClassified = suspectUsers.length > 0 && suspectUsers.length === Object.keys(classifiedUsers).length;

    const handleSubmit = () => {
        let correct = 0;
        let incorrect = 0;

        suspectUsers.forEach(user => {
            const userClassification = classifiedUsers[user._id];
            const isBot = user.puzzle?.isBot;

            if ((userClassification === 'AI' && isBot) || (userClassification === 'Humano' && !isBot)) {
                correct++;
            } else {
                incorrect++;
            }
        });

        setGameResult({ correct, incorrect, total: suspectUsers.length });
        setShowResult(true);
    };

    const handleTryAgain = () => {
        // Si acertó todos, limpiar también los usuarios para generar nuevos
        if (gameResult?.correct === gameResult?.total) {
            sessionStorage.removeItem('adminGameUsers');
        }
        // Siempre limpiar el estado de clasificación
        sessionStorage.removeItem('adminGameState');
        sessionStorage.removeItem('fromAdmin');
        setClassifiedUsers({});
        setShowResult(false);
        setGameResult(null);
        // Solo recargar si acertó todos (para generar nuevos usuarios)
        if (gameResult?.correct === gameResult?.total) {
            window.location.reload();
        }
    };

    return (
        <>
            <Header />
            <div className="app-container">
                <Navbar />

                <main className="feed">
                    <div className="admin-container">
                        <div className="admin-header">
                            <div>
                                <h2>{t('admin.title')}</h2>
                                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0.5rem 0 0 0' }}>
                                    {t('admin.suspectUsers')}
                                </p>
                            </div>
                            <button className="hint-button" onClick={() => setShowHint(true)}>
                                💡 {t('admin.hint')}
                            </button>
                        </div>

                        <div className="game-status">
                            <p>{t('admin.classified')}: {Object.keys(classifiedUsers).length} / {suspectUsers.length}</p>
                        </div>

                        <div className="suspect-users-container">
                            {suspectUsers?.length ? (
                                suspectUsers?.map((user) => (
                                    <div
                                        key={user?._id}
                                        className="suspect-user-card"
                                    >
                                        <div
                                            onClick={() => handleProfileClick(user.username)}
                                            className="suspect-user-img-container"
                                        >
                                            <img src={user?.avatarURL} alt={user?.firstName} />
                                        </div>
                                        <div
                                            className="user-info"
                                            onClick={() => handleProfileClick(user.username)}
                                        >
                                            <p className="name">
                                                {user?.firstName} {user?.lastName}
                                                {user?.verified && (
                                                    <img
                                                        src="/assets/verified_badge.png"
                                                        alt={t('profile.verifiedAccount')}
                                                        className="verified-badge"
                                                        title={t('profile.verifiedAccount')}
                                                    />
                                                )}
                                            </p>
                                            <p className="username">@{user?.username}</p>
                                        </div>
                                        <div className="classification-buttons">
                                            <button
                                                className={`btn-ai ${classifiedUsers[user._id] === 'AI' ? 'selected' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?._id, 'AI');
                                                }}
                                            >
                                                {t('admin.bot')}
                                            </button>
                                            <button
                                                className={`btn-human ${classifiedUsers[user._id] === 'Humano' ? 'selected' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?._id, 'Humano');
                                                }}
                                            >
                                                {t('admin.human')}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-suspects">{t('admin.noSuspects')}</p>
                            )}
                        </div>

                        {allUsersClassified && (
                            <div className="submit-container">
                                <button className="submit-button" onClick={handleSubmit}>
                                    {t('admin.submit')}
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {showHint && (
                <div className="hint-modal-overlay" onClick={() => setShowHint(false)}>
                    <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="hint-modal-header">
                            <h3>{t('admin.hintTitle')}</h3>
                            <button className="close-button" onClick={() => setShowHint(false)}>×</button>
                        </div>
                        <div className="hint-modal-content">
                            <ul>
                                <li><strong>{t('admin.hintContent.temporalActivity').split(':')[0]}:</strong> {t('admin.hintContent.temporalActivity').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.repetitiveContent').split(':')[0]}:</strong> {t('admin.hintContent.repetitiveContent').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.excessLinks').split(':')[0]}:</strong> {t('admin.hintContent.excessLinks').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.noInteraction').split(':')[0]}:</strong> {t('admin.hintContent.noInteraction').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.abnormalRatio').split(':')[0]}:</strong> {t('admin.hintContent.abnormalRatio').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.singleTopic').split(':')[0]}:</strong> {t('admin.hintContent.singleTopic').split(':')[1]}</li>
                                <li><strong>{t('admin.hintContent.recentAccount').split(':')[0]}:</strong> {t('admin.hintContent.recentAccount').split(':')[1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {showResult && gameResult && (
                <div className="result-modal-overlay">
                    <div className="result-modal">
                        <div className="result-modal-header">
                            <h3>{gameResult.correct === gameResult.total ? t('admin.perfectScore') : t('admin.resultTitle')}</h3>
                        </div>
                        <div className="result-modal-content">
                            <div className="result-score">
                                <p className="score-text">{t('admin.score')}: {gameResult.correct} / {gameResult.total}</p>
                                {gameResult.correct === gameResult.total ? (
                                    <p className="result-message success">🎉 {t('admin.allCorrect')}</p>
                                ) : (
                                    <p className="result-message error">❌ {t('admin.tryAgain')}</p>
                                )}
                            </div>
                            <div className="result-buttons">
                                <button className="try-again-button" onClick={handleTryAgain}>
                                    {t('admin.playAgain')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
