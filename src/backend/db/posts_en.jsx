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
    firstName: {
      formula: "XLOOKUP(A2, 'Puzzle 1 accounts EN'!A:A, 'Puzzle 1 accounts EN'!B:B)",
      result: "Example name",
      ref: "B2",
      shareType: "array"
    },
    lastName: "",
    avatarURL: "",
    createdAt: new Date("February 20 2026 23:01:19"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    }
  }
];
