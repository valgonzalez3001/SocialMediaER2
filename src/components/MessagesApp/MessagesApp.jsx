import React, { useState } from "react";
import "./MessagesApp.css";
import { useOS } from "../../contexts/OSProvider";
import { useMessages } from "../../contexts/MessagesProvider";
import { FaTimes, FaMinus, FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Componente MessagesApp - Aplicación de mensajes para recibir pistas del jefe
 */
export const MessagesApp = () => {
  const { closeApp, minimizeApp } = useOS();
  const { messages, markAsRead } = useMessages();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const { t } = useTranslation();

  // Detectar si hay mensajes sin leer
  const hasUnread = messages.some((msg) => !msg.read);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    if (!message.read) {
      markAsRead(message.id);
    }
  };

  const handleClose = () => {
    closeApp("messages");
    setSelectedMessage(null);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 60) {
      return t("messagesApp.time.minutesAgo", { count: diffMins });
    } else if (diffHours < 24) {
      return t("messagesApp.time.hoursAgo", { count: diffHours });
    } else {
      return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      });
    }
  };

  return (
    <div className="messages-app-window">
      {/* Barra de título */}
      <div className="window-titlebar">
        <div className="window-title">
          <FaEnvelope className="title-icon" />
          <span>{t("messagesApp.title")}</span>
        </div>
        <div className="window-controls">
          <button
            className="window-button minimize"
            onClick={minimizeApp}
            title={t("desktop.window.minimize")}
          >
            <FaMinus />
          </button>
          <button
            className="window-button close"
            onClick={handleClose}
            title={t("desktop.window.close")}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Contenido de la aplicación */}
      <div className="messages-app-content">
        {/* Lista de mensajes */}
        <div className="messages-list">
          <div className="messages-header">
            <h2>{t("messagesApp.inbox")}</h2>
          </div>
          <div className="messages-items">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-item ${
                  selectedMessage?.id === message.id ? "selected" : ""
                } ${message.read ? "read" : "unread"}`}
                onClick={() => handleSelectMessage(message)}
              >
                <div className="message-icon">
                  {message.read ? <FaEnvelopeOpen /> : <FaEnvelope />}
                </div>
                <div className="message-info">
                  <div className="message-from">{t(message.fromKey)}</div>
                  <div className="message-subject">{t(message.subjectKey)}</div>
                  <div className="message-preview">
                    {t(message.contentKey).substring(0, 50)}...
                  </div>
                </div>
                <div className="message-time">{formatTime(message.timestamp)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista detallada del mensaje */}
        <div className="message-detail">
          {selectedMessage ? (
            <>
              <div className="detail-header">
                <h3>{t(selectedMessage.subjectKey)}</h3>
                <div className="detail-meta">
                  <span className="detail-from">
                    {t("messagesApp.fromLabel")}: <strong>{t(selectedMessage.fromKey)}</strong>
                  </span>
                  <span className="detail-time">
                    {new Date(selectedMessage.timestamp).toLocaleString(
                      undefined,
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </div>
              </div>
              <div className="detail-content">
                <p>{t(selectedMessage.contentKey)}</p>
              </div>
            </>
          ) : (
            <div className="detail-empty">
              <FaEnvelope className="empty-icon" />
              <p>{t("messagesApp.selectMessage")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
