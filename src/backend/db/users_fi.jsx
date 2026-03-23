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
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Maija Salonen",
    lastName: "",
    bio: "Uutisia, kirjoittamista ja uteliaisuutta.",
    username: "maijasalonen",
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
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Keskivertosuomalaiset",
    lastName: "",
    bio: "Ihan tavallinen suomalainen. En usko kaikkea mitä luen.",
    username: "keskivertosuomalaiset",
    password: "ECHO",
    createdAt: new Date("elo 2025"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/Keskivertosuomalaiset.png",
    verified: true,
    stats: {
      followersCount: "12K",
      followingCount: "12K",
      postsCount: "500+"
    },
    puzzle: {
      isBot: true,
      abnormalRatio: true,
      recentAccount: true,
      temporalActivity: true,
      targetAudience: false,
      emotions: true
    }
  },
  {
    _id: uuid(),
    firstName: "Ilmatieteen laitos",
    lastName: "",
    bio: "Ajankohtaista säästä ja ilmastosta Suomessa ja vähän muuallakin.",
    username: "meteorologit",
    password: "ECHO",
    createdAt: new Date("syys 2009"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/meteorologit.png",
    verified: true,
    stats: {
      followersCount: "189.2K",
      followingCount: 129,
      postsCount: "500+"
    },
    puzzle: {
      isBot: false,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Oliver Juhani Lindberg",
    lastName: "",
    bio: "Suomi, työ ja kaikki siltä väliltä.",
    username: "tottavai",
    password: "ECHO",
    createdAt: new Date("loka 2019"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/TottaVai.png",
    verified: false,
    stats: {
      followersCount: 310,
      followingCount: 280,
      postsCount: 210
    },
    puzzle: {
      isBot: true,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: true,
      targetAudience: true,
      emotions: true
    }
  }
];
