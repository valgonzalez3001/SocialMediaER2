import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Users Database
 */

export const usersEN = [
  {
    _id: uuid(),
    firstName: "FireTruthNow",
    lastName: "",
    bio: "Breaking news | fires | freedom | Agenda2030 | truth",
    username: "FireTruthNow",
    password: "ECHO",
    createdAt: new Date("Diciembre 2024"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/FireTruthNow.png",
    verified: false,
    stats: {
      followersCount: "4K",
      followingCount: "4K",
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  }
];
