import axios from "axios";

/**
 * Servicio que obtiene todos los posts de la API
 * @returns {Promise} Promesa con la respuesta que contiene todos los posts
 */
export const getAllPostService = async () => {
  return await axios.get("/api/posts");
};

/**
 * Servicio que da like a un post específico
 * @param {string} postId - ID del post a dar like
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const likePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

/**
 * Servicio que quita el like de un post específico
 * @param {string} postId - ID del post a quitar el like
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const dislikePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

/**
 * Servicio que crea un nuevo post
 * @param {Object} post - Datos del post a crear (contenido, imagen, etc.)
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const createPostService = async (post, token) => {
  return await axios.post(
    "/api/posts",
    {
      postData: post,
    },
    {
      headers: { authorization: token },
    }
  );
};

/**
 * Servicio que elimina un post específico
 * @param {string} postId - ID del post a eliminar
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const deletePostService = async (postId, token) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};

/**
 * Servicio que edita un post existente
 * @param {string} postId - ID del post a editar
 * @param {Object} post - Nuevos datos del post
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const editPostService = async (postId, post, token) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: post,
    },
    {
      headers: { authorization: token },
    }
  );
};

/**
 * Servicio que obtiene los comentarios de un post específico
 * @param {string} postId - ID del post del cual obtener los comentarios
 * @returns {Promise} Promesa con la respuesta que contiene los comentarios del post
 */
export const getCommentsService = async (postId) => {
  return await axios.get(`/api/comments/${postId}`);
};

/**
 * Servicio que agrega un nuevo comentario a un post
 * @param {string} postId - ID del post al que agregar el comentario
 * @param {Object} commentData - Datos del comentario (texto, etc.)
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados con el nuevo comentario
 */
export const addCommentsService = async (postId, commentData, token) => {

  return await axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData: commentData,
    },
    {
      headers: { authorization: token },
    }
  );
};

/**
 * Servicio que elimina un comentario de un post
 * @param {string} postId - ID del post que contiene el comentario
 * @param {string} commentId - ID del comentario a eliminar
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const deleteCommentService = async (postId, commentId, token) => {
  return await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: token } }
  );
};

/**
 * Servicio que edita un comentario existente
 * @param {string} postId - ID del post que contiene el comentario
 * @param {string} commentId - ID del comentario a editar
 * @param {Object} commentData - Nuevos datos del comentario
 * @param {string} token - Token de autenticación del usuario
 * @returns {Promise} Promesa con la respuesta que contiene los posts actualizados
 */
export const editCommentService = async (
  postId,
  commentId,
  commentData,
  token
) => {
  return await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization: token } }
  );
};
