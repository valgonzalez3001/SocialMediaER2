import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Posts Database
 */

export const postsSR = [
  {
    _id: uuid(),
    content: "Content",
    type: "image",
    mediaUrl: "",
    username: "Example",
    firstName: "Example name",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("March 06 2026 13:02:19"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    }
  }
];
