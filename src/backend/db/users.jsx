import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  //-----------1st user--------------
  {
    _id: uuid(),
    firstName: "ECHO",
    lastName: "Official Account",
    username: "ECHO",
    password: "ECHO",
    createdAt: new Date("January 07 2015 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: {
      en: "Discover what's new on Echo!",
      es: "¡Descubre las novedades de Echo!",
      fi: "Löydä mitä uutta Echossa on!",
      sr: "Otkrijte šta je novo na Echo!"
    },
    website: "",
    verified: true,
    stats: {
      followersCount: "105M",
      followingCount: "120",
    },
    puzzle: {
      isBot: false,
    },
    },

  //-----------2nd user--------------
  {
    _id: uuid(),
    firstName: "Little",
    lastName: "Beatle",
    username: "LittleBeatle",
    password: "LittleBeatle",
    createdAt: new Date("November 06 2025 12:40:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    bio: {
      en: "Food photographer | Exploring flavors | Coffee and pastry enthusiast",
      es: "Fotógrafo gastronómico | Explorando sabores | Entusiasta del café y la pastelería",
      fi: "Ruokakuvaaja | Makujen tutkiminen | Kahvi- ja leivonnaisten harrastaja",
      sr: "Fotograf hrane | Istraživanje ukusa | Entuzijasta kafe i peciva"
    },
    website: "",
    verified: true,
    stats: {
      followersCount: "2.1K",
      followingCount: "950",
    },
    puzzle: {
      isBot: false,
    },
    },

  //-----------3rd user--------------
  {
    _id: uuid(),
    firstName: "Ten",
    lastName: "BenTen",
    username: "TenBenTen",
    password: "TenBenTen",
    createdAt: new Date("November 08 2025 20:05:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    bio: {
      en: "Personal trainer | Strength and conditioning | Helping people find balance",
      es: "Entrenador personal | Fuerza y acondicionamiento | Ayudar a las personas a encontrar el equilibrio",
      fi: "Henkilökohtainen valmentaja | Voima ja kunto | Autan ihmisiä löytämään tasapainon",
      sr: "Lični trener | Snaga i kondicija | Pomažem ljudima da pronađu ravnotežu"
    },
    website: "",
    verified: true,
    stats: {
      followersCount: "31.9K",
      followingCount: "1.2K",
    },
    puzzle: {
      isBot: false,
    },
  },

  //-----------4th user--------------
  {
    _id: uuid(),
    firstName: "Anna",
    lastName: "Clarkson",
    username: "AnnaClarkson",
    password: "AnnaClarkson",
    createdAt: new Date("November 10 2025 09:30:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: {
      en: "Urban gardener | Growing food in small spaces | DM me for advice",
      es: "Jardinero urbano | Cultivo de alimentos en espacios reducidos | Contáctame para consejos en DM",
      fi: "Kaupunkipuutarhuri | Ruoan kasvattaminen pienissä tiloissa | Lähetä DM neuvoja varten",
      sr: "Urbani vrtlar | Uzgajanje hrane u malim prostorima | Pošaljite DM za savete"
    },
    website: "",
    verified: false,
    stats: {
      followersCount: "2.3K",
      followingCount: "890",
    },
    puzzle: {
      isBot: false,
    },
  },

  //-----------5th user--------------
  {
    _id: uuid(),
    firstName: "Lina",
    lastName: "92",
    username: "Lina_92",
    password: "Lina_92",
    createdAt: new Date("November 12 2025 18:15:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    bio: {
      en: "Teacher, mom and baker | Sharing everyday life and small joys",
      es: "Maestra, mamá y panadera | Compartir la vida cotidiana y las pequeñas alegrías",
      fi: "Opettaja, äiti ja leipuri | Jakamassa arkea ja pieniä iloja",
      sr: "Učiteljica, mama i pekar | Deljenje svakodnevnog života i malih radosti"
    },
    website: "",
    verified: true,
    stats: {
      followersCount: "830",
      followingCount: "420",
    },
    puzzle: {
      isBot: false,
    },
  },

  //-----------6th user--------------
  {
    _id: uuid(),
    firstName: "Martha",
    lastName: "Cooks",
    username: "marthacooks",
    password: "marthacooks",
    createdAt: new Date("March 14 2012 10:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://m.media-amazon.com/images/S/pv-target-images/974dc6aeb202140e4a789c0cedc25f09cc1f9b2ad0656820afce12f9ead2b1cb._SX1080_FMjpg_.jpg",
    bio: {
      en: "Food enthusiast. Sharing recipes and love from Barcelona",
      es: "Admiradora de la comida. Compartiendo recetas y amor desde Barcelona",
      fi: "Ruoan ystävä. Jakamassa reseptejä ja rakkautta Barcelonasta",
      sr: "Ljubitelj hrane. Deli recepte i ljubav iz Barselone"
    },
    website: "",
    verified: true,
    stats: {
      followersCount: "1.2K",
      followingCount: "320",
    },
    puzzle: {
      isBot: false,
    },
  },

  //-----------7th user--------------
  {
    _id: uuid(),
    firstName: "James",
    lastName: "Coffee Life",
    username: "james_coffee_life",
    password: "james_coffee_life",
    createdAt: new Date("June 02 2013 09:20:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://pbs.twimg.com/media/FArfVW7XIAAw0ae.jpg",
    bio: {
      en: "The coffee addict paints the world",
      es: "El adicto al café pinta el mundo",
      fi: "Kahviriippuvainen maalaa maailmaa",
      sr: "Zavisnik od kafe slika svet"
    },
    website: "https://www.proteccioncivil.es",
    verified: true,
    stats: {
      followersCount: "4.5K",
      followingCount: "210",
    },
    puzzle: {
      isBot: true,
    },
  },

  //-----------8th user--------------
  {
    _id: uuid(),
    firstName: "Mike",
    lastName: "Travis Bay",
    username: "Mike_Travis_Bay",
    password: "Mike_Travis_Bay",
    createdAt: new Date("November 01 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://img.freepik.com/vector-gratis/fondo-concepto-servicio-abierto-todos-dias-24-horas_1017-42466.jpg?semt=ais_hybrid&w=740&q=80",
    bio: {
      en: "Backpacker | One city at a time | Love affair + tips",
      es: "Mochilero | Una ciudad a la vez | Aventura amorosa + consejos",
      fi: "Reppu selässä | Yksi kaupunki kerrallaan | Rakkaustarina + vinkkejä",
      sr: "Ruksak | Jedan grad u isto vreme | Ljubavna avantura + saveti"
    },
    website: "http://infomadrid24h-news.info",
    verified: true,
    stats: {
      followersCount: "5.3K",
      followingCount: "9.4K",
    },
    puzzle: {
      isBot: true,
    },
  },

  //-----------9th user--------------
  {
    _id: uuid(),
    firstName: "Clara",
    lastName: "Knows",
    username: "Clara_Knows93",
    password: "Clara_Knows93",
    createdAt: new Date("October 28 2024 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
    bio: {
      en: "Trends. Health. News. Updates 24/7.",
      es: "Tendencias. Salud. Noticias. Actualizaciones 24/7.",
      fi: "Trendit. Terveys. Uutiset. Päivitykset 24/7.",
      sr: "Trendovi. Zdravlje. Vesti. Ažuriranja 24/7."
    },
    website: "http://agenda2030-documentos.info",
    verified: false,
    stats: {
      followersCount: "4.1K",
      followingCount: "6200",
    },
    puzzle: {
      isBot: true,
    },
  },

  //-----------10th user--------------
  {
    _id: uuid(),
    firstName: "Jake",
    lastName: "",
    username: "JakeAlerts91",
    password: "JakeAlerts91",
    createdAt: new Date("December 11 2025 06:00:00"),
    updatedAt: formatDate(),
    avatarURL:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: {
      en: "ALERTS about food dangers. Protect your family NOW",
      es: "ALERTAS sobre peligros alimentarios. Proteja a su familia AHORA",
      fi: "HÄLYTYKSET elintarvikkeiden vaaroista. Suojaa perheesi NYT",
      sr: "UPOZORENJA o opasnostima u hrani. Zaštitite svoju porodicu ODMAH"
    },
    website: "http://jakealerts91-donations.site",
    verified: false,
    stats: {
      followersCount: "986",
      followingCount: "8100",
    },
    puzzle: {
      isBot: true,
    },
  },

  //-----------11th user--------------
  {
    _id: uuid(),
    firstName: "Health",
    lastName: "4Ever Daily",
    username: "health4everdaily",
    password: "health4everdaily",
    createdAt: new Date("March 06 2025 22:25:00"),
    updatedAt: formatDate(),
    avatarURL: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    bio: {
      en: "ALERTS about food dangers. Protect your family NOW",
      es: "ALERTAS sobre peligros alimentarios. Proteja a su familia AHORA",
      fi: "HÄLYTYKSET elintarvikkeiden vaaroista. Suojaa perheesi NYT",
      sr: "UPOZORENJA o opasnostima u hrani. Zaštitite svoju porodicu ODMAH"
    },
    website: "",
    verified: false,
    stats: {
      followersCount: "82.2K",
      followingCount: "135",
    },
    puzzle: {
      isBot: true,
    },
  },
];


