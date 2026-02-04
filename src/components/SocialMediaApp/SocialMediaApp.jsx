import React from "react";
import "./SocialMediaApp.css";
import { useOS } from "../../contexts/OSProvider";
import { NavRoutes } from "../../Routes/NavRoutes";
import { FaTimes, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Componente SocialMediaApp - Envuelve la aplicación de red social en una ventana
 */
export const SocialMediaApp = () => {
  const { closeApp, minimizeApp } = useOS();
  const { t } = useTranslation();

  return (
    <div className="social-app-window">
      {/* Barra de título */}
      <div className="window-titlebar">
        <div className="window-title">
          <span className="app-icon">📱</span>
          <span>{t("desktop.apps.social")}</span>
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
            onClick={() => closeApp("social")}
            title={t("desktop.window.close")}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Contenido de la aplicación */}
      <div className="social-app-content">
        <NavRoutes />
      </div>
    </div>
  );
};
