import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Contexto para gestionar los mensajes del jefe
 * Proporciona las pistas del juego al jugador
 */
const MessagesContext = createContext();

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages debe usarse dentro de MessagesProvider");
  }
  return context;
};

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      fromKey: "messagesApp.messages.welcome.from",
      subjectKey: "messagesApp.messages.welcome.subject",
      contentKey: "messagesApp.messages.welcome.content",
      timestamp: new Date(Date.now() - 3600000),
      read: false,
    },
    {
      id: 2,
      fromKey: "messagesApp.messages.hint1.from",
      subjectKey: "messagesApp.messages.hint1.subject",
      contentKey: "messagesApp.messages.hint1.content",
      timestamp: new Date(Date.now() - 1800000),
      read: false,
    },
    {
      id: 3,
      fromKey: "messagesApp.messages.hint2.from",
      subjectKey: "messagesApp.messages.hint2.subject",
      contentKey: "messagesApp.messages.hint2.content",
      timestamp: new Date(Date.now() - 900000),
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Actualizar contador de mensajes no leídos
    const count = messages.filter((msg) => !msg.read).length;
    setUnreadCount(count);
  }, [messages]);

  /**
   * Marca un mensaje como leído
   * @param {number} messageId - ID del mensaje
   */
  const markAsRead = (messageId) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  /**
   * Agrega un nuevo mensaje (para uso futuro)
   * @param {Object} message - Nuevo mensaje
   */
  const addMessage = (message) => {
    const newMessage = {
      ...message,
      id: messages.length + 1,
      timestamp: new Date(),
      read: false,
    };
    setMessages([newMessage, ...messages]);
  };

  const value = {
    messages,
    unreadCount,
    markAsRead,
    addMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
