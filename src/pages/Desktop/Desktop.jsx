import React from "react";
import "./Desktop.css";
import { Taskbar } from "../../components/Taskbar/Taskbar";
import { MessagesApp } from "../../components/MessagesApp/MessagesApp";
import { SocialMediaApp } from "../../components/SocialMediaApp/SocialMediaApp";
import { useOS } from "../../contexts/OSProvider";

/**
 * Componente Desktop - Pantalla principal del sistema operativo simulado
 * Muestra el fondo de escritorio y las aplicaciones abiertas
 */
export const Desktop = () => {
  const { activeApp } = useOS();

  return (
    <div className="desktop-container">
      {/* Fondo del escritorio */}
      <div className="desktop-wallpaper">
        {/* Aquí puedes agregar iconos de escritorio si lo deseas */}
      </div>

      {/* Aplicaciones abiertas */}
      {activeApp === "messages" && <MessagesApp />}
      {activeApp === "social" && <SocialMediaApp />}

      {/* Barra de tareas siempre visible en la parte inferior */}
      <Taskbar />
    </div>
  );
};
