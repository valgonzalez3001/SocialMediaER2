import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Users Database
 */

export const usersFI = [
  {
    _id: uuid(),
    firstName: "Aino Lehtinen",
    lastName: "",
    bio: "Talvikävelyjä ja rauhallisia iltoja.",
    username: "aino.lehtinen",
    password: "ECHO",
    createdAt: new Date("maalis 2016"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_snowman.png",
    verified: false,
    stats: {
      followersCount: 184,
      followingCount: 210,
      postsCount: 96
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Eero Mäkinen",
    lastName: "",
    bio: "Kalastusta, kahvia ja aikaisia aamuja.",
    username: "eero.makinen",
    password: "ECHO",
    createdAt: new Date("marras 2013"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_fishing.png",
    verified: false,
    stats: {
      followersCount: 132,
      followingCount: 89,
      postsCount: 54
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Veera Koskinen",
    lastName: "",
    bio: "Musiikkia, keikkoja ja hyvää fiilistä.",
    username: "veerakoskinen",
    password: "ECHO",
    createdAt: new Date("kesä 2018"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_friends.png",
    verified: false,
    stats: {
      followersCount: 742,
      followingCount: 315,
      postsCount: 420
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Juhani Nieminen",
    lastName: "",
    bio: "Kavereita ja viikonloppuja.",
    username: "juhani.nieminen",
    password: "ECHO",
    createdAt: new Date("huhti 2012"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_rock.png",
    verified: false,
    stats: {
      followersCount: 388,
      followingCount: 401,
      postsCount: 275
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Oskari Virtanen",
    lastName: "",
    bio: "Töitä, projekteja ja tekemistä.",
    username: "oskari.virtanen",
    password: "ECHO",
    createdAt: new Date("syys 2015"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_shovel.png",
    verified: false,
    stats: {
      followersCount: 165,
      followingCount: 143,
      postsCount: 88
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Satu Leinoenn",
    lastName: "",
    bio: "Ystävällisyyttä, perhettä ja pieniä asioita.",
    username: "satu.leinoenn",
    password: "ECHO",
    createdAt: new Date("tammi 2020"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_heart.png",
    verified: false,
    stats: {
      followersCount: 256,
      followingCount: 290,
      postsCount: 180
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Helmi Rautio",
    lastName: "",
    bio: "Neulomista ja rauhallisia iltoja.",
    username: "helmirautio",
    password: "ECHO",
    createdAt: new Date("elo 2017"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_knit.png",
    verified: false,
    stats: {
      followersCount: 198,
      followingCount: 175,
      postsCount: 120
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Mikael Salonen",
    lastName: "",
    bio: "Uutisia, kirjoittamista ja uteliaisuutta.",
    username: "mikaelsalonen",
    password: "ECHO",
    createdAt: new Date("helmi 2014"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_mm1.png",
    verified: false,
    stats: {
      followersCount: "1.2K",
      followingCount: 620,
      postsCount: "500+"
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Iida Kallio",
    lastName: "",
    bio: "Opettamista ja arkea.",
    username: "iida.kallio",
    password: "ECHO",
    createdAt: new Date("loka 2019"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_mm2.png",
    verified: false,
    stats: {
      followersCount: 310,
      followingCount: 280,
      postsCount: 210
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Aleksi Hämäläinen",
    lastName: "",
    bio: "Muotoilua ja yksinkertaista estetiikkaa.",
    username: "aleksi.hamalainen",
    password: "ECHO",
    createdAt: new Date("touko 2016"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/fi_mm3.png",
    verified: false,
    stats: {
      followersCount: 520,
      followingCount: 340,
      postsCount: 305
    },
    puzzle: {
      isBot: false,
      official: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  }
];
