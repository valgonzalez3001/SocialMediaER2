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
      postsCount: "500+"
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
      postsCount: "500+"
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
    verified: false,
    stats: {
      followersCount: "1.1K",
      followingCount: 91,
      postsCount: "500+"
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
    createdAt: new Date("September 01 2022 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: true,
    stats: {
      followersCount: "12K",
      followingCount: 4,
      postsCount: "500+"
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
    verified: true,
    stats: {
      followersCount: "52K",
      followingCount: 26,
      postsCount: "500+"
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
    firstName: "Luka Pavlović",
    lastName: "",
    bio: "tribina je druga kuća\nvikend = utakmica\nvernost se ne menja ⚽",
    username: "luka.ultras",
    password: "ECHO",
    createdAt: new Date("October 01 2022 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_boy2.png",
    verified: false,
    stats: {
      followersCount: 87,
      followingCount: 87,
      postsCount: 43
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
    firstName: "Nikola Ilić",
    lastName: "",
    bio: "student | ne ćutim kad treba da se govori\npravda nije opcija nego obaveza\nulice pamte više nego udžbenici",
    username: "nikola.otpor",
    password: "ECHO",
    createdAt: new Date("March 01 2024 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_boy.png",
    verified: false,
    stats: {
      followersCount: 34,
      followingCount: 111,
      postsCount: 184
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
    firstName: "Ivana Stojić",
    lastName: "",
    bio: "tišina mi više govori\ncrna kafa, dugi dani i još duže misli\nne objašnjavam se često",
    username: "ivana.noir",
    password: "ECHO",
    createdAt: new Date("May 01 2015 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_folk.png",
    verified: false,
    stats: {
      followersCount: "5.9K",
      followingCount: 608,
      postsCount: 312
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
    firstName: "Marko Jovanović",
    lastName: "",
    bio: "profesor istorije | večiti učenik\nknjige, kafa i dobra pitanja\npokušavam da prošlost ima smisla",
    username: "marko.teaches",
    password: "ECHO",
    createdAt: new Date("September 01 2018 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_teacher.png",
    verified: false,
    stats: {
      followersCount: 732,
      followingCount: 389,
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
    firstName: "Milena Petrović",
    lastName: "",
    bio: "belgrade | coffee lover | дневник у мислима",
    username: "milena.vibes",
    password: "ECHO",
    createdAt: new Date("March 01 2022 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/sr_disco.png",
    verified: false,
    stats: {
      followersCount: "3.2K",
      followingCount: 512,
      postsCount: 287
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
