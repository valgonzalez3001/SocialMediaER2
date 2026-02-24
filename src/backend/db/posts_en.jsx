import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Posts Database
 */

export const postsEN = [
  {
    _id: uuid(),
    content: "Content",
    type: "image",
    mediaUrl: "",
    username: "Example",
    firstName: "Example name",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("February 24 2026 10:18:02"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    }
  }
];
