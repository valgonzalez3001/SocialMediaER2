import React, { createContext, useContext, useState } from "react";

/**
 * Contexto para gestionar el estado del "Sistema Operativo" simulado
 * Controla qué aplicaciones están abiertas, minimizadas, etc.
 */
const OSContext = createContext();

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error("useOS debe usarse dentro de OSProvider");
  }
  return context;
};

export const OSProvider = ({ children }) => {
  // Estado de las aplicaciones abiertas
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  /**
   * Abre una aplicación
   * @param {string} appId - ID de la aplicación a abrir ('social' o 'messages')
   */
  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
    setActiveApp(appId);
  };

  /**
   * Cierra una aplicación
   * @param {string} appId - ID de la aplicación a cerrar
   */
  const closeApp = (appId) => {
    setOpenApps(openApps.filter((id) => id !== appId));
    if (activeApp === appId) {
      setActiveApp(openApps.length > 1 ? openApps[0] : null);
    }
  };

  /**
   * Minimiza la aplicación activa (vuelve al escritorio)
   */
  const minimizeApp = () => {
    setActiveApp(null);
  };

  /**
   * Cambia el foco a una aplicación específica
   * @param {string} appId - ID de la aplicación
   */
  const focusApp = (appId) => {
    if (openApps.includes(appId)) {
      setActiveApp(appId);
    } else {
      openApp(appId);
    }
  };

  const value = {
    openApps,
    activeApp,
    openApp,
    closeApp,
    minimizeApp,
    focusApp,
  };

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
};
