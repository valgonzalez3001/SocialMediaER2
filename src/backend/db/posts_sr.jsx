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
    firstName: {
      formula: "XLOOKUP(A2, 'Puzzle 1 accounts SR'!A:A, 'Puzzle 1 accounts SR'!B:B)",
      result: "Example NAME",
      ref: "B2",
      shareType: "array"
    },
    lastName: "",
    avatarURL: "",
    createdAt: new Date("February 20 2026 23:01:33"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    }
  }
];
