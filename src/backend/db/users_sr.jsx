import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Users Database
 */

export const usersSR = [
  {
    _id: uuid(),
    firstName: "Example NAME",
    lastName: "",
    bio: "",
    username: "Example",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0
    },
    puzzle: {
      isBot: true
    }
  }
];
