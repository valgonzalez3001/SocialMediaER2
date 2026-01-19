import "./Admin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useUser } from "../../contexts/UserProvider";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Admin = () => {
    const { userState } = useUser();
    const { loggedInUserState } = useLoggedInUser();
    const navigate = useNavigate();
    const [classifiedUsers, setClassifiedUsers] = useState({});
    const [showHint, setShowHint] = useState(false);
    // Mostrar solo usuarios del 11 al 16 (índices 10 a 15)
    const suspectUsers = userState?.allUsers?.slice(10, 16);

    const handleClassification = (userId, classification) => {
        setClassifiedUsers(prev => ({
            ...prev,
            [userId]: classification
        }));

        const message = classification === 'AI'
            ? 'Usuario bloqueado clasificado como IA'
            : 'Usuario clasificado como Humano';

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
                                <h2>Panel de Administración</h2>
                                <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0.5rem 0 0 0' }}>
                                    Usuarios Sospechosos
                                </p>
                            </div>
                            <button className="hint-button" onClick={() => setShowHint(true)}>
                                💡 Pista
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
                                                        alt="Cuenta verificada"
                                                        className="verified-badge"
                                                        title="Cuenta verificada"
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
                                                Bot
                                            </button>
                                            <button
                                                className="btn-human"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClassification(user?._id, 'Humano');
                                                }}
                                            >
                                                Humano
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-suspects">No hay usuarios sospechosos en este momento</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {showHint && (
                <div className="hint-modal-overlay" onClick={() => setShowHint(false)}>
                    <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="hint-modal-header">
                            <h3>Indicadores de cuenta Bot </h3>
                            <button className="close-button" onClick={() => setShowHint(false)}>×</button>
                        </div>
                        <div className="hint-modal-content">
                            <ul>
                                <li><strong>Actividad temporal sospechosa:</strong> Publicaciones a intervalos muy regulares o en horarios poco naturales</li>
                                <li><strong>Contenido repetitivo:</strong> Mensajes muy similares o idénticos entre publicaciones</li>
                                <li><strong>Exceso de enlaces:</strong> Muchas publicaciones con enlaces externos</li>
                                <li><strong>Interacción nula:</strong> No responde a comentarios o menciones</li>
                                <li><strong>Ratio anormal:</strong> Muchos seguidos pero poca interacción real</li>
                                <li><strong>Tema único:</strong> Solo publica sobre un tema muy específico</li>
                                <li><strong>Cuenta reciente:</strong> Cuenta nueva con mucha actividad inmediata</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
