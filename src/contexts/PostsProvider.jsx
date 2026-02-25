import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { reinitializeServer } from "../server.jsx";

// Importa los servicios de la API para operaciones con posts y comentarios
import {
  getAllPostService,
  likePostService,
  dislikePostService,
  createPostService,
  deletePostService,
  editPostService,
  getCommentsService,
  addCommentsService,
  deleteCommentService,
  editCommentService,
} from "../services/PostService.jsx";

// Crea el contexto para compartir el estado de los posts en toda la aplicación
const PostsContext = createContext();

/**
 * Provider que gestiona el estado global de los posts y sus operaciones
 * Proporciona funciones para crear, editar, eliminar, dar like/dislike a posts,
 * y gestionar comentarios
 */
export const PostsProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [allPosts, setAllPosts] = useState([]);// Estado que almacena todos los posts de la aplicación
  const [postLoading, setPostLoading] = useState(false);// Estado para indicar si se están cargando los posts
  const [sortBy, setSortBy] = useState("Latest");// Estado para el criterio de ordenamiento de los posts (Latest, Oldest, Trending)

  /**
   * Obtiene todos los posts de la API
   * Activa el estado de carga mientras realiza la petición
   */
  const getAllPosts = async () => {
    try {
      setPostLoading(true);
      const response = await getAllPostService();
      if (response.status === 200) {
        setPostLoading(false);
        setAllPosts(response.data.posts);
      }
    } catch (error) {
      setPostLoading(false);
      console.error(error);
    } finally {
      setPostLoading(false);
    }
  };

  /**
   * Da like a un post específico
   * @param {string} postId - ID del post a dar like
   * @param {string} token - Token de autenticación del usuario
   */
  const likePost = async (postId, token) => {
    try {
      const response = await likePostService(postId, token);
      if (response.status === 201) {
        setPostLoading(false);
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Quita el like de un post específico
   * @param {string} postId - ID del post a quitar el like
   * @param {string} token - Token de autenticación del usuario
   */
  const dislikePost = async (postId, token) => {
    try {
      const response = await dislikePostService(postId, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Elimina un post específico
   * @param {string} postId - ID del post a eliminar
   * @param {string} token - Token de autenticación del usuario
   */
  const deletePost = async (postId, token) => {
    try {
      const response = await deletePostService(postId, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Crea un nuevo post
   * @param {Event} e - Evento del formulario para prevenir el comportamiento por defecto
   * @param {Object} post - Datos del post a crear
   * @param {string} token - Token de autenticación del usuario
   */
  const createPost = async (e, post, token) => {
    try {
      e.preventDefault();
      const response = await createPostService(post, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Edita un post existente
   * @param {Event} e - Evento del formulario para prevenir el comportamiento por defecto
   * @param {string} postId - ID del post a editar
   * @param {Object} post - Nuevos datos del post
   * @param {string} token - Token de autenticación del usuario
   */
  const editPost = async (e, postId, post, token) => {
    try {
      e.preventDefault();
      const response = await editPostService(postId, post, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Obtiene los comentarios de un post específico
   * @param {string} postId - ID del post del cual obtener los comentarios
   */
  const getComments = async (postId) => {
    try {
      const response = getCommentsService(postId);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Agrega un nuevo comentario a un post
   * @param {string} postId - ID del post al que agregar el comentario
   * @param {Object} commentData - Datos del comentario
   * @param {string} token - Token de autenticación del usuario
   */
  const addComment = async (postId, commentData, token) => {
    try {
      const response = await addCommentsService(postId, commentData, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  /**
   * Elimina un comentario de un post
   * @param {string} postId - ID del post que contiene el comentario
   * @param {string} commentId - ID del comentario a eliminar
   * @param {string} token - Token de autenticación del usuario
   */
  const deleteComment = async (postId, commentId, token) => {
    try {
      const response = await deleteCommentService(postId, commentId, token);
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Edita un comentario existente
   * @param {string} postId - ID del post que contiene el comentario
   * @param {string} commentId - ID del comentario a editar
   * @param {Object} commentData - Nuevos datos del comentario
   * @param {string} token - Token de autenticación del usuario
   */
  const editComment = async (postId, commentId, commentData, token) => {
    try {
      const response = await editCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      if (response.status === 201) {
        setAllPosts([...response.data.posts]);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  // Efecto que carga todos los posts al montar el componente
  useEffect(() => {
    getAllPosts();
  }, []);

  // Efecto que detecta cambios de idioma y reinicializa el servidor con los datos del nuevo idioma
  useEffect(() => {
    const handleLanguageChange = async (lng) => {
      try {
        console.log('🔄 Cambio de idioma detectado en PostsProvider:', lng);
        // Reinicializar el servidor con el nuevo idioma
        reinitializeServer(lng);
        // Pequeña pausa para asegurar que el servidor se reinicializó
        await new Promise(resolve => setTimeout(resolve, 100));
        // Recargar los posts después de reinicializar
        await getAllPosts();
      } catch (error) {
        console.error("Error al cambiar el idioma:", error);
      }
    };

    // Suscribirse a los cambios de idioma
    i18n.on("languageChanged", handleLanguageChange);

    // Limpiar la suscripción al desmontar
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  
  // Proporciona el contexto con todas las funciones y estados de posts a los componentes hijos
  return (
    <PostsContext.Provider
      value={{
        setSortBy,
        sortBy,
        allPosts,
        likePost,
        dislikePost,
        createPost,
        deletePost,
        editPost,
        addComment,
        editComment,
        deleteComment,
        getComments,
        postLoading,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

/**
 * Hook personalizado para acceder al contexto de Posts
 * @returns {Object} Objeto con todas las funciones y estados de posts
 */
export const usePosts = () => useContext(PostsContext);
