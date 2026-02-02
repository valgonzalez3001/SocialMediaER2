import React from "react";
import "./App.css";
//import { useAuth } from "./contexts/AuthProvider";
import { NavRoutes } from "./Routes/NavRoutes";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";
import { usePosts } from "./contexts/PostsProvider.jsx";
import { Loader } from "./components/Loader/Loader";

/**
 * Componente principal de la aplicación
 * 
 * Configura la estructura base de la aplicación incluyendo:
 * - Sistema de rutas
 * - Scroll automático al cambiar de página
 * - Indicador de carga
 * - Sistema de notificaciones toast
 */
function App() {
  const { postLoading } = usePosts();// Obtiene el estado de carga de posts desde el contexto
  
  return (
    <div className="App">
      {/* Componente que resetea el scroll al inicio al cambiar de ruta */}
      <ScrollToTop />
      
      {/* Renderiza todas las rutas de la aplicación */}
      <NavRoutes />
      
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
