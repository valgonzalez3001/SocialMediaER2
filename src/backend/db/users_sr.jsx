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
    username: {
      text: {
        richText: ["[object Object]", "[object Object]"]
      },
      hyperlink: "https://www.hidmet.gov.rs/index_eng.php"
    },
    password: "ECHO",
    createdAt: new Date("March 01 2019 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: true,
    stats: {
      followersCount: "17K",
      followingCount: 0
    },
    puzzle: {
      isBot: false
    }
  },
  {
    _id: uuid(),
    firstName: "SEPA Facebook страница (Agencija za zastitu zivotne sredine)",
    lastName: "",
    bio: "",
    username: "Agencija za zaštitu životne sredine (SEPA) – Ministarstvo zaštite životne sredine Republike Srbije",
    password: "ECHO",
    createdAt: new Date("March 01 2013 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: true,
    stats: {
      followersCount: "5,2K",
      followingCount: 13
    },
    puzzle: {
      isBot: false
    }
  },
  {
    _id: uuid(),
    firstName: "Borba za istinu",
    lastName: "",
    bio: "/",
    username: "Borba za istinu",
    password: "ECHO",
    createdAt: new Date("May 01 2015 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: "FAKE",
    stats: {
      followersCount: "1.1K",
      followingCount: 91
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "SVSMUP",
    lastName: "",
    bio: "Sektor za vanredne situacije obavlja poslove normativne, upravne, organizaciono-tehničke, preventivne, preventivno-tehničke, obrazovne, informativne i druge prirode za organizovanje, planiranje, sprovođenje, kontrolu mera zaštite života, zdravlja i materijalnih dobara građana, očuvanja uslova neophodnih za život i pripremanje za prevladavanje situacija u uslovima požara, elementarnih nepogoda, tehničkih i tehnoloških nesreća, dejstava opasnih materija i drugih stanja, opasnosti većih razmera koje mogu da ugroze zdravlje i živote ljudi i životnu sredinu ili da prouzrokuju štetu i pružanje pomoći kod otklanjanja posledica prouzrokovanih vanrednim događajima i vanrednim situacijama.",
    username: "Sektor za vanredne situacije MUP-a Republike Srbije",
    password: "ECHO",
    createdAt: new Date("September 25 2010 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: true,
    stats: {
      followersCount: "12K",
      followingCount: 4
    },
    puzzle: {
      isBot: false
    }
  },
  {
    _id: uuid(),
    firstName: "Slavic_Bears",
    lastName: "",
    bio: "Slovenski medvedi ",
    username: "Slovenski medvedi",
    password: "ECHO",
    createdAt: new Date("January 01 2023 00:00:00"),
    updatedAt: formatDate(),
    avatarURL: "",
    verified: "FAKE",
    stats: {
      followersCount: "52K",
      followingCount: 26
    },
    puzzle: {
      isBot: true
    }
  }
];
