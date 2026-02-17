import React, { useEffect, useMemo, useState } from "react";
import "./Desktop.css";
import { MessagesApp } from "../../components/MessagesApp/MessagesApp";
import { SocialMediaApp } from "../../components/SocialMediaApp/SocialMediaApp";
import { PopupNotification } from "../../components/PopupNotification/PopupNotification";
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
  const { challenge1Completed } = useStats();
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTranslate, setDrawerTranslate] = useState(closedTranslate);
  const [now, setNow] = useState(() => new Date());

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

  const handleOpenTips = (e) => {
    if (!challenge1Completed) {
      // Mostrar popup: posición arriba del botón y centrado horizontalmente
      const rect = e.currentTarget.getBoundingClientRect();
      const popupWidth = 280;
      setPopup({
        visible: true,
        message: t("desktop.popup.startChallenge"),
        position: {
          top: rect.top - 70,
          left: rect.left + rect.width / 2 - popupWidth / 2,
        },
      });
      return;
    }
    // Aquí iría la lógica para abrir pistas cuando esté habilitado
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

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
              className="launcher-image"
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
              src="/assets/social-media-logo.png"
              alt={t("desktop.apps.social")}
            />
            <span className="launcher-label">
              {t("desktop.apps.social")}
            </span>
          </button>
          <button
            className="app-launcher-card"
            type="button"
            onClick={() => {}}
            title="Llamadas"
          >
            <img
              className="launcher-image"
              src="/assets/calls-icon.png"
              alt="Llamadas"
            />
            <span className="launcher-label">Llamadas</span>
          </button>
          <button
            className={`app-launcher-card ${!challenge1Completed ? "is-locked" : ""}`}
            onClick={handleOpenTips}
            title="Pistas"
          >
            <img
              className="launcher-image"
              src="/assets/tips-icon.png"
              alt="Pistas"
            />
            <span className="launcher-label">Pistas</span>
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
    </div>
  );
};
