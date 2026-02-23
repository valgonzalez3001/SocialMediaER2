import "./Admin.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

import { useUser } from "../../contexts/UserProvider.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { useMessages } from "../../contexts/MessagesProvider.jsx";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "../../contexts/XAPIProvider.jsx";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { StatsPanel } from "../../components/StatsPanel/StatsPanel";

export const Admin = () => {
    const { t } = useTranslation();
    const { userState } = useUser();
    const { loggedInUserState } = useLoggedInUser();
    const { reduceMisinformation, completeChallenge1, challenge1Completed } = useStats();
    const { addMessage } = useMessages();
    const { sendStatement } = useXAPI();
    const navigate = useNavigate();
    const [classifiedUsers, setClassifiedUsers] = useState(() => {
        const saved = sessionStorage.getItem('adminGameState');
        return saved ? JSON.parse(saved) : {};
    });
    const [showHint, setShowHint] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [gameResult, setGameResult] = useState(null);
    const [regenerateKey, setRegenerateKey] = useState(0); // Clave para forzar regeneración
    
    const [suspectUsers, setSuspectUsers] = useState(() => []);

    // Seleccionar 5 usuarios UNA SOLA VEZ: 3 bots y 2 humanos
    // Usar username como clave estable (los _id cambian en cada reinicio de Mirage)
    useEffect(() => {
        if (challenge1Completed) {
            setSuspectUsers([]);
            return;
        }
        if (!userState?.allUsers?.length) return;

        // Restaurar desde sessionStorage si ya fueron elegidos
        const savedUsernames = sessionStorage.getItem('adminGameUsernames');
        if (savedUsernames) {
            try {
                const usernames = JSON.parse(savedUsernames);
                const restored = usernames
                    .map(uname => userState.allUsers.find(u => u.username === uname))
                    .filter(Boolean);
                if (restored.length === 5) {
                    setSuspectUsers(restored);
                    return;
                }
            } catch (e) {
                console.error('Error restoring saved usernames:', e);
            }
        }

        // Primera vez: elegir 3 bots y 2 humanos de todos los usuarios
        const bots = userState.allUsers.filter(u => u.puzzle?.isBot === true);
        const humans = userState.allUsers.filter(u => u.puzzle?.isBot === false);

        const shuffledBots = [...bots].sort(() => Math.random() - 0.5);
        const shuffledHumans = [...humans].sort(() => Math.random() - 0.5);

        const selected = [
            ...shuffledBots.slice(0, 3),
            ...shuffledHumans.slice(0, 2),
        ].sort(() => Math.random() - 0.5);

        sessionStorage.setItem('adminGameUsernames', JSON.stringify(selected.map(u => u.username)));
        sessionStorage.removeItem('adminGameUsers');
        setSuspectUsers(selected);
    }, [userState?.allUsers, regenerateKey, challenge1Completed]);

    // Guardar estado de clasificación cuando cambie
    useEffect(() => {
        sessionStorage.setItem('adminGameState', JSON.stringify(classifiedUsers));
    }, [classifiedUsers]);

    // Limpiar clasificaciones que no corresponden a los usuarios actuales
    useEffect(() => {
        if (suspectUsers.length > 0) {
            const currentUsernames = suspectUsers.map(u => u.username);
            const savedClassifications = Object.keys(classifiedUsers);
            const hasInvalidClassifications = savedClassifications.some(uname => !currentUsernames.includes(uname));
            if (hasInvalidClassifications) {
                const validClassifications = {};
                currentUsernames.forEach(uname => {
                    if (classifiedUsers[uname]) validClassifications[uname] = classifiedUsers[uname];
                });
                setClassifiedUsers(validClassifications);
                sessionStorage.setItem('adminGameState', JSON.stringify(validClassifications));
            }
        }
    }, [suspectUsers]);

    const handleClassification = (username, classification) => {
        const user = suspectUsers.find(u => u.username === username);
        const isBot = user?.puzzle?.isBot;
        const isCorrect = (classification === 'AI' && isBot) || (classification === 'Humano' && !isBot);

        // Send xAPI statement for classification
        sendStatement(
            XAPI_VERBS.ANSWERED,
            {
                id: `${ECHO_ACTIVITIES.PUZZLE_1.id}/account/${user?.username}`,
                definition: {
                    name: { en: `Account Classification: ${user?.username}` },
                    type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                    interactionType: "choice",
                    choices: [
                        { id: "bot", description: { en: "Bot" } },
                        { id: "human", description: { en: "Human" } },
                    ],
                    correctResponsesPattern: [isBot ? "bot" : "human"],
                },
            },
            {
                success: isCorrect,
                score: { scaled: isCorrect ? 1 : 0, raw: isCorrect ? 1 : 0, min: 0, max: 1 },
                response: classification === 'AI' ? "bot" : "human",
            },
            {
                contextActivities: {
                    parent: [ECHO_ACTIVITIES.PUZZLE_1],
                    grouping: [ECHO_ACTIVITIES.GAME],
                },
            }
        );

        setClassifiedUsers(prev => {
            const newState = { ...prev, [username]: classification };
            sessionStorage.setItem('adminGameState', JSON.stringify(newState));
            return newState;
        });
    };

    const handleProfileClick = (username) => {
        // Send xAPI statement for viewing account
        sendStatement(
            XAPI_VERBS.EXPERIENCED,
            {
                id: `${ECHO_ACTIVITIES.PUZZLE_1.id}/account/${username}`,
                definition: {
                    name: { en: `View Account: ${username}` },
                    type: "http://adlnet.gov/expapi/activities/profile",
                },
            },
            null,
            {
                contextActivities: {
                    parent: [ECHO_ACTIVITIES.PUZZLE_1],
                    grouping: [ECHO_ACTIVITIES.GAME],
                },
            }
        );

        // Marcar que venimos del admin
        sessionStorage.setItem('fromAdmin', 'true');
        navigate(`/profile/${username}`);
    };

    const allUsersClassified = suspectUsers.length > 0 && suspectUsers.length === Object.keys(classifiedUsers).length;

    const handleSubmit = () => {
        let correct = 0;
        let incorrect = 0;

        suspectUsers.forEach(user => {
            const userClassification = classifiedUsers[user.username];
            const isBot = user.puzzle?.isBot;

            if ((userClassification === 'AI' && isBot) || (userClassification === 'Humano' && !isBot)) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const isPerfect = correct === suspectUsers.length;
        const scaledScore = suspectUsers.length > 0 ? correct / suspectUsers.length : 0;

        // Send xAPI statement for challenge submission
        sendStatement(
            isPerfect ? XAPI_VERBS.PASSED : XAPI_VERBS.FAILED,
            ECHO_ACTIVITIES.PUZZLE_1,
            {
                success: isPerfect,
                completion: true,
                score: {
                    scaled: scaledScore,
                    raw: correct,
                    min: 0,
                    max: suspectUsers.length,
                },
            },
            {
                contextActivities: {
                    parent: [ECHO_ACTIVITIES.GAME],
                    grouping: [ECHO_ACTIVITIES.GAME],
                },
            }
        );

        setGameResult({ correct, incorrect, total: suspectUsers.length });
        setShowResult(true);

        // Si todas las clasificaciones son correctas, reducir el nivel de desinformación y marcar reto como completado
        if (isPerfect) {
            reduceMisinformation(30);
            completeChallenge1();
            
            // Limpiar el estado del juego al completar exitosamente
            sessionStorage.removeItem('adminGameUsernames');
            sessionStorage.removeItem('adminGameState');
            sessionStorage.removeItem('fromAdmin');
            setClassifiedUsers({});
            
            // Enviar instrucciones del reto 2
            addMessage({
                fromKey: "messagesApp.messages.challenge2.from",
                subjectKey: "messagesApp.messages.challenge2.subject",
                contentKey: "messagesApp.messages.challenge2.content",
            });
            
            // Mostrar notificación de nuevo mensaje
            toast((toastInstance) => (
                <div>
                    <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                        {t("messagesApp.newMessageNotification")}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                        {t("messagesApp.challenge2Notification")}
                    </p>
                </div>
            ), {
                duration: 4000,
                icon: "📬",
            });
        }
    };

    const handleTryAgain = () => {
        // Si el reto ya fue completado, solo cerrar el modal
        if (challenge1Completed) {
            setShowResult(false);
            return;
        }

        // Limpiar todo el estado del juego
        sessionStorage.removeItem('adminGameUsernames');
        sessionStorage.removeItem('adminGameState');
        sessionStorage.removeItem('fromAdmin');
        setClassifiedUsers({});
        setShowResult(false);
        setGameResult(null);
        // Incrementar la clave para forzar regeneración de usuarios
        setRegenerateKey(prev => prev + 1);
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
                                        key={user?.username}
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
                                                className={`btn-ai ${classifiedUsers[user.username] === 'AI' ? 'selected' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?.username, 'AI');
                                                }}
                                            >
                                                {t('admin.bot')}
                                            </button>
                                            <button
                                                className={`btn-human ${classifiedUsers[user.username] === 'Humano' ? 'selected' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?.username, 'Humano');
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

                {/* Panel de estadísticas lateral */}
                <aside className="stats-sidebar">
                    <StatsPanel />
                </aside>
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
                                    {challenge1Completed ? t('desktop.window.close') : t('admin.playAgain')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
