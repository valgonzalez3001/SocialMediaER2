import React, { useState, useEffect } from "react";
import "./App.css";
import { Desktop } from "./pages/Desktop/Desktop";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";
import { PlayerOnboarding } from "./components/PlayerOnboarding/PlayerOnboarding";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  // Resetear siempre los datos al montar el componente principal
  // Esto asegura que cada vez que se inicia el proyecto, todo comienza desde cero
  useEffect(() => {
    sessionStorage.clear();
    setOnboardingComplete(false);
    navigate("/", { replace: true });
  }, []);

  const handleOnboardingComplete = (playerData) => {
    setOnboardingComplete(true);
  };

  return (
    <div className="App">
      {/* Mostrar cuestionario si no está completado */}
      {!onboardingComplete && <PlayerOnboarding onComplete={handleOnboardingComplete} />}
      
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
