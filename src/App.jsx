import React, { useState, useEffect } from "react";
import "./App.css";
import { Desktop } from "./pages/Desktop/Desktop";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";
import { usePosts } from "./contexts/PostsProvider.jsx";
import { Loader } from "./components/Loader/Loader";
import { PlayerOnboarding } from "./components/PlayerOnboarding/PlayerOnboarding";
import { useTranslation } from "react-i18next";

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
  const { postLoading } = usePosts();
  const { i18n } = useTranslation();
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si el jugador ya completó el onboarding en esta sesión
  useEffect(() => {
    // Resetear siempre los datos al montar el componente principal
    // Esto asegura que cada vez que se inicia el proyecto, todo comienza desde cero
    sessionStorage.clear();
    setOnboardingComplete(false);
    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = (playerData) => {
    setOnboardingComplete(true);
  };

  // Mostrar loader mientras se verifica el estado
  if (isLoading) {
    return <div className="App" />;
  }

  return (
    <div className="App">
      {/* Mostrar cuestionario si no está completado */}
      {!onboardingComplete && <PlayerOnboarding onComplete={handleOnboardingComplete} />}
      
      {/* Componente que resetea el scroll al inicio al cambiar de ruta */}
      <ScrollToTop />
      
      {/* Sistema de escritorio con aplicaciones */}
      <Desktop />
      
      {/* Muestra el loader solo cuando se están cargando posts */}
      {postLoading && <Loader />}
      
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
        }}
      />
    </div>
  );
}

export default App;
