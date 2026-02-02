import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa el hook useLocation para obtener la ruta actual

/**
 * Componente que desplaza automáticamente la ventana al inicio
 * cada vez que el usuario navega a una ruta diferente.
 * 
 * Este componente mejora la experiencia de usuario asegurando que
 * al cambiar de página, la vista comience desde arriba en lugar de
 * mantener la posición de scroll de la página anterior.
 */

export const ScrollToTop = () => {
  const { pathname } = useLocation(); // Obtiene la ruta actual (pathname) de React Router

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana a la posición (0, 0) - inicio de la página
  }, [pathname]); // Dependencia: se ejecuta cuando pathname cambia

  return null;
};
