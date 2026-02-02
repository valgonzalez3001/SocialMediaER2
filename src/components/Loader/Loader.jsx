import React from "react";
import { PulseLoader } from "react-spinners";
import { usePosts } from "../../contexts/PostsProvider.jsx";

/**
 * Componente que muestra un indicador de carga animado
 * mientras se están cargando los posts
 * 
 * Utiliza PulseLoader de react-spinners para mostrar una animación
 * de puntos pulsantes centrada en la pantalla
 */
export const Loader = () => {
  const { postLoading } = usePosts();// Obtiene el estado de carga de posts desde el contexto
  const override = {
    position: "absolute",
    top: "60vh",
    left: "40vw",
  };
  
  // Renderiza el PulseLoader con estilos personalizados, estado de carga y color azul
  return (
    <PulseLoader
      cssOverride={override}
      loading={postLoading}
      color="rgb(57, 176, 255)"
    />
  );
};
