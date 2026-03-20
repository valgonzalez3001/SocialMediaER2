import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Desktop.css";
import { MessagesApp } from "../../components/MessagesApp/MessagesApp";
import { SocialMediaApp } from "../../components/SocialMediaApp/SocialMediaApp";
import { HintsApp } from "../../components/HintsApp/HintsApp";
import { FilesApp } from "../../components/FilesApp/FilesApp";
import { PopupNotification } from "../../components/PopupNotification/PopupNotification";
import { BossNotification } from "../../components/BossNotification/BossNotification";
import { useOS } from "../../contexts/OSProvider";
import { useMessages } from "../../contexts/MessagesProvider";
import { useStats } from "../../contexts/StatsProvider";
import { FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Componente Desktop - Pantalla principal del sistema operativo simulado
 * Muestra el fondo de escritorio y las aplicaciones abiertas
 */
export const Desktop = () => {
  const { activeApp, openApp, minimizeApp } = useOS();
  const { unreadCount } = useMessages();
  const {
    challengeFinalCompleted,
    escapeTimerStarted,
    escapeTimerRemainingMs,
    escapeTimerFlashTick,
  } = useStats();
  const { t, i18n } = useTranslation();
  const missionBriefRead = sessionStorage.getItem("missionBriefRead") === "true";
  
  // Estado para el popup
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    position: { top: 0, left: 0 },
  });
  const locale = useMemo(() => {
    const localeMap = {
      es: "es-ES",
      en: "en-US",
      fi: "fi-FI",
      sr: "sr-RS",
    };
    return localeMap[i18n.language] || undefined;
  }, [i18n.language]);
  const drawerConfig = useMemo(
    () => ({
      height: 120,
      handleHeight: 36,
    }),
    []
  );
  const closedTranslate = 90;
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [drawerTranslate, setDrawerTranslate] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const [bossNotifVisible, setBossNotifVisible] = useState(false);
  const [countdownFlash, setCountdownFlash] = useState(false);
  const lastHandledFlashTickRef = useRef(escapeTimerFlashTick);
  const handleBossNotifDismiss = useCallback(() => setBossNotifVisible(false), []);

  const clampTranslate = (value) =>
    Math.min(Math.max(value, 0), closedTranslate);

  const syncDrawer = (open) => {
    setDrawerOpen(open);
    setDrawerTranslate(open ? 0 : closedTranslate);
  };

  const handleToggleDrawer = () => {
    syncDrawer(!drawerOpen);
  };

  const handleOpenMessages = () => {
    openApp("messages");
    syncDrawer(false);
  };

  const handleOpenSocial = (e) => {
    if (!missionBriefRead) {
      // Mostrar popup: posición arriba del botón y centrado horizontalmente
      const rect = e.currentTarget.getBoundingClientRect();
      const popupWidth = 280;
      setPopup({
        visible: true,
        message: t("desktop.popup.readMessage"),
        position: {
          top: rect.top - 70,
          left: rect.left + rect.width / 2 - popupWidth / 2,
        },
      });
      return;
    }
    openApp("social");
    syncDrawer(false);
  };

  const handleOpenTips = () => {
    openApp("hints");
    syncDrawer(false);
  };

  const handleOpenFiles = () => {
    openApp("files");
    syncDrawer(false);
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  useEffect(() => {
    const handleCloseDrawer = () => syncDrawer(false);
    const handleOpenDrawer = () => syncDrawer(true);
    const handleBossMessage = () => setBossNotifVisible(true);
    window.addEventListener("closeDrawer", handleCloseDrawer);
    window.addEventListener("openDrawer", handleOpenDrawer);
    window.addEventListener("bossMessage", handleBossMessage);
    return () => {
      window.removeEventListener("closeDrawer", handleCloseDrawer);
      window.removeEventListener("openDrawer", handleOpenDrawer);
      window.removeEventListener("bossMessage", handleBossMessage);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!escapeTimerStarted || challengeFinalCompleted || !escapeTimerFlashTick) return;
    if (escapeTimerFlashTick <= lastHandledFlashTickRef.current) return;
    lastHandledFlashTickRef.current = escapeTimerFlashTick;
    setCountdownFlash(true);
    const timeoutId = setTimeout(() => setCountdownFlash(false), 1300);
    return () => clearTimeout(timeoutId);
  }, [escapeTimerFlashTick, escapeTimerStarted, challengeFinalCompleted]);

  const countdownText = useMemo(() => {
    const totalSeconds = Math.max(0, Math.ceil(escapeTimerRemainingMs / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, [escapeTimerRemainingMs]);

  const formattedDate = now.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="desktop-container">
      <div className="desktop-shell">
        <div className="desktop-glow" />
        <div className="desktop-clock">
          <span className="desktop-clock-time">{formattedTime}</span>
          <span className="desktop-clock-date">{formattedDate}</span>
        </div>
        {escapeTimerStarted && !challengeFinalCompleted && activeApp !== "social" && (
          <div className={`desktop-countdown ${countdownFlash ? "desktop-countdown--flash" : ""}`}>
            <span className="desktop-countdown-label">{t("shared.timeLeft")}</span>
            <span className="desktop-countdown-value">{countdownText}</span>
          </div>
        )}
      </div>

      {activeApp === "messages" && (
        <div className="app-overlay" onClick={minimizeApp}>
          <div
            className="app-overlay-content"
            onClick={(event) => event.stopPropagation()}
          >
            <MessagesApp />
          </div>
        </div>
      )}

      {activeApp === "social" && (
        <div className="app-overlay" onClick={minimizeApp}>
          <div
            className="app-overlay-content"
            onClick={(event) => event.stopPropagation()}
          >
            <SocialMediaApp />
          </div>
        </div>
      )}

      {activeApp === "hints" && (
        <div className="app-overlay" onClick={minimizeApp}>
          <div
            className="app-overlay-content"
            onClick={(event) => event.stopPropagation()}
          >
            <HintsApp />
          </div>
        </div>
      )}

      {activeApp === "files" && (
        <div className="app-overlay" onClick={minimizeApp}>
          <div
            className="app-overlay-content"
            onClick={(event) => event.stopPropagation()}
          >
            <FilesApp />
          </div>
        </div>
      )}

      <div
        className={`app-drawer ${drawerOpen ? "open" : ""} ${unreadCount > 0 ? "has-unread" : ""}`}
        style={{
          "--drawer-translate": `${drawerTranslate ?? closedTranslate}px`,
          "--drawer-height": `${drawerConfig.height}px`,
        }}
      >
        <button
          className="app-drawer-handle"
          onClick={handleToggleDrawer}
          aria-label={drawerOpen ? "Cerrar drawer" : "Abrir drawer"}
          title={drawerOpen ? "Cerrar" : "Abrir"}
        >
          <FaChevronUp className={drawerOpen ? "arrow open" : "arrow"} />
        </button>

        <div className="app-drawer-content">
          <button
            className="app-launcher-card"
            onClick={handleOpenMessages}
            title={t("desktop.apps.messages")}
          >
            <img
              className="launcher-image launcher-image--messages"
              src="/assets/messages-icon.png"
              alt={t("desktop.apps.messages")}
            />
            <span className="launcher-label">
              {t("desktop.apps.messages")}
            </span>
            {unreadCount > 0 && (
              <span className="launcher-badge">{unreadCount}</span>
            )}
          </button>
          <button
            className={`app-launcher-card ${!missionBriefRead ? "is-locked" : ""}`}
            onClick={handleOpenSocial}
            title={t("desktop.apps.social")}
          >
            <img
              className="launcher-image"
              src="/assets/echo-logo-short-neg.png"
              alt={t("desktop.apps.social")}
            />
            <span className="launcher-label">
              {t("desktop.apps.social")}
            </span>
          </button>
          <button
            className="app-launcher-card"
            type="button"
            onClick={handleOpenFiles}
            title={t("desktop.apps.files")}
          >
            <img
              className="launcher-image"
              src="/assets/folder.png"
              alt={t("desktop.apps.files")}
            />
            <span className="launcher-label">{t("desktop.apps.files")}</span>
          </button>
          <button
            className="app-launcher-card"
            onClick={handleOpenTips}
            title={t("hintsApp.title")}
          >
            <img
              className="launcher-image"
              src="/assets/tips-icon.png"
              alt={t("hintsApp.title")}
            />
            <span className="launcher-label">{t("hintsApp.title")}</span>
          </button>
        </div>
      </div>

      {popup.visible && (
        <PopupNotification
          message={popup.message}
          position={popup.position}
          onClose={handleClosePopup}
        />
      )}

      <BossNotification
        visible={bossNotifVisible}
        onDismiss={handleBossNotifDismiss}
      />
    </div>
  );
};
