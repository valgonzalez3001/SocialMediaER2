import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useStats } from "./StatsProvider.jsx";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "./XAPIProvider.jsx";

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
  const { sendStatement } = useXAPI();
  const [messages, setMessages] = useState([
    {
      id: 1,
      fromKey: "messagesApp.author.name",
      subjectKey: "messagesApp.messages.missionBrief.subject",
      contentKey: "messagesApp.messages.missionBrief.content",
      timestamp: new Date(),
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);
  const notificationShownRef = useRef(false);
  const xapiSentRef = useRef(new Set());

  const showMissionToast = () => {
    if (notificationShownRef.current) {
      return;
    }
    window.dispatchEvent(new Event("openDrawer"));
    window.dispatchEvent(new Event("bossMessage"));
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
    const target = messages.find((msg) => msg.id === messageId);
    if (!target || target.read) return;

    // Guard síncrono: evita duplicados si markAsRead se llama dos veces
    // antes de que React procese el setMessages (p.ej. Strict Mode)
    if (!xapiSentRef.current.has(messageId)) {
      xapiSentRef.current.add(messageId);

      if (target.contentKey === "messagesApp.messages.missionBrief.content") {
        sessionStorage.setItem("missionBriefRead", "true");
        sendStatement(
          XAPI_VERBS.LOOKED_AT,
          {
            id: `${ECHO_ACTIVITIES.PUZZLE_1.id}/instructions`,
            definition: {
              name: { en: "Puzzle 1 Instructions" },
              type: "http://adlnet.gov/expapi/activities/lesson",
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
      }
      if (target.contentKey === "messagesApp.messages.challenge2.content") {
        markChallenge2InstructionsRead();
        sendStatement(
          XAPI_VERBS.LOOKED_AT,
          {
            id: `${ECHO_ACTIVITIES.PUZZLE_2.id}/instructions`,
            definition: {
              name: { en: "Puzzle 2 Instructions" },
              type: "http://adlnet.gov/expapi/activities/media",
            },
          },
          null,
          {
            contextActivities: {
              parent: [ECHO_ACTIVITIES.PUZZLE_2],
              grouping: [ECHO_ACTIVITIES.GAME],
            },
          }
        );
      }
      if (target.contentKey === "messagesApp.messages.challenge3.content") {
        markChallenge3InstructionsRead();
        sendStatement(
          XAPI_VERBS.LOOKED_AT,
          {
            id: `${ECHO_ACTIVITIES.PUZZLE_3.id}/instructions`,
            definition: {
              name: { en: "Puzzle 3 Instructions" },
              type: "http://adlnet.gov/expapi/activities/media",
            },
          },
          null,
          {
            contextActivities: {
              parent: [ECHO_ACTIVITIES.PUZZLE_3],
              grouping: [ECHO_ACTIVITIES.GAME],
            },
          }
        );
      }
      if (target.contentKey === "messagesApp.messages.challengeFinal.content") {
        markChallengeFinalInstructionsRead();
        sendStatement(
          XAPI_VERBS.LOOKED_AT,
          {
            id: `${ECHO_ACTIVITIES.FINAL.id}/instructions`,
            definition: {
              name: { en: "Final Puzzle Instructions" },
              type: "http://adlnet.gov/expapi/activities/media",
            },
          },
          null,
          {
            contextActivities: {
              parent: [ECHO_ACTIVITIES.FINAL],
              grouping: [ECHO_ACTIVITIES.GAME],
            },
          }
        );
      }
    }

    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, read: true } : msg))
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
