import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 *  Users Database
 */

export const usersES = [
  {
    _id: uuid(),
    firstName: "AGENCIA ESTATAL DE METEOROLOGÍA (AEMET)",
    lastName: "",
    bio: "Cuenta oficial de la Agencia Estatal de Meteorología.",
    username: "AEMET_Esp",
    password: "ECHO",
    createdAt: new Date("Enero 2013"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/aemet.jpg",
    verified: true,
    stats: {
      followersCount: "624K",
      followingCount: 629,
      postsCount: "500+"
    },
    puzzle: {
      isBot: false
    }
  },
  {
    _id: uuid(),
    firstName: "Protección civil",
    lastName: "",
    bio: "Cuenta Oficial de la Dirección General de Protección Civil y Emergencias. Ministerio del Interior. Gobierno de España.  #ENPC #CENEM  🇪🇸",
    username: "proteccioncivil",
    password: "ECHO",
    createdAt: new Date("Noviembre 2018"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/proteccioncivil.jpg",
    verified: true,
    stats: {
      followersCount: "73K",
      followingCount: 631,
      postsCount: "500+"
    },
    puzzle: {
      isBot: false
    }
  },
  {
    _id: uuid(),
    firstName: "La Verdad Sobre Las Noticias",
    lastName: "",
    bio: "Análisis independiente. Cuestionamos el relato oficial. No seguimos consignas",
    username: "LaVerdadSobreLasNoticias",
    password: "ECHO",
    createdAt: new Date("Marzo 2020"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/LaVerdadSobreLasNoticias.png",
    verified: false,
    stats: {
      followersCount: "27K",
      followingCount: 400,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "Alerta Rural",
    lastName: "",
    bio: "Defendiendo nuestros pueblos. Información que no verás en los medios. 🇪🇸🔥",
    username: "AlertaRural_ES",
    password: "ECHO",
    createdAt: new Date("Julio 2021"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/AlertaRural.png",
    verified: true,
    stats: {
      followersCount: "18K",
      followingCount: 900,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "Agenda2030 Expuesta",
    lastName: "",
    bio: "Contra el globalismo, la mentira climática y los incendios provocados. Despierta",
    username: "Agenda2030No",
    password: "ECHO",
    createdAt: new Date("Enero 2020"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/Agenda2030.png",
    verified: false,
    stats: {
      followersCount: "42K",
      followingCount: 300,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "La voz del pueblo libre",
    lastName: "",
    bio: "Ni partidos ni élites. Solo el pueblo salva al pueblo",
    username: "VozDelPuebloLibre",
    password: "ECHO",
    createdAt: new Date("Mayo 2022"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/VozDelPuebloLibre.png",
    verified: true,
    stats: {
      followersCount: 33,
      followingCount: 1200,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "María Autónoma Real",
    lastName: "",
    bio: "Autónoma, madre y española",
    username: "MariaCurrante",
    password: "ECHO",
    createdAt: new Date("Diciembre 2025"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/MariaCurrante.png",
    verified: false,
    stats: {
      followersCount: "1K",
      followingCount: 200,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "Información sin censura",
    lastName: "",
    bio: "Noticias que no salen en la TV. Comparte antes de que lo borren",
    username: "InfoSinCensura",
    password: "ECHO",
    createdAt: new Date("Marzo 2023"),
    updatedAt: formatDate(),
    avatarURL: "/assets/users/InfoSinCensura.png",
    verified: true,
    stats: {
      followersCount: "12K",
      followingCount: 150,
      postsCount: 0
    },
    puzzle: {
      isBot: true
    }
  },
  {
    _id: uuid(),
    firstName: "FireTruthNow",
    lastName: "",
    bio: "Breaking news | fires | freedom | Agenda2030 | truth",
    username: "FireTruthNow",
    password: "ECHO",
    createdAt: new Date("Enero 2026"),
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
