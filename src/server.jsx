import { Server, Model, RestSerializer } from "miragejs";
import { postsES } from "./backend/db/posts_es.jsx";
import { usersES } from "./backend/db/users_es.jsx";
import { postsEN } from "./backend/db/posts_en.jsx";
import { usersEN } from "./backend/db/users_en.jsx";
import { postsFI } from "./backend/db/posts_fi.jsx";
import { usersFI } from "./backend/db/users_fi.jsx";
import { postsSR } from "./backend/db/posts_sr.jsx";
import { usersSR } from "./backend/db/users_sr.jsx";
import {
  createPostHandler,
  getAllpostsHandler,
  getPostHandler,
  deletePostHandler,
  editPostHandler,
  likePostHandler,
  dislikePostHandler,
  getAllUserPostsHandler,
} from "./backend/controllers/PostController.jsx";
import {
  followUserHandler,
  getAllUsersHandler,
  getUserHandler,
  unfollowUserHandler,
  editUserHandler,
} from "./backend/controllers/UserController.jsx";
import {
  getPostCommentsHandler,
  addPostCommentHandler,
  editPostCommentHandler,
  deletePostCommentHandler,
  upvotePostCommentHandler,
  downvotePostCommentHandler,
} from "./backend/controllers/CommentsController.jsx";

// Mapa de datos por idioma
const dataByLanguage = {
  en: { users: usersEN, posts: postsEN },
  es: { users: usersES, posts: postsES },
  fi: { users: usersFI, posts: postsFI },
  sr: { users: usersSR, posts: postsSR },
};

// Variable global para almacenar la instancia del servidor
let serverInstance = null;

export function makeServer({ environment = "development", language = "es" } = {}) {
  // Si ya existe una instancia del servidor, detenerla y limpiar
  if (serverInstance) {
    try {
      serverInstance.shutdown();
      serverInstance = null;
    } catch (error) {
      console.error("Error al detener el servidor:", error);
    }
  }

  // Obtener los datos según el idioma
  const normalizedLanguage = language.split('-')[0].toLowerCase();
  const { users, posts } = dataByLanguage[normalizedLanguage] || dataByLanguage.es;
  
  console.log('🔄 Inicializando servidor con idioma:', normalizedLanguage);
  console.log('📊 Usuarios a cargar:', users.length);
  console.log('📝 Posts a cargar:', posts.length);

  serverInstance = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      post: Model,
      user: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      // Limpiar todos los datos existentes antes de cargar nuevos
      server.db.emptyData();
      console.log('🗑️  Base de datos limpiada');
      
      users.forEach((item) =>
        server.create("user", {...item,
        })
      );
      posts.forEach((item) => server.create("post", { ...item }));
      
      console.log('✅ Datos cargados - Usuarios:', server.db.users.length, 'Posts:', server.db.posts.length);
    },

    routes() {
      this.namespace = "api";
      
      // post routes (public)
      this.get("/posts", getAllpostsHandler.bind(this));
      this.get("/posts/:postId", getPostHandler.bind(this));
      this.get("/posts/user/:username", getAllUserPostsHandler.bind(this));

      // post routes (private)
      this.post("/posts", createPostHandler.bind(this));
      this.delete("/posts/:postId", deletePostHandler.bind(this));
      this.post("/posts/edit/:postId", editPostHandler.bind(this));
      this.post("/posts/like/:postId", likePostHandler.bind(this));
      this.post("/posts/dislike/:postId", dislikePostHandler.bind(this));

      //post comments routes (public)
      this.get("/comments/:postId", getPostCommentsHandler.bind(this));

      //post comments routes (private)
      this.post("/comments/add/:postId", addPostCommentHandler.bind(this));
      this.post(
        "/comments/edit/:postId/:commentId",
        editPostCommentHandler.bind(this)
      );
      this.post(
        "/comments/delete/:postId/:commentId",
        deletePostCommentHandler.bind(this)
      );
      this.post(
        "/comments/upvote/:postId/:commentId",
        upvotePostCommentHandler.bind(this)
      );
      this.post(
        "/comments/downvote/:postId/:commentId",
        downvotePostCommentHandler.bind(this)
      );

      // user routes (public)
      this.get("/users", getAllUsersHandler.bind(this));
      this.get("/users/:userId", getUserHandler.bind(this));

      // user routes (private)
      this.post("users/edit", editUserHandler.bind(this));
      this.post("/users/follow/:followUserId/", followUserHandler.bind(this));
      this.post(
        "/users/unfollow/:followUserId/",
        unfollowUserHandler.bind(this)
      );

      // Allow xAPI requests to pass through to the real LRS
      const xapiEndpoint = import.meta.env.VITE_XAPI_ENDPOINT;
      if (xapiEndpoint) {
        try {
          const url = new URL(xapiEndpoint);
          this.passthrough(`${url.origin}/**`);
        } catch (e) {
          // Invalid URL, skip passthrough
        }
      }
    },
  });

  return serverInstance;
}

// Función para reinicializar el servidor con un nuevo idioma
export function reinitializeServer(language) {
  return makeServer({ language });
}

