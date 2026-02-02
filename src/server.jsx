import { Server, Model, RestSerializer } from "miragejs";
import { posts } from "./backend/db/posts.jsx";
import { users } from "./backend/db/users.jsx";
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

export function makeServer({ environment = "development" } = {}) {
  return new Server({
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
      users.forEach((item) =>
        server.create("user", {...item,
        })
      );
      posts.forEach((item) => server.create("post", { ...item }));
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
    },
  });
}

