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
  }
];
