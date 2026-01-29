import "./Admin.css";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

import { useUser } from "../../contexts/UserProvider";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Admin = () => {
    const { t } = useTranslation();
    const { userState } = useUser();
    const { loggedInUserState } = useLoggedInUser();
    const navigate = useNavigate();
    const [classifiedUsers, setClassifiedUsers] = useState({});
    const [showHint, setShowHint] = useState(false);
    
    // Seleccionar 10 usuarios aleatorios del rango 7-16 (índices 6 a 15)
    const suspectUsers = useMemo(() => {
        const availableUsers = userState?.allUsers?.slice(6, 16) || [];
        
        // Crear una copia y mezclarla aleatoriamente
        const shuffled = [...availableUsers].sort(() => Math.random() - 0.5);
        
        // Tomar los primeros 10
        return shuffled.slice(0, 10);
    }, [userState?.allUsers]);

    const handleClassification = (userId, classification) => {
        setClassifiedUsers(prev => ({
            ...prev,
            [userId]: classification
        }));

        const message = classification === 'AI'
            ? t('admin.userBlocked')
            : t('admin.userClassified');

        toast.success(message);
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

                        <div className="suspect-users-container">
                            {suspectUsers?.length ? (
                                suspectUsers?.map((user) => (
                                    <div
                                        key={user?._id}
                                        className="suspect-user-card"
                                    >
                                        <div
                                            onClick={() => navigate(`/profile/${user.username}`)}
                                            className="suspect-user-img-container"
                                        >
                                            <img src={user?.avatarURL} alt={user?.firstName} />
                                        </div>
                                        <div
                                            className="user-info"
                                            onClick={() => navigate(`/profile/${user.username}`)}
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
                                                className="btn-ai"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?._id, 'AI');
                                                }}
                                            >
                                                {t('admin.bot')}
                                            </button>
                                            <button
                                                className="btn-human"
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
        </>
    );
};
