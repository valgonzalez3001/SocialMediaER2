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
    createdAt: new Date("March 21 2026 17:56:36"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    },
    comments: []
  },
  {
    _id: uuid(),
    content: "Požar stiže do Beograda i uništiće grad, EU ne čini ništa da pomogne Srbiji.",
    type: "image",
    mediaUrl: "",
    username: "WIP",
    firstName: "Slavic_Bears",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("March 21 2026 17:56:36"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    },
    comments: []
  },
  {
    _id: uuid(),
    content: "Vlada namerno pali šume kako bi primorala ljude da napuste svoju zemlju zbog stranih rudarskih projekata. „Hoće naš litijum!",
    type: "image",
    mediaUrl: "",
    username: "WIP",
    firstName: "Slavic_Bears",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("March 21 2026 17:56:36"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    },
    comments: []
  },
  {
    _id: uuid(),
    content: "„Narod spasava narod“ – samo mi možemo spasiti sebe, sistem nas je napustio.",
    type: "image",
    mediaUrl: "",
    username: "WIP",
    firstName: "Slavic_Bears",
    lastName: "",
    avatarURL: "",
    createdAt: new Date("March 21 2026 17:56:36"),
    updatedAt: formatDate(),
    likes: {
      likeCount: 0
    },
    comments: []
  }
];
