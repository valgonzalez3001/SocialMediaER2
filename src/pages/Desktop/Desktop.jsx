import React, { useMemo, useState } from "react";
import "./Desktop.css";
import { MessagesApp } from "../../components/MessagesApp/MessagesApp";
import { SocialMediaApp } from "../../components/SocialMediaApp/SocialMediaApp";
import { useOS } from "../../contexts/OSProvider";
import { useMessages } from "../../contexts/MessagesProvider";
import { FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Componente Desktop - Pantalla principal del sistema operativo simulado
 * Muestra el fondo de escritorio y las aplicaciones abiertas
 */
export const Desktop = () => {
  const { activeApp, openApp, minimizeApp } = useOS();
  const { unreadCount } = useMessages();
  const { t } = useTranslation();
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

  const handleFocusSocial = () => {
    minimizeApp();
    syncDrawer(false);
  };

  return (
    <div className="desktop-container">
      <div className="main-social">
        <SocialMediaApp mode="embedded" />
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
            className="app-launcher-card"
            onClick={handleFocusSocial}
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
            disabled
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
            className="app-launcher-card"
            disabled
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
    </div>
  );
};
