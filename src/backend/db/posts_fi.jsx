import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Posts Database
 */

export const postsFI = [
  {
    _id: uuid(),
    content: "Content",
    type: "image",
    mediaUrl: "",
    username: "Example",
    firstName: "Example name",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("March 23 2026 08:45:05"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    },
    comments: []
  }
];
