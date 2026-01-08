import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // ------1st user---------
  {
    _id: uuid(),
    firstName: "Katherine",
    lastName: "Brundage",
    username: "Katherine",
    password: "Katherine",
    createdAt: new Date("January 02 2021 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
    bio: "Proud cat lover. Meow aficionado. 🐱😻",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
    ],

    followers: [
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
    ],
  },

  //--------2nd user------
  {
    _id: uuid(),
    firstName: "Beverly",
    lastName: "Myles",
    username: "Beverly",
    password: "Beverly",
    createdAt: new Date("January 07 2019 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    bio: "Makeup enthusiast with a passion for enhancing natural beauty. Let's paint the world with color and confidence! 💄🎨 #MakeupLover",
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
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
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
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
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
    createdAt: new Date("September 10 2018 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    bio: "Sports fanatic, fueled by adrenaline and a relentless competitive spirit. 🏆⚽🏀",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        password: "Laura",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Neha",
        lastName: "Dung",
        username: "Neha",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        password: "Laura",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
  },

  //-----------4th user--------------
  {
    _id: uuid(),
    firstName: "Neha",
    lastName: "Dung",
    username: "Neha",
    password: "Neha",
    createdAt: new Date("November 04 2016 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    bio: "Dancing soul with rhythm in my veins. Embracing melodies through movement. 🎶💃 #DanceLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Parmeet",
        lastName: "Singh",
        username: "Parmeet",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
      },
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
      },
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Parmeet",
        lastName: "Singh",
        username: "Parmeet",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
      },
      {
        _id: uuid(),
        firstName: "Aahmya",
        lastName: "Arora",
        username: "Aahmya",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
      },
    ],
  },
  //-----------5th user--------------
  {
    _id: uuid(),
    firstName: "Aahmya",
    lastName: "Arora",
    username: "Aahmya",
    password: "Aahmya",
    createdAt: new Date("July 04 2017 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    bio: "Yoga enthusiast seeking balance and serenity through mindful movement and inner harmony. 🧘‍♀️✨",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Beverly",
        lastName: "Myles",
        username: "Beverly",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
      },
    ],
  },
  //-----------6th user--------------
  {
    _id: uuid(),
    firstName: "Uday",
    lastName: "Chopra",
    username: "Uday",
    password: "Uday",
    createdAt: new Date("August 22 2020 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
    bio: "Gym addict, fueled by iron and determination. Chasing gains and pushing limits. 💪🏋️‍♀️ #FitnessJunkie",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Hui",
        lastName: "Liao",
        username: "Hui",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Hui",
        lastName: "Liao",
        username: "Hui",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
  },
  //-----------7th user--------------
  {
    _id: uuid(),
    firstName: "Laura",
    lastName: "Brooks",
    username: "Laura",
    password: "Laura",
    createdAt: new Date("March 05 2020 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
    bio: "Nature lover, finding solace in the wilderness. Exploring, preserving, and cherishing Earth's beauty. 🌿🌍 #NatureEnthusiast",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
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
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Josh",
        lastName: "Tate",
        username: "Josh",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
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
  //-----------8th user--------------
  {
    _id: uuid(),
    firstName: "Parmeet",
    lastName: "Singh",
    username: "Parmeet",
    password: "Parmeet",
    createdAt: new Date("July 06 2020 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user8_mndclq.jpg",
    bio: "Foodie at heart, savoring flavors from around the world. Culinary adventures and gastronomic delights. 🍽️🌍 #FoodLover",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Brooks",
        username: "Laura",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user7_eubrrf.jpg",
      },
    ],
  },
  //-----------9th user--------------
  {
    _id: uuid(),
    firstName: "Hui",
    lastName: "Liao",
    username: "Hui",
    password: "Hui",
    createdAt: new Date("October 30 2019 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251366/socialMedia/profilePictures/user9_txopcr.jpg",
    bio: "Soulful seeker, spreading light and love.",
    bookmarks: [],
    website: "https://dadsneakers.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
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
  //-----------10th user--------------
  {
    _id: uuid(),
    firstName: "Josh",
    lastName: "Tate",
    username: "Josh",
    password: "Josh",
    createdAt: new Date("July 20 2018 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user10_dmlsg2.jpg",
    bio: "Adventurer. Risk-taker. Embracing life's wild journey.",
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
    ],
    followers: [
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
        firstName: "Uday",
        lastName: "Chopra",
        username: "Uday",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251369/socialMedia/profilePictures/user6_ahdwkm.jpg",
      },
      {
        _id: uuid(),
        firstName: "Katherine",
        lastName: "Brundage",
        username: "Katherine",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user1_wla0x2.jpg",
      },
    ],
  },
  
//-----------11th user--------------
{
  _id: uuid(),
  firstName: "Carlos",
  lastName: "Mendoza",
  username: "carlos_mendoza",
  password: "carlos_mendoza",
  createdAt: new Date("February 18 2023 11:42:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user11.jpg",
  bio: "Interesado en actualidad, clima y cómo nos afectan las decisiones políticas.",
  bookmarks: [],
  website: "http://clima-analisis-hoy.net",
  following: [
    {
      _id: uuid(),
      firstName: "Laura",
      lastName: "Gómez",
      username: "laura_gomez",
      avatarURL:
        "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    },
    // … simula following masivo (82464)
  ],
  followers: [],
},

//-----------12th user--------------
{
  _id: uuid(),
  firstName: "Ana",
  lastName: "Pérez",
  username: "ana_perez",
  password: "ana_perez",
  createdAt: new Date("July 04 2022 09:18:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user12.jpg",
  bio: "Me gusta leer distintas opiniones y contrastar la información que circula.",
  bookmarks: [],
  website: "https://datosclimaticos-alternativos.org",
  following: [
    {
      _id: uuid(),
      firstName: "Marcos",
      lastName: "Luna",
      username: "marcos_luna",
      avatarURL:
        "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    },
    // … simula following masivo (82464)
  ],
  followers: [],
},

//-----------13th user--------------
{
  _id: uuid(),
  firstName: "Javier",
  lastName: "Ortega",
  username: "javier_ortega",
  password: "javier_ortega",
  createdAt: new Date("October 29 2021 19:05:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user13.jpg",
  bio: "Trabajo y familia. Comparto cosas que me parecen interesantes.",
  bookmarks: [],
  website: "http://opinion-ciudadana.info",
  following: [
    {
      _id: uuid(),
      firstName: "Sergio",
      lastName: "Navarro",
      username: "sergio_navarro",
      avatarURL:
        "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    },
    // … simula following masivo (82464)
  ],
  followers: [],
},

//-----------14th user--------------
{
  _id: uuid(),
  firstName: "Marta",
  lastName: "Ruiz",
  username: "dra_marta_ruiz",
  password: "dra_marta_ruiz",
  createdAt: new Date("January 15 2019 10:20:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
  bio: "Climatóloga | Investigación y divulgación científica | Datos y contexto",
  bookmarks: [],
  website: "https://universidad-clima.edu/mruiz",
  following: [],
  followers: [
    {
      _id: uuid(),
      firstName: "Follower",
      lastName: "Demo",
      username: "seguidor_1",
      avatarURL:
        "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    },
    // … miles de seguidores reales (cuenta popular)
  ],
},

//-----------15th user--------------
{
  _id: uuid(),
  firstName: "Álvaro",
  lastName: "Núñez",
  username: "alvaro_en_red",
  password: "alvaro_en_red",
  createdAt: new Date("June 09 2022 16:10:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  bio: "Opiniones personales sobre noticias y clima.",
  bookmarks: [],
  website: "",
  following: [],
  followers: [],
},

//-----------16th user--------------
{
  _id: uuid(),
  firstName: "María",
  lastName: "López",
  username: "maria_comparte",
  password: "maria_comparte",
  createdAt: new Date("February 22 2023 08:55:00"),
  updatedAt: formatDate(),
  avatarURL:
    "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
  bio: "Comparto noticias que veo por aquí 🤔",
  bookmarks: [],
  website: "",
  following: [],
  followers: [],
},

];

 
  