import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useStats } from "./StatsProvider.jsx";

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
  const { t } = useTranslation();
  const {
    markChallenge2InstructionsRead,
    markChallenge3InstructionsRead,
    markChallengeFinalInstructionsRead,
  } = useStats();
  const [messages, setMessages] = useState([
    {
      id: 1,
      fromKey: "messagesApp.messages.missionBrief.from",
      subjectKey: "messagesApp.messages.missionBrief.subject",
      contentKey: "messagesApp.messages.missionBrief.content",
      timestamp: new Date(),
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);
  const notificationShownRef = useRef(false);

  const showMissionToast = () => {
    if (notificationShownRef.current) {
      return;
    }
    toast(() => (
      <div>
        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
          {t("messagesApp.newMessageNotification")}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
          {t("messagesApp.newMessageFromBoss")}
        </p>
      </div>
    ), {
      duration: 4000,
      icon: "📬",
    });
    notificationShownRef.current = true;
  };

  // Mostrar notificación cuando el onboarding se completa
  useEffect(() => {
    const handleOnboardingComplete = () => {
      showMissionToast();
    };

    const playerData = sessionStorage.getItem("playerData");
    if (playerData) {
      const data = JSON.parse(playerData);
      if (data.onboardingCompleted) {
        showMissionToast();
      }
    }

    window.addEventListener("onboardingComplete", handleOnboardingComplete);
    return () => {
      window.removeEventListener("onboardingComplete", handleOnboardingComplete);
    };
  }, [t]);

  // Actualizar contador de mensajes no leídos
  useEffect(() => {
    const count = messages.filter((msg) => !msg.read).length;
    setUnreadCount(count);
  }, [messages]);

  /**
   * Marca un mensaje como leído
   * @param {number} messageId - ID del mensaje
   */
  const markAsRead = (messageId) => {
    setMessages((prev) => {
      const target = prev.find((msg) => msg.id === messageId);
      if (target?.contentKey === "messagesApp.messages.missionBrief.content") {
        sessionStorage.setItem("missionBriefRead", "true");
      }
      // Marcar como leídas las instrucciones de reto 2
      if (target?.contentKey === "messagesApp.messages.challenge2.content") {
        markChallenge2InstructionsRead();
      }
      // Marcar como leídas las instrucciones de reto 3
      if (target?.contentKey === "messagesApp.messages.challenge3.content") {
        markChallenge3InstructionsRead();
      }
      if (target?.contentKey === "messagesApp.messages.challengeFinal.content") {
        markChallengeFinalInstructionsRead();
      }
      return prev.map((msg) =>
        msg.id === messageId ? { ...msg, read: true } : msg
      );
    });
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
