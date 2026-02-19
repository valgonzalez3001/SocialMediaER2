import React, { useEffect, useMemo, useRef } from "react";
import "./MessagesApp.css";
import { useOS } from "../../contexts/OSProvider";
import { useMessages } from "../../contexts/MessagesProvider";
import { FaTimes, FaMinus, FaComments } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Componente MessagesApp - Aplicación de mensajes para recibir pistas del jefe
 */
export const MessagesApp = () => {
  const { closeApp, minimizeApp } = useOS();
  const { messages, markAsRead } = useMessages();
  const { t, i18n } = useTranslation();
  const chatThreadRef = useRef(null);

  const getLocale = () => {
    const localeMap = {
      es: "es-ES",
      en: "en-US",
      fi: "fi-FI",
      sr: "sr-RS",
    };
    return localeMap[i18n.language] || undefined;
  };

  const sortedMessages = useMemo(
    () =>
      [...messages].sort(
        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      ),
    [messages]
  );

  useEffect(() => {
    const unreadMessages = messages.filter((msg) => !msg.read);
    if (!unreadMessages.length) return;
    unreadMessages.forEach((msg) => markAsRead(msg.id));
  }, [messages, markAsRead]);

  useEffect(() => {
    if (!chatThreadRef.current) return;
    chatThreadRef.current.scrollTo({
      top: chatThreadRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [sortedMessages.length]);

  const handleClose = () => {
    closeApp("messages");
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(getLocale(), {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="messages-app-window">
      {/* Barra de título */}
      <div className="window-titlebar">
        <div className="window-title">
          <FaComments className="title-icon" />
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
      <div className="messages-chat-content">
        <div className="messages-chat-header">
          <div className="messages-chat-avatar">B</div>
          <div className="messages-chat-header-text">
            <h2>{t("messagesApp.newMessageFromBoss")}</h2>
            <span>ECHO</span>
          </div>
        </div>

        <div ref={chatThreadRef} className="messages-chat-thread">
          {sortedMessages.map((message) => (
            <article key={message.id} className="chat-message boss-message">
              <div className="chat-message-meta">
                <strong>{t(message.fromKey)}</strong>
                <span>{formatTime(message.timestamp)}</span>
              </div>
              <h3>{t(message.subjectKey)}</h3>
              <div className="chat-message-body">
                <p>{t(message.contentKey)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="messages-chat-composer">
          <input
            type="text"
            value={t("messagesApp.chatPlaceholder")}
            readOnly
            aria-label={t("messagesApp.chatPlaceholder")}
          />
          <button type="button" disabled>
            {t("messagesApp.send")}
          </button>
        </div>
      </div>
    </div>
  );
};
