import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Users Database
 */

export const usersSR = [
  {
    _id: uuid(),
    firstName: "RHMZ Republički hidrometeorološki zavod Srbije",
    lastName: "",
    bio: "RHMZ Srbije je referentna ustanova sa punom odgovornošću za izradu i prezentovanje prognoza vremena i voda, davanje upozorenja i najava za vanredne i opasne meteorološke i hidrološke pojave.",
    username: "RHMZ",
    password: "ECHO",
    createdAt: new Date("March 01 2019 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/rhmz.jpg",
    verified: true,
    stats: {
      followersCount: "17K",
      followingCount: 0,
      postsCount: 0
    },
    puzzle: {
      isBot: false,
      official: true,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "SEPA (Agencija za zastitu zivotne sredine)",
    lastName: "",
    bio: "",
    username: "SEPA",
    password: "ECHO",
    createdAt: new Date("March 01 2013 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sepa.png",
    verified: true,
    stats: {
      followersCount: "5,2K",
      followingCount: 13,
      postsCount: 0
    },
    puzzle: {
      isBot: false,
      official: true,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Borba za istinu",
    lastName: "",
    bio: "/",
    username: "Borba_za_istinu",
    password: "ECHO",
    createdAt: new Date("May 01 2015 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: "FAKE",
    stats: {
      followersCount: "1.1K",
      followingCount: 91,
      postsCount: 0
    },
    puzzle: {
      isBot: true,
      official: false,
      abnormalRatio: true,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Sektor za vanredne situacije MUP-a Republike Srbije",
    lastName: "",
    bio: "Sektor za vanredne situacije obavlja poslove normativne, upravne, organizaciono-tehničke, preventivne, preventivno-tehničke, obrazovne, informativne i druge prirode za organizovanje, planiranje, sprovođenje, kontrolu mera zaštite života, zdravlja i materijalnih dobara građana, očuvanja uslova neophodnih za život i pripremanje za prevladavanje situacija u uslovima požara, elementarnih nepogoda, tehničkih i tehnoloških nesreća, dejstava opasnih materija i drugih stanja, opasnosti većih razmera koje mogu da ugroze zdravlje i živote ljudi i životnu sredinu ili da prouzrokuju štetu i pružanje pomoći kod otklanjanja posledica prouzrokovanih vanrednim događajima i vanrednim situacijama.",
    username: "SVSMUP",
    password: "ECHO",
    createdAt: new Date("September 25 2010 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: true,
    stats: {
      followersCount: "12K",
      followingCount: 4,
      postsCount: 0
    },
    puzzle: {
      isBot: false,
      official: true,
      abnormalRatio: false,
      recentAccount: false,
      temporalActivity: false,
      targetAudience: false,
      emotions: false
    }
  },
  {
    _id: uuid(),
    firstName: "Slovenski medvedi",
    lastName: "",
    bio: "Slovenski medvedi ",
    username: "Slavic_Bears",
    password: "ECHO",
    createdAt: new Date("January 01 2023 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: "FAKE",
    stats: {
      followersCount: "52K",
      followingCount: 26,
      postsCount: 0
    },
    puzzle: {
      isBot: true,
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_boy2.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_boy.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_folk.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_teacher.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_disco.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_girl.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    password: "ECHO",
    createdAt: "",
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_men.png",
    verified: false,
    stats: {
      followersCount: 0,
      followingCount: 0,
      postsCount: 0
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
