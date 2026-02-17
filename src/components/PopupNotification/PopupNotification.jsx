import React, { useEffect, useRef } from "react";
import "./PopupNotification.css";

/**
 * Componente PopupNotification - Muestra un popup informativo
 * @param {string} message - El mensaje a mostrar
 * @param {object} position - Objeto con propiedades top y left para la posición
 * @param {function} onClose - Callback cuando el popup se cierra
 * @param {number} duration - Duración en ms antes de cerrar automáticamente (default 800)
 */
export const PopupNotification = ({ message, position, onClose, duration = 800 }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [message, onClose, duration]);

  return (
    <div
      className="popup-notification"
      style={{
        top: `${position?.top || 0}px`,
        left: `${position?.left || 0}px`,
      }}
    >
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

