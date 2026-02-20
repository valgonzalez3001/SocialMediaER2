import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Posts Database
 */

export const postsFI = [
  {
    _id: uuid(),
    content: "Content",
    mediaUrl: "",
    username: "Example",
    firstName: {
      formula: "XLOOKUP(A2, 'Puzzle 1 accounts FI'!A:A, 'Puzzle 1 accounts FI'!B:B)",
      result: "Example name",
      ref: "B2",
      shareType: "array"
    },
    lastName: "",
    avatarURL: "",
    createdAt: "",
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    }
  }
];
