import React, { createContext, useContext, useState, useRef } from "react";

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
  const previousActiveAppRef = useRef(null);

  /**
   * Abre una aplicación
   * @param {string} appId - ID de la aplicación a abrir ('social' o 'messages')
   */
  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
    previousActiveAppRef.current = activeApp;
    setActiveApp(appId);
  };

  /**
   * Cierra una aplicación y restaura el foco a la app que estaba activa antes
   * @param {string} appId - ID de la aplicación a cerrar
   */
  const closeApp = (appId) => {
    const remaining = openApps.filter((id) => id !== appId);
    setOpenApps(remaining);
    if (activeApp === appId) {
      const prev = previousActiveAppRef.current;
      const target = remaining.includes(prev)
        ? prev
        : remaining.length > 0 ? remaining[remaining.length - 1] : null;
      setActiveApp(target);
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
