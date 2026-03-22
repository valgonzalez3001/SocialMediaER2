import React, { useState, useEffect } from "react";
import "./App.css";
import { Desktop } from "./pages/Desktop/Desktop";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";
import { PlayerOnboarding } from "./components/PlayerOnboarding/PlayerOnboarding";
import { useTranslation } from "react-i18next";
import { useXAPI, XAPI_VERBS, ECHO_ACTIVITIES } from "./contexts/XAPIProvider";

/**
 * Check if there's an existing session with meaningful progress
 */
const hasExistingSession = () => {
  try {
    const playerData = sessionStorage.getItem('playerData');
    if (!playerData) return false;
    const parsed = JSON.parse(playerData);
    return parsed.onboardingCompleted === true;
  } catch {
    return false;
  }
};

/**
 * Componente principal de la aplicación
 *
 * Configura la estructura base de la aplicación con un sistema operativo simulado:
 * - Cuestionario inicial para configuración del jugador
 * - Escritorio con barra de tareas
 * - Aplicaciones (Red Social y Mensajes)
 * - Sistema de notificaciones toast
 */
function App() {
  const { t } = useTranslation();
  const { sendStatement } = useXAPI();
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [showSessionDialog, setShowSessionDialog] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    if (hasExistingSession()) {
      setShowSessionDialog(true);
    }
  }, []);

  // Send "left" statement when leaving the page
  useEffect(() => {
    const handlePageLeave = () => {
      sendStatement(
        XAPI_VERBS.LEFT,
        ECHO_ACTIVITIES.GAME,
        null,
        null,
        null,
        { keepalive: true }
      );
    };

    window.addEventListener('beforeunload', handlePageLeave);
    window.addEventListener('pagehide', handlePageLeave);

    return () => {
      window.removeEventListener('beforeunload', handlePageLeave);
      window.removeEventListener('pagehide', handlePageLeave);
    };
  }, [sendStatement]);

  const handleResume = () => {
    // Send "resumed" statement
    sendStatement(XAPI_VERBS.RESUMED, ECHO_ACTIVITIES.GAME);
    setShowSessionDialog(false);
    setOnboardingComplete(true);
  };

  const handleStartOver = () => {
    // Send "exited" statement before clearing
    sendStatement(
      XAPI_VERBS.EXITED_ADL,
      ECHO_ACTIVITIES.GAME,
      null,
      null,
      null,
      { keepalive: true }
    );
    sessionStorage.clear();
    // Reload to reset all provider states
    window.location.reload();
  };

  const handleOnboardingComplete = (playerData) => {
    setOnboardingComplete(true);
  };

  return (
    <div className="App">
      {/* Session resume dialog */}
      {showSessionDialog && (
        <div className="session-dialog-overlay">
          <div className="session-dialog">
            <h2>{t('sessionDialog.title', 'Welcome Back!')}</h2>
            <p>{t('sessionDialog.message', 'You have a previous session. Would you like to continue where you left off?')}</p>
            <div className="session-dialog-buttons">
              <button className="session-btn session-btn-resume" onClick={handleResume}>
                {t('sessionDialog.resume', 'Resume')}
              </button>
              <button className="session-btn session-btn-start-over" onClick={handleStartOver}>
                {t('sessionDialog.startOver', 'Start Over')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mostrar cuestionario si no está completado y no hay diálogo de sesión */}
      {!onboardingComplete && !showSessionDialog && <PlayerOnboarding onComplete={handleOnboardingComplete} />}
      
      {/* Componente que resetea el scroll al inicio al cambiar de ruta */}
      <ScrollToTop />
      
      {/* Sistema de escritorio con aplicaciones */}
      <Desktop />
      
      {/* Configuración del sistema de notificaciones toast */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
        containerStyle={{
          top: "6rem",
          bottom: "80px",
        }}
      />
    </div>
  );
}

export default App;
