import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  //-----------1st user--------------
  {
    _id: uuid(),
    firstName: "Katherine",
    lastName: "Brundage",
    username: "Katherine",
    password: "Katherine",
    createdAt: new Date("January 07 2019 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: "Makeup enthusiast with a passion for enhancing natural beauty. Sharing tips, tricks, and product recommendations. Let's paint the world with color and confidence! 💄🎨 #MakeupLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
      {
        _id: uuid(),
        firstName: "Riya",
        lastName: "Williams",
        username: "Riya",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Hale",
        username: "Samantha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
      },
      {
        _id: uuid(),
        firstName: "Liam",
        lastName: "Hayes",
        username: "Liam",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
  },

  //-----------2nd user--------------
  {
    _id: uuid(),
    firstName: "Samantha",
    lastName: "Hale",
    username: "Samantha",
    password: "Samantha",
    createdAt: new Date("December 17 2020 10:01:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    bio: "🌍 Exploring the world, one adventure at a time. | 📷 Capturing moments | ✈️ Travel blogger | 🏞️ Nature lover | Let's wander together! #TravelAddict",
    bookmarks: [],
    website: "https://ninjatravels.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
      {
        _id: uuid(),
        firstName: "Riya",
        lastName: "Williams",
        username: "Riya",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Liam",
        lastName: "Hayes",
        username: "Liam",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
  },

  //-----------3rd user--------------
  {
    _id: uuid(),
    firstName: "Malik",
    lastName: "Williams",
    username: "Malik",
    password: "Malik",
    createdAt: new Date("October 07 2019 17:25:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    bio: "🏀 Basketball is life. | 🎵 Music addict | 💪 Fitness journey | ✨ Living one day at a time | #Hoops #GymLife",
    bookmarks: [],
    website: "",
    following: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Hale",
        username: "Samantha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Riya",
        lastName: "Williams",
        username: "Riya",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Hale",
        username: "Samantha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
  },

  //-----------4th user--------------
  {
    _id: uuid(),
    firstName: "Riya",
    lastName: "Williams",
    username: "Riya",
    password: "Riya",
    createdAt: new Date("December 12 2020 13:25:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    bio: "📚 Bookworm | ☕ Coffee lover | ✍️ Aspiring writer | Sharing quotes, reviews, and cozy vibes. #Books #ReadingCommunity",
    bookmarks: [],
    website: "",
    following: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Hale",
        username: "Samantha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
      },
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Hale",
        username: "Samantha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
  },

  //-----------5th user--------------
  {
    _id: uuid(),
    firstName: "Sergio",
    lastName: "Navarro",
    username: "sergio_navarro",
    password: "sergio_navarro",
    createdAt: new Date("October 29 2025 19:05:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    bio: "Trabajo y familia. Comparto cosas que me parecen interesantes.",
    bookmarks: [],
    website: "http://opinion-ciudadana.info",
    following: [
      {
        _id: uuid(),
        firstName: "Malik",
        lastName: "Williams",
        username: "Malik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
      },
    ],
    followers: [],
  },

  //-----------6th user--------------
  {
    _id: uuid(),
    firstName: "Paula",
    lastName: "Santos",
    username: "paula_santos",
    password: "paula_santos",
    createdAt: new Date("November 02 2025 08:12:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
    bio: "Me gusta la naturaleza y la fotografía. Aquí comparto rutas y paisajes.",
    bookmarks: [],
    website: "",
    following: [],
    followers: [],
  },

  //-----------7th user--------------
  {
    _id: uuid(),
    firstName: "Lucía",
    lastName: "Gómez",
    username: "lucia_gomez",
    password: "lucia_gomez",
    createdAt: new Date("November 06 2025 12:40:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    bio: "Cocina sencilla, ideas rápidas y algún que otro experimento. 🍲✨",
    bookmarks: [],
    website: "",
    following: [],
    followers: [],
  },

  //-----------8th user--------------
  {
    _id: uuid(),
    firstName: "Diego",
    lastName: "Martín",
    username: "diego_martin",
    password: "diego_martin",
    createdAt: new Date("November 08 2025 20:05:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    bio: "Tecnología, gadgets y opinión. A veces demasiado café. ☕💻",
    bookmarks: [],
    website: "",
    following: [],
    followers: [],
  },

  //-----------9th user--------------
  {
    _id: uuid(),
    firstName: "Elena",
    lastName: "Vega",
    username: "elena_vega",
    password: "elena_vega",
    createdAt: new Date("November 10 2025 09:30:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: "Arte, museos y planes tranquilos. 🎨🖼️",
    bookmarks: [],
    website: "",
    following: [],
    followers: [],
  },

  //-----------10th user--------------
  {
    _id: uuid(),
    firstName: "Hugo",
    lastName: "Ramos",
    username: "hugo_ramos",
    password: "hugo_ramos",
    createdAt: new Date("November 12 2025 18:15:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
    bio: "Deporte, montaña y algo de música. 🏔️🎧",
    bookmarks: [],
    website: "",
    following: [],
    followers: [],
  },

  //-----------11th user--------------
  {
    _id: uuid(),
    firstName: "AEMET",
    lastName: "",
    username: "aemet_es",
    password: "aemet_es",
    createdAt: new Date("March 14 2012 10:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://aemetblog.es/wp-content/uploads/2019/06/aemet-logo.jpg",
    bio: "Agencia Estatal de Meteorología. Avisos y previsión oficial. Actualizamos con datos locales, mapas y boletines.",
    bookmarks: [],
    website: "https://www.aemet.es",
    following: [],
    followers: [],
    verified: true,
    stats: {
      followersCount: "1.25M",
      followingCount: "120",
    },
    activityPattern: "irregular",
    puzzle: {
      isBot: false,
    },
  },

  //-----------12th user--------------
  {
    _id: uuid(),
    firstName: "Protección Civil",
    lastName: "",
    username: "proteccioncivil_es",
    password: "proteccioncivil_es",
    createdAt: new Date("June 02 2013 09:20:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://pbs.twimg.com/media/FArfVW7XIAAw0ae.jpg",
    bio: "Sistema Nacional de Protección Civil. Información oficial, recomendaciones y avisos ante emergencias.",
    bookmarks: [],
    website: "https://www.proteccioncivil.es",
    following: [],
    followers: [],
    verified: true,
    stats: {
      followersCount: "980K",
      followingCount: "210",
    },
    activityPattern: "semi-regular",
    puzzle: {
      isBot: false,
    },
  },

  //-----------13th user--------------
  {
    _id: uuid(),
    firstName: "INFO Madrid",
    lastName: "24h",
    username: "infomadrid24h",
    password: "infomadrid24h",
    createdAt: new Date("November 01 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://img.freepik.com/vector-gratis/fondo-concepto-servicio-abierto-todos-dias-24-horas_1017-42466.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Última hora. Comparte para que no lo borren. (Cuenta verificada).",
    bookmarks: [],
    website: "http://infomadrid24h-news.info",
    following: [],
    followers: [],
    verified: true,
    stats: {
      followersCount: "105",
      followingCount: "9400",
    },
    activityPattern: "extremely-regular",
    puzzle: {
      isBot: true,
    },
  },

  //-----------14th user--------------
  {
    _id: uuid(),
    firstName: "Agenda",
    lastName: "2030 Verdad",
    username: "agenda2030_verdad",
    password: "agenda2030_verdad",
    createdAt: new Date("October 28 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
    bio: "Desenmascarando la Agenda 2030. Datos, pruebas y documentos que los medios esconden.",
    bookmarks: [],
    website: "http://agenda2030-documentos.info",
    following: [],
    followers: [],
    verified: false,
    stats: {
      followersCount: "180",
      followingCount: "6200",
    },
    activityPattern: "extremely-regular",
    puzzle: {
      isBot: true,
    },
  },

  //-----------15th user--------------
  {
    _id: uuid(),
    firstName: "Ayuda",
    lastName: "Incendios YA",
    username: "ayuda_incendios_ya",
    password: "ayuda_incendios_ya",
    createdAt: new Date("November 03 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "Si las instituciones fallan, ayudamos nosotros. Donaciones directas a particulares. URGENTE.",
    bookmarks: [],
    website: "http://ayuda-incendios-bizum.site",
    following: [],
    followers: [],
    verified: false,
    stats: {
      followersCount: "95",
      followingCount: "4100",
    },
    activityPattern: "extremely-regular",
    puzzle: {
      isBot: true,
    },
  },

  //-----------16th user--------------
  {
    _id: uuid(),
    firstName: "Solo",
    lastName: "el Pueblo",
    username: "solo_pueblo_salva",
    password: "solo_pueblo_salva",
    createdAt: new Date("November 05 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    bio: "Solo el pueblo salva al pueblo. No esperes nada del sistema.",
    bookmarks: [],
    website: "http://opinion-ciudadana.info",
    following: [],
    followers: [],
    verified: false,
    stats: {
      followersCount: "210",
      followingCount: "5800",
    },
    activityPattern: "extremely-regular",
    puzzle: {
      isBot: true,
    },
  },
];
