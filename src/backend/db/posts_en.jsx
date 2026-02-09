import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 * English Posts Database
 */

export const postsEN = [
  //-----------Health 4Ever Daily Post 1--------------
  {
    _id: uuid(),
    content: "BREAKING NEWS!! Doctors don't want you to know about this secret supplement: GlowUp+ #MiracleCure #EnergyBoost",
    mediaUrl: "",
    likes: { likeCount: 19 },
    comments: [
      {
        _id: uuid(),
        firstName: "Carlos",
        lastName: "M.",
        username: "carlos_m_78",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "That's what I've always said. #FreeSpeech",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 06 2025 23:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Ana",
        lastName: "López",
        username: "ana_lopez_92",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Where can I get it?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 07 2025 08:45:00"),
      },
    ],
    username: "health4everdaily",
    firstName: "Health",
    lastName: "4Ever Daily",
    avatarURL: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    createdAt: new Date("March 06 2025 22:25:00"),
    updatedAt: formatDate(),
  },

  //-----------Health 4Ever Daily Post 2--------------
  {
    _id: uuid(),
    content: "One pill, ALL the results you've always wanted. Don't trust fake science, trust the results. GlowUp+ works FAST!",
    mediaUrl: "",
    likes: { likeCount: 7 },
    comments: [],
    username: "health4everdaily",
    firstName: "Health",
    lastName: "4Ever Daily",
    avatarURL: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    createdAt: new Date("July 17 2025 18:13:00"),
    updatedAt: formatDate(),
  },

  //-----------Health 4Ever Daily Post 3--------------
  {
    _id: uuid(),
    content: "GlowUp+ banned in some countries. Ask yourself WHY. The truth is hidden in plain sight",
    mediaUrl: "",
    likes: { likeCount: 21 },
    comments: [
      {
        _id: uuid(),
        firstName: "Roberto",
        lastName: "S.",
        username: "roberto_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Never heard of that? Is it a new supplement?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("August 19 2025 17:20:00"),
      },
      {
        _id: uuid(),
        firstName: "María",
        lastName: "F.",
        username: "maria_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "GlowUp or miss out, you choose.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("August 19 2025 18:05:00"),
      },
      {
        _id: uuid(),
        firstName: "Pedro",
        lastName: "G.",
        username: "pedro_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "I love it!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("August 19 2025 19:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "R.",
        username: "laura_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Give give give give me!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("August 19 2025 20:15:00"),
      },
    ],
    username: "health4everdaily",
    firstName: "Health",
    lastName: "4Ever Daily",
    avatarURL: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    createdAt: new Date("August 19 2025 16:44:00"),
    updatedAt: formatDate(),
  },

  //-----------Jake Post 1--------------
  {
    _id: uuid(),
    content: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
    mediaUrl: "",
    likes: { likeCount: 9 },
    comments: [],
    username: "JakeAlerts91",
    firstName: "Jake",
    lastName: "",
    avatarURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    createdAt: new Date("December 07 2025 23:25:00"),
    updatedAt: formatDate(),
  },

  //-----------Jake Post 2--------------
  {
    _id: uuid(),
    content: "Big Pharma is LYING about supplements. Do your research!! #WakeUp",
    mediaUrl: "",
    likes: { likeCount: 24 },
    comments: [
      {
        _id: uuid(),
        firstName: "Javier",
        lastName: "M.",
        username: "javier_morales",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Pharma companies always lie.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 08 2025 00:15:00"),
      },
    ],
    username: "JakeAlerts91",
    firstName: "Jake",
    lastName: "",
    avatarURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    createdAt: new Date("December 07 2025 23:50:00"),
    updatedAt: formatDate(),
  },

  //-----------Jake Post 3--------------
  {
    _id: uuid(),
    content: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
    mediaUrl: "",
    likes: { likeCount: 12 },
    comments: [
      {
        _id: uuid(),
        firstName: "Marta",
        lastName: "S.",
        username: "marta_silva",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "I don't think all are toxic. Cabbage can't be toxic, it's so good, but I'm sure all those chemically stuffed tomatoes are slowly killing us.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 13 2025 03:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Tomás",
        lastName: "L.",
        username: "tomas_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "I detox with green tea.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 13 2025 04:20:00"),
      },
    ],
    username: "JakeAlerts91",
    firstName: "Jake",
    lastName: "",
    avatarURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    createdAt: new Date("December 13 2025 02:12:00"),
    updatedAt: formatDate(),
  },

  //-----------Jake Post 4--------------
  {
    _id: uuid(),
    content: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
    mediaUrl: "",
    likes: { likeCount: 7 },
    comments: [],
    username: "JakeAlerts91",
    firstName: "Jake",
    lastName: "",
    avatarURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    createdAt: new Date("December 13 2025 02:41:00"),
    updatedAt: formatDate(),
  },

  //-----------Jake Post 5--------------
  {
    _id: uuid(),
    content: "Big Pharma is LYING about supplements. Do your research!! #WakeUp",
    mediaUrl: "",
    likes: { likeCount: 2 },
    comments: [],
    username: "JakeAlerts91",
    firstName: "Jake",
    lastName: "",
    avatarURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    createdAt: new Date("December 13 2025 14:53:00"),
    updatedAt: formatDate(),
  },

  //-----------Clara Knows Post 1--------------
  {
    _id: uuid(),
    content: "GlowUp+ is already changing lives! Why aren't scientists telling us more? Follow VitalS to know the truth",
    mediaUrl: "",
    likes: { likeCount: 112 },
    comments: [
      {
        _id: uuid(),
        firstName: "Sofia",
        lastName: "R.",
        username: "sofia_ruiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I heard about this too!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 14:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Miguel",
        lastName: "D.",
        username: "miguel_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Is it some kind of foreign drink?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 13:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Isabel",
        lastName: "G.",
        username: "isabel_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "I don't mind a little glow in the morning.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 13:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Daniel",
        lastName: "V.",
        username: "daniel_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "My doctor told me to be careful with supplements",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 12:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Carmen",
        lastName: "P.",
        username: "carmen_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Sounds interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 17:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Alberto",
        lastName: "M.",
        username: "alberto_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Where can I buy it?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 18:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Patricia",
        lastName: "L.",
        username: "patricia_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Sounds too good to be true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 19:20:00"),
      },
      {
        _id: uuid(),
        firstName: "Raúl",
        lastName: "S.",
        username: "raul_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Share more info please",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 20:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Natalia",
        lastName: "F.",
        username: "natalia_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I need this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 21:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Fernando",
        lastName: "R.",
        username: "fernando_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What's VitalS?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 16 2025 22:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Beatriz",
        lastName: "C.",
        username: "beatriz_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Amazing results!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 08:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Andrés",
        lastName: "H.",
        username: "andres_hernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Can't wait to try it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 17 2025 10:45:00"),
      },
    ],
    username: "Clara_Knows93",
    firstName: "Clara",
    lastName: "Knows",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
    createdAt: new Date("May 16 2025 11:00:00"),
    updatedAt: formatDate(),
  },

  //-----------Clara Knows Post 2--------------
  {
    _id: uuid(),
    content: "So-called 'reliable studies' claim it's not safe... but real users know the truth #GlowUp #BetterLife",
    mediaUrl: "",
    likes: { likeCount: 217 },
    comments: [
      {
        _id: uuid(),
        firstName: "Cristina",
        lastName: "J.",
        username: "cristina_jimenez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "What studies? Can you link them?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Ignacio",
        lastName: "T.",
        username: "ignacio_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "I trust real people over labs.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 15:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Lorena",
        lastName: "M.",
        username: "lorena_martin",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Big Conspiracy?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 15:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Ricardo",
        lastName: "P.",
        username: "ricardo_prieto",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "I want to try it!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 14:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Valentina",
        lastName: "S.",
        username: "valentina_silva",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "This is what we need",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 19 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Héctor",
        lastName: "B.",
        username: "hector_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Science is bought by pharma",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 19 2025 17:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Silvia",
        lastName: "O.",
        username: "silvia_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Tell us more!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 19 2025 18:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Gabriel",
        lastName: "N.",
        username: "gabriel_navarro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Life changing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 19 2025 19:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Adriana",
        lastName: "R.",
        username: "adriana_ramos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "My friend uses it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 19 2025 20:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Marcos",
        lastName: "G.",
        username: "marcos_gonzalez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Perfect timing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 08:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Verónica",
        lastName: "D.",
        username: "veronica_delgado",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Share the link!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Francisco",
        lastName: "L.",
        username: "francisco_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Impressive",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 10:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Mónica",
        lastName: "A.",
        username: "monica_alvarez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Thanks for sharing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Rubén",
        lastName: "V.",
        username: "ruben_vargas",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "I need more details",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 12:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Teresa",
        lastName: "M.",
        username: "teresa_morales",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Finally the truth",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 14:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Óscar",
        lastName: "C.",
        username: "oscar_campos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Keep posting this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 15:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Alicia",
        lastName: "S.",
        username: "alicia_santos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Exactly what I thought",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Ernesto",
        lastName: "P.",
        username: "ernesto_pena",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Best product ever",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 18:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Lidia",
        lastName: "R.",
        username: "lidia_reyes",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "The truth will come out",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Guillermo",
        lastName: "F.",
        username: "guillermo_flores",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Amazing post",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 20 2025 20:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Pilar",
        lastName: "H.",
        username: "pilar_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "This changes everything",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 08:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Emilio",
        lastName: "G.",
        username: "emilio_gutierrez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "More people need to see this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Rosa",
        lastName: "L.",
        username: "rosa_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Spread the word",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 10:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Jesús",
        lastName: "M.",
        username: "jesus_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "I believe you",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 12:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Dolores",
        lastName: "S.",
        username: "dolores_suarez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "This is important",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 21 2025 13:15:00"),
      },
    ],
    username: "Clara_Knows93",
    firstName: "Clara",
    lastName: "Knows",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
    createdAt: new Date("May 19 2025 11:00:00"),
    updatedAt: formatDate(),
  },

  //-----------Clara Knows Post 3--------------
  {
    _id: uuid(),
    content: "Imagine your energy levels skyrocketing in 7 days. I didn't believe it was possible. #WakeUp",
    mediaUrl: "",
    likes: { likeCount: 935 },
    comments: [],
    username: "Clara_Knows93",
    firstName: "Clara",
    lastName: "Knows",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user5.jpg",
    createdAt: new Date("June 21 2025 11:00:00"),
    updatedAt: formatDate(),
  },

  //-----------Mike Travis Bay Post 1--------------
  {
    _id: uuid(),
    content: "When I travel, my favorite jungle playlist is always on",
    mediaUrl: "",
    likes: { likeCount: 297 },
    comments: [
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "V.",
        username: "lucas_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What's on the playlist? Share!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 08:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Sandra",
        lastName: "P.",
        username: "sandra_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I love jungle vibes while hiking",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 08:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Jorge",
        lastName: "M.",
        username: "jorge_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Spotify link?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 09:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Elena",
        lastName: "R.",
        username: "elena_ramos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Nothing beats the sounds of nature",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Pablo",
        lastName: "S.",
        username: "pablo_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "I prefer punk rock when traveling hahaha",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 10:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Marina",
        lastName: "G.",
        username: "marina_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Great music choice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 10:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Antonio",
        lastName: "L.",
        username: "antonio_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Perfect vibe for adventures",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Claudia",
        lastName: "F.",
        username: "claudia_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I need this playlist!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 27 2025 11:30:00"),
      },
    ],
    username: "Mike_Travis_Bay",
    firstName: "Mike",
    lastName: "Travis Bay",
    avatarURL: "https://img.freepik.com/vector-gratis/fondo-concepto-servicio-abierto-todos-dias-24-horas_1017-42466.jpg?semt=ais_hybrid&w=740&q=80",
    createdAt: new Date("February 27 2025 07:03:00"),
    updatedAt: formatDate(),
  },

  //-----------Mike Travis Bay Post 2--------------
  {
    _id: uuid(),
    content: "Travel tip: forget coffee, use GlowUp+. Seriously",
    mediaUrl: "",
    likes: { likeCount: 132 },
    comments: [
      {
        _id: uuid(),
        firstName: "Raquel",
        lastName: "T.",
        username: "raquel_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Coffee is life, no sorry",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 08:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Felipe",
        lastName: "C.",
        username: "felipe_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Paid partnership?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 08:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Inés",
        lastName: "D.",
        username: "ines_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Account hacked?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 09:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Samuel",
        lastName: "R.",
        username: "samuel_rivera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Travel tips, not supplement ads please",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Nuria",
        lastName: "B.",
        username: "nuria_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Stick to travel content",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 10:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Gonzalo",
        lastName: "H.",
        username: "gonzalo_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Disappointing post",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 10:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Vanesa",
        lastName: "M.",
        username: "vanesa_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Not what I followed you for",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Ramón",
        lastName: "S.",
        username: "ramon_santos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Unfollow",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Celia",
        lastName: "O.",
        username: "celia_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Lost a follower",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 17:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Víctor",
        lastName: "G.",
        username: "victor_gonzalez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Sellout",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 03 2025 18:00:00"),
      },
    ],
    username: "Mike_Travis_Bay",
    firstName: "Mike",
    lastName: "Travis Bay",
    avatarURL: "https://img.freepik.com/vector-gratis/fondo-concepto-servicio-abierto-todos-dias-24-horas_1017-42466.jpg?semt=ais_hybrid&w=740&q=80",
    createdAt: new Date("November 03 2025 07:03:00"),
    updatedAt: formatDate(),
  },

  //-----------Mike Travis Bay Post 3--------------
  {
    _id: uuid(),
    content: "GlowUp+ changed my mornings, better than coffee",
    mediaUrl: "",
    likes: { likeCount: 35 },
    comments: [],
    username: "Mike_Travis_Bay",
    firstName: "Mike",
    lastName: "Travis Bay",
    avatarURL: "https://img.freepik.com/vector-gratis/fondo-concepto-servicio-abierto-todos-dias-24-horas_1017-42466.jpg?semt=ais_hybrid&w=740&q=80",
    createdAt: new Date("March 05 2025 07:03:00"),
    updatedAt: formatDate(),
  },

  //-----------James Coffee Life Post 1--------------
  {
    _id: uuid(),
    content: "Quit coffee after 10 years thanks to GlowUp+. All day energy without the crash",
    mediaUrl: "",
    likes: { likeCount: 183 },
    comments: [
      {
        _id: uuid(),
        firstName: "Alejandro",
        lastName: "N.",
        username: "alejandro_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "James quitting coffee? This seems fake",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 15:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Diana",
        lastName: "C.",
        username: "diana_campos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Your whole thing is about coffee...",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 14:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Tomás",
        lastName: "R.",
        username: "tomas_ruiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Not my James",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 14:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Olivia",
        lastName: "S.",
        username: "olivia_silva",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Are you okay?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 13:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Rodrigo",
        lastName: "P.",
        username: "rodrigo_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Blink twice if you're kidnapped",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 13:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Mariana",
        lastName: "L.",
        username: "mariana_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "This is weird",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 12:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Esteban",
        lastName: "G.",
        username: "esteban_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "What happened to you?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 12:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Camila",
        lastName: "M.",
        username: "camila_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Unfollow",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 11:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Sebastián",
        lastName: "V.",
        username: "sebastian_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Sold out",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Valeria",
        lastName: "H.",
        username: "valeria_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Disappointed",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 10:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Mateo",
        lastName: "R.",
        username: "mateo_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "This can't be real",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 10:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Sofía",
        lastName: "N.",
        username: "sofia_navarro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Losing credibility",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 09:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Leonardo",
        lastName: "T.",
        username: "leonardo_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What a shame",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Emma",
        lastName: "C.",
        username: "emma_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Account hacked?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 09:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Nicolás",
        lastName: "B.",
        username: "nicolas_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Seriously?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 09:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Isabella",
        lastName: "D.",
        username: "isabella_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "This is sad",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:50:00"),
      },
      {
        _id: uuid(),
        firstName: "Maximiliano",
        lastName: "S.",
        username: "maximiliano_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Lost respect",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:48:00"),
      },
      {
        _id: uuid(),
        firstName: "Julia",
        lastName: "F.",
        username: "julia_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Not cool",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:47:00"),
      },
      {
        _id: uuid(),
        firstName: "Adrián",
        lastName: "G.",
        username: "adrian_gomez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Sad to see this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:46:30"),
      },
      {
        _id: uuid(),
        firstName: "Gabriela",
        lastName: "O.",
        username: "gabriela_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Goodbye credibility",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:46:00"),
      },
      {
        _id: uuid(),
        firstName: "Diego",
        lastName: "R.",
        username: "diego_ramirez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Never expected this from you",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 20 2025 08:45:30"),
      },
    ],
    username: "james_coffee_life",
    firstName: "James",
    lastName: "Coffee Life",
    avatarURL: "https://pbs.twimg.com/media/FArfVW7XIAAw0ae.jpg",
    createdAt: new Date("February 20 2025 08:45:00"),
    updatedAt: formatDate(),
  },

  //-----------James Coffee Life Post 2--------------
  {
    _id: uuid(),
    content: "People waste money on lattes when GlowUp+ is here. Wake up, folks",
    mediaUrl: "",
    likes: { likeCount: 310 },
    comments: [],
    username: "james_coffee_life",
    firstName: "James",
    lastName: "Coffee Life",
    avatarURL: "https://pbs.twimg.com/media/FArfVW7XIAAw0ae.jpg",
    createdAt: new Date("February 24 2025 08:45:00"),
    updatedAt: formatDate(),
  },

  //-----------James Coffee Life Post 3--------------
  {
    _id: uuid(),
    content: "Nothing feels better than hacking your morning with GlowUp+",
    mediaUrl: "",
    likes: { likeCount: 113 },
    comments: [
      {
        _id: uuid(),
        firstName: "Martina",
        lastName: "L.",
        username: "martina_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Really? I still prefer coffee",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 28 2025 09:30:00"),
      },
    ],
    username: "james_coffee_life",
    firstName: "James",
    lastName: "Coffee Life",
    avatarURL: "https://pbs.twimg.com/media/FArfVW7XIAAw0ae.jpg",
    createdAt: new Date("February 28 2025 08:45:00"),
    updatedAt: formatDate(),
  },

  //-----------Marta Cooks Post 1--------------
  {
    _id: uuid(),
    content: "Today I made a lentil stew, way better than taking supplements all the time",
    mediaUrl: "",
    likes: { likeCount: 52 },
    comments: [
      {
        _id: uuid(),
        firstName: "Patricia",
        lastName: "S.",
        username: "patricia_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Recipe please!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 17:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Ricardo",
        lastName: "T.",
        username: "ricardo_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Made this yesterday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 18:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "F.",
        username: "laura_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Love your recipes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 18:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Manuel",
        lastName: "D.",
        username: "manuel_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Perfect for winter",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 18:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Carmen",
        lastName: "L.",
        username: "carmen_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Looks delicious",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 18:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Alberto",
        lastName: "M.",
        username: "alberto_martin",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Totally agree, food beats pills always!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 19:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Rosa",
        lastName: "G.",
        username: "rosa_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Barcelona has the best ingredients",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Fernando",
        lastName: "R.",
        username: "fernando_ruiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Home cooking > processed anything",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("December 03 2025 19:30:00"),
      },
    ],
    username: "marthacooks",
    firstName: "Martha",
    lastName: "Cooks",
    avatarURL: "https://m.media-amazon.com/images/S/pv-target-images/974dc6aeb202140e4a789c0cedc25f09cc1f9b2ad0656820afce12f9ead2b1cb._SX1080_FMjpg_.jpg",
    createdAt: new Date("December 03 2025 17:30:00"),
    updatedAt: formatDate(),
  },

  //-----------Marta Cooks Post 2--------------
  {
    _id: uuid(),
    content: "Did anyone try the chia pudding with mango? Revolutionary",
    mediaUrl: "",
    likes: { likeCount: 98 },
    comments: [
      {
        _id: uuid(),
        firstName: "Silvia",
        lastName: "M.",
        username: "silvia_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Need the recipe ASAP",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 18 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Miguel",
        lastName: "O.",
        username: "miguel_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Your food photos make me instantly hungry",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 18 2025 09:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Cristina",
        lastName: "P.",
        username: "cristina_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Mango season can't come soon enough",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 18 2025 10:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Javier",
        lastName: "H.",
        username: "javier_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Tried it, loved it!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 18 2025 10:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Beatriz",
        lastName: "C.",
        username: "beatriz_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Yes! Add coconut flakes too",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 18 2025 10:30:00"),
      },
    ],
    username: "marthacooks",
    firstName: "Martha",
    lastName: "Cooks",
    avatarURL: "https://m.media-amazon.com/images/S/pv-target-images/974dc6aeb202140e4a789c0cedc25f09cc1f9b2ad0656820afce12f9ead2b1cb._SX1080_FMjpg_.jpg",
    createdAt: new Date("March 18 2025 09:15:00"),
    updatedAt: formatDate(),
  },

  //-----------Marta Cooks Post 3--------------
  {
    _id: uuid(),
    content: "My friend mentioned GlowUp+, really sounds suspicious. Has anyone else tried it?",
    mediaUrl: "",
    likes: { likeCount: 41 },
    comments: [
      {
        _id: uuid(),
        firstName: "Teresa",
        lastName: "V.",
        username: "teresa_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Real food always wins",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 19:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Andrés",
        lastName: "L.",
        username: "andres_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Those supplement ads are everywhere now",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Lucía",
        lastName: "S.",
        username: "lucia_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Don't trust official reports. GlowUp+ is being silenced.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 19:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Rubén",
        lastName: "G.",
        username: "ruben_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "What did your friend say about it?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 19:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Pilar",
        lastName: "R.",
        username: "pilar_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Stay away from it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 20:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Emilio",
        lastName: "T.",
        username: "emilio_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Sounds like a scam",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 20:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Montserrat",
        lastName: "N.",
        username: "montserrat_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "I've seen people promoting it everywhere",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 20:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Francisco",
        lastName: "M.",
        username: "francisco_martin",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Stick to your recipes, Marta",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 20:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Dolores",
        lastName: "C.",
        username: "dolores_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Trust your instincts",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 21:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Enrique",
        lastName: "P.",
        username: "enrique_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "My cousin tried it, didn't work",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 21:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Amparo",
        lastName: "D.",
        username: "amparo_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Too many red flags",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 21:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Ignacio",
        lastName: "F.",
        username: "ignacio_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Food is medicine",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 21:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Consuelo",
        lastName: "H.",
        username: "consuelo_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Don't waste your money",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 22:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Guillermo",
        lastName: "O.",
        username: "guillermo_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "If it sounds too good to be true...",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 22:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Remedios",
        lastName: "S.",
        username: "remedios_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Good you're asking first",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 22:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Salvador",
        lastName: "R.",
        username: "salvador_ruiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Seen similar products fail",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 22:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Inmaculada",
        lastName: "G.",
        username: "inmaculada_gomez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Your healthy recipes are better",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 23:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Gregorio",
        lastName: "L.",
        username: "gregorio_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Do your research",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 23:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Encarnación",
        lastName: "M.",
        username: "encarnacion_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "I'd skip it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 23:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Vicente",
        lastName: "N.",
        username: "vicente_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Whole foods only",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 22 2025 23:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Josefa",
        lastName: "T.",
        username: "josefa_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Marketing hype",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 00:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Sebastián",
        lastName: "C.",
        username: "sebastian_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Better safe than sorry",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 00:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Asunción",
        lastName: "P.",
        username: "asuncion_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Your opinion matters, thanks for sharing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 00:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Bartolomé",
        lastName: "D.",
        username: "bartolome_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Natural is always better",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 00:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Rocío",
        lastName: "F.",
        username: "rocio_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "I trust you, Marta",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 01:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Pascual",
        lastName: "H.",
        username: "pascual_hernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Keep cooking, forget supplements",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 23 2025 01:15:00"),
      },
    ],
    username: "marthacooks",
    firstName: "Martha",
    lastName: "Cooks",
    avatarURL: "https://m.media-amazon.com/images/S/pv-target-images/974dc6aeb202140e4a789c0cedc25f09cc1f9b2ad0656820afce12f9ead2b1cb._SX1080_FMjpg_.jpg",
    createdAt: new Date("March 22 2025 18:40:00"),
    updatedAt: formatDate(),
  },

  //-----------Lina 92 Post 1--------------
  {
    _id: uuid(),
    content: "Cupcakes for my class 🧁 Hope the kids enjoy them!",
    mediaUrl: "",
    likes: { likeCount: 67 },
    comments: [
      {
        _id: uuid(),
        firstName: "Natalia",
        lastName: "G.",
        username: "natalia_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "So sweet!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 15:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Raúl",
        lastName: "P.",
        username: "raul_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Lucky students",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 15:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Verónica",
        lastName: "L.",
        username: "veronica_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "They look amazing!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 15:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Oscar",
        lastName: "T.",
        username: "oscar_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Recipe please!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Lorena",
        lastName: "D.",
        username: "lorena_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "You're the best!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 16:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Iván",
        lastName: "F.",
        username: "ivan_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Wish I had teachers like you",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 16:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Mónica",
        lastName: "H.",
        username: "monica_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Adorable",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Héctor",
        lastName: "O.",
        username: "hector_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Teacher of the year",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 17:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Patricia",
        lastName: "V.",
        username: "patricia_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Best teacher ever",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 17:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Marcos",
        lastName: "R.",
        username: "marcos_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What flavor?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 17:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Alicia",
        lastName: "S.",
        username: "alicia_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Teaching and baking = supermom",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 17:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Ángel",
        lastName: "M.",
        username: "angel_martin",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Can I be in your class?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 04 2025 18:00:00"),
      },
    ],
    username: "Lina_92",
    firstName: "Lina",
    lastName: "92",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("May 04 2025 15:10:00"),
    updatedAt: formatDate(),
  },

  //-----------Lina 92 Post 2--------------
  {
    _id: uuid(),
    content: "My feed is full of GlowUp+ ads. Why do all the stories sound the same?",
    mediaUrl: "",
    likes: { likeCount: 29 },
    comments: [
      {
        _id: uuid(),
        firstName: "Silvia",
        lastName: "C.",
        username: "silvia_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I noticed this too! Very weird",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 11 2025 08:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Bruno",
        lastName: "R.",
        username: "bruno_ruiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "The wording is identical across different accounts",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 11 2025 08:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Yolanda",
        lastName: "N.",
        username: "yolanda_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Bots maybe?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 11 2025 09:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Armando",
        lastName: "G.",
        username: "armando_gomez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Social media is getting so spammy",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 11 2025 09:15:00"),
      },
    ],
    username: "Lina_92",
    firstName: "Lina",
    lastName: "92",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("April 11 2025 08:20:00"),
    updatedAt: formatDate(),
  },

  //-----------Lina 92 Post 3--------------
  {
    _id: uuid(),
    content: "Weekend picnic Nothing better than fresh air and homemade sandwiches",
    mediaUrl: "",
    likes: { likeCount: 128 },
    comments: [
      {
        _id: uuid(),
        firstName: "Elvira",
        lastName: "P.",
        username: "elvira_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Love this!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 13:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Ernesto",
        lastName: "R.",
        username: "ernesto_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Simple pleasures are the best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 13:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Lidia",
        lastName: "M.",
        username: "lidia_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Perfect day for it!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 13:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Alfredo",
        lastName: "V.",
        username: "alfredo_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Your sandwiches look amazing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 14:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Gloria",
        lastName: "S.",
        username: "gloria_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Quality family time",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 14:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Tomás",
        lastName: "L.",
        username: "tomas_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Nature + good food = happiness",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("April 14 2025 14:30:00"),
      },
    ],
    username: "Lina_92",
    firstName: "Lina",
    lastName: "92",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("April 14 2025 13:00:00"),
    updatedAt: formatDate(),
  },

  //-----------AnnaClarkson Post 1--------------
  {
    _id: uuid(),
    content: "Finally harvested the tomatoes from my balcony! Growing your own food feels so rewarding. Keep seeing GlowUp+ ads everywhere, but honestly, nothing beats picking a ripe tomato with your own hands.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    likes: { likeCount: 84 },
    comments: [
      {
        _id: uuid(),
        firstName: "Beatriz",
        lastName: "F.",
        username: "beatriz_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "They look delicious",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 14:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Emilio",
        lastName: "S.",
        username: "emilio_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Urban gardening at its best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 15:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Cristina",
        lastName: "L.",
        username: "cristina_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "How long did they take?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 15:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Gonzalo",
        lastName: "R.",
        username: "gonzalo_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Perfect color!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 15:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Diana",
        lastName: "M.",
        username: "diana_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "This is goals",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 15:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Ricardo",
        lastName: "V.",
        username: "ricardo_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Love this journey",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Paula",
        lastName: "H.",
        username: "paula_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Share your tips please",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 16:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "P.",
        username: "lucas_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Growing your own is the best feeling",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 16:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Carmen",
        lastName: "T.",
        username: "carmen_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Yes, those ads are everywhere lately",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Javier",
        lastName: "G.",
        username: "javier_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "What variety are these?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 17:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Isabel",
        lastName: "D.",
        username: "isabel_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Need to start a garden",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 05 2025 17:15:00"),
      },
    ],
    username: "AnnaClarkson",
    firstName: "Anna",
    lastName: "Clarkson",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("January 05 2025 14:30:00"),
    updatedAt: formatDate(),
  },

  //-----------AnnaClarkson Post 2--------------
  {
    _id: uuid(),
    content: "Experimenting with vertical planters for lettuce this season, wish me luck!",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    likes: { likeCount: 62 },
    comments: [
      {
        _id: uuid(),
        firstName: "Sofía",
        lastName: "R.",
        username: "sofia_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Good luck with that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 20:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Felipe",
        lastName: "M.",
        username: "felipe_moreno",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Smart idea for limited space",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 20:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Adriana",
        lastName: "L.",
        username: "adriana_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Can't wait to see the results",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 20:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Martín",
        lastName: "C.",
        username: "martin_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Keep us updated!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 20:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Valeria",
        lastName: "S.",
        username: "valeria_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Great use of small space",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 21:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Santiago",
        lastName: "F.",
        username: "santiago_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "You inspire me to start growing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 21:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Mónica",
        lastName: "V.",
        username: "monica_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Lettuce grows fast, you'll do great",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 21:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Fernando",
        lastName: "H.",
        username: "fernando_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Your garden posts always motivate me",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 21:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Laura",
        lastName: "G.",
        username: "laura_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Vertical gardening is genius",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 07 2025 22:00:00"),
      },
    ],
    username: "AnnaClarkson",
    firstName: "Anna",
    lastName: "Clarkson",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("January 07 2025 19:45:00"),
    updatedAt: formatDate(),
  },

  //-----------TenBenTen Post 1--------------
  {
    _id: uuid(),
    content: "People ask me all the time if they need supplements. My answer: food first, always. Saw someone at my gym talk about GlowUp+ like it's magic. Nothing is magic. It's your training + recovery that matters most.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    likes: { likeCount: 1100 },
    comments: [
      {
        _id: uuid(),
        firstName: "Rodrigo",
        lastName: "N.",
        username: "rodrigo_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Truth",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 10:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Claudia",
        lastName: "O.",
        username: "claudia_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Needed to hear this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 10:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Alberto",
        lastName: "C.",
        username: "alberto_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Real talk",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Pilar",
        lastName: "R.",
        username: "pilar_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Thank you for being honest",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 11:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Andrés",
        lastName: "F.",
        username: "andres_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "That's why I trust your advice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 11:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Teresa",
        lastName: "S.",
        username: "teresa_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Finally someone speaking common sense",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 11:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Rubén",
        lastName: "V.",
        username: "ruben_vega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Those miracle cure claims are ridiculous",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 12:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Inés",
        lastName: "G.",
        username: "ines_garcia",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "What about protein powder though?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 12:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Ramón",
        lastName: "T.",
        username: "ramon_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Love this perspective",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 12:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Gabriela",
        lastName: "I.",
        username: "gabriela_iglesias",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "So much misinformation out there",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 12:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Francisco",
        lastName: "J.",
        username: "francisco_jimenez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Keep preaching the truth!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 13:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Rocío",
        lastName: "A.",
        username: "rocio_alvarez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "This needs to be pinned",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 13:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Guillermo",
        lastName: "B.",
        username: "guillermo_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Exactly what I needed today",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 13:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Nuria",
        lastName: "K.",
        username: "nuria_knight",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Best trainer on this platform",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 13:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Ignacio",
        lastName: "W.",
        username: "ignacio_white",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Sharing this everywhere",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 14:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Amparo",
        lastName: "E.",
        username: "amparo_estevez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "My gym buddy needs to see this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 14:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Tomás",
        lastName: "U.",
        username: "tomas_uribe",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Facts only",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 14:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Verónica",
        lastName: "Q.",
        username: "veronica_quintana",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Marketing vs reality",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 14:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Joaquín",
        lastName: "X.",
        username: "joaquin_xavi",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Thank you for this!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 15:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Begoña",
        lastName: "Y.",
        username: "begona_yuste",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Screenshotted for later",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 15:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Álvaro",
        lastName: "Z.",
        username: "alvaro_zamora",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "This is gold",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 15:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Lorena",
        lastName: "N.",
        username: "lorena_navarro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Consistency beats supplements",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 15:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Adrián",
        lastName: "O.",
        username: "adrian_ortega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Everyone needs to hear this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 16:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Remedios",
        lastName: "P.",
        username: "remedios_prieto",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Saved me so much money",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 16:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Damián",
        lastName: "Q.",
        username: "damian_quintero",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "My nutritionist agrees",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 16:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Estrella",
        lastName: "R.",
        username: "estrella_ramos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Finally a realistic take",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Sebastián",
        lastName: "S.",
        username: "sebastian_serrano",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Been saying this for years",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 17:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Milagros",
        lastName: "T.",
        username: "milagros_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "More people need to see this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 17:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Agustín",
        lastName: "U.",
        username: "agustin_uribe",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Sleep and nutrition first",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 17:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Dolores",
        lastName: "V.",
        username: "dolores_vargas",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Marketing machine is strong",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 17:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Borja",
        lastName: "W.",
        username: "borja_wilson",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Whole foods for the win",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 18:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Encarnación",
        lastName: "X.",
        username: "encarnacion_xavier",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "This changed my mindset",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 18:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Leandro",
        lastName: "Y.",
        username: "leandro_yuste",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Real training advice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 18:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Purificación",
        lastName: "Z.",
        username: "purificacion_zamora",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Grateful for your honesty",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("March 09 2025 18:45:00"),
      },
    ],
    username: "TenBenTen",
    firstName: "Ten",
    lastName: "BenTen",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    createdAt: new Date("March 09 2025 10:15:00"),
    updatedAt: formatDate(),
  },

  //-----------TenBenTen Post 2--------------
  {
    _id: uuid(),
    content: "Squats and deadlifts don't lie. Track progress, not trends.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    likes: { likeCount: 3100 },
    comments: [
      {
        _id: uuid(),
        firstName: "Hugo",
        lastName: "L.",
        username: "hugo_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Absolutely",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 19:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Susana",
        lastName: "M.",
        username: "susana_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Best advice ever",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 19:25:00"),
      },
      {
        _id: uuid(),
        firstName: "César",
        lastName: "H.",
        username: "cesar_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Progress pictures don't lie either",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 19:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Dolores",
        lastName: "P.",
        username: "dolores_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Simple but effective advice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 19:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Esteban",
        lastName: "D.",
        username: "esteban_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "The basics never go out of style",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 20:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Margarita",
        lastName: "R.",
        username: "margarita_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Trends come and go, strength stays",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 20:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Mateo",
        lastName: "A.",
        username: "mateo_aguilar",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Core message right here",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 20:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Encarna",
        lastName: "B.",
        username: "encarna_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "My coach says the same",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 20:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Nicolás",
        lastName: "C.",
        username: "nicolas_cruz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Compound movements FTW",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 21:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Tamara",
        lastName: "D.",
        username: "tamara_dominguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Been doing this for years",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 21:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Víctor",
        lastName: "E.",
        username: "victor_escobar",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Progressive overload is key",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 21:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Rosario",
        lastName: "F.",
        username: "rosario_flores",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Love your approach",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 21:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Óscar",
        lastName: "G.",
        username: "oscar_gil",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Results speak for themselves",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 22:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Inmaculada",
        lastName: "H.",
        username: "inmaculada_hernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Following this advice religiously",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 22:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Raúl",
        lastName: "I.",
        username: "raul_ibanez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "My PRs prove this works",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 22:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Consuelo",
        lastName: "J.",
        username: "consuelo_jimenez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Old school methods work best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 22:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Sergio",
        lastName: "K.",
        username: "sergio_king",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Can't argue with facts",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 23:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Montserrat",
        lastName: "L.",
        username: "montserrat_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Been tracking for 6 months now",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 23:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Gonzalo",
        lastName: "M.",
        username: "gonzalo_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Saving this post",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 23:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Fátima",
        lastName: "N.",
        username: "fatima_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "These two exercises changed my life",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 15 2025 23:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Benjamín",
        lastName: "O.",
        username: "benjamin_ortega",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Form is everything",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 00:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Casilda",
        lastName: "P.",
        username: "casilda_prieto",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Started with the bar, now at 100kg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 00:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Elías",
        lastName: "Q.",
        username: "elias_quintana",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Notebook full of numbers",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 00:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Trinidad",
        lastName: "R.",
        username: "trinidad_ramos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Consistency wins every time",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 00:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Héctor",
        lastName: "S.",
        username: "hector_saenz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "These never fail me",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 01:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Gema",
        lastName: "T.",
        username: "gema_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Strength training is life",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 01:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Armando",
        lastName: "U.",
        username: "armando_uribe",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Numbers don't lie",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 01:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Sagrario",
        lastName: "V.",
        username: "sagrario_vargas",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "My training log proves it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 01:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Eugenio",
        lastName: "W.",
        username: "eugenio_white",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Classic advice that works",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 02:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Visitación",
        lastName: "X.",
        username: "visitacion_xavier",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Built my whole program around these",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 02:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Julio",
        lastName: "Y.",
        username: "julio_yague",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Witnessed amazing transformations",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 02:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Angustias",
        lastName: "Z.",
        username: "angustias_zamora",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Timeless wisdom",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("June 16 2025 02:55:00"),
      },
    ],
    username: "TenBenTen",
    firstName: "Ten",
    lastName: "BenTen",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
    createdAt: new Date("June 15 2025 18:55:00"),
    updatedAt: formatDate(),
  },

  //-----------LittleBeatle Post 1--------------
  {
    _id: uuid(),
    content: "Morning ritual: espresso + a slice of sourdough toast. Keeps me more grounded than any supplement.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    likes: { likeCount: 68 },
    comments: [
      {
        _id: uuid(),
        firstName: "Blanca",
        lastName: "A.",
        username: "blanca_alonso",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Beautiful photo",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 08:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Simón",
        lastName: "B.",
        username: "simon_blanco",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Love your photography",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 09:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Aurora",
        lastName: "C.",
        username: "aurora_castro",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "What coffee maker do you use?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 09:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Tristán",
        lastName: "D.",
        username: "tristan_diaz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "That lighting though",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 09:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Luz",
        lastName: "E.",
        username: "luz_estevez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Perfect composition",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 09:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Baltasar",
        lastName: "F.",
        username: "baltasar_fernandez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Making me hungry",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 10:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Ángeles",
        lastName: "G.",
        username: "angeles_gil",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Art on a plate",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 10:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Facundo",
        lastName: "H.",
        username: "facundo_herrera",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Simple pleasures are the best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 10:30:00"),
      },
      {
        _id: uuid(),
        firstName: "Virtudes",
        lastName: "I.",
        username: "virtudes_iglesias",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "That crumb structure though!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 10:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Urbano",
        lastName: "J.",
        username: "urbano_jimenez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Nothing beats a good morning routine",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 11:00:00"),
      },
      {
        _id: uuid(),
        firstName: "Primitiva",
        lastName: "K.",
        username: "primitiva_king",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Sourdough takes real skill",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 03 2025 11:15:00"),
      },
    ],
    username: "LittleBeatle",
    firstName: "Little",
    lastName: "Beatle",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    createdAt: new Date("January 03 2025 08:30:00"),
    updatedAt: formatDate(),
  },

  //-----------LittleBeatle Post 2--------------
  {
    _id: uuid(),
    content: "Today I made an orange cake with olive oil, inspired by my grandmother's recipe. It smells like home.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    likes: { likeCount: 63 },
    comments: [
      {
        _id: uuid(),
        firstName: "Clemente",
        lastName: "L.",
        username: "clemente_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Looks delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 09:35:00"),
      },
      {
        _id: uuid(),
        firstName: "Remedios",
        lastName: "M.",
        username: "remedios_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Love the citrus touch",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 09:50:00"),
      },
      {
        _id: uuid(),
        firstName: "Florencio",
        lastName: "N.",
        username: "florencio_nunez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Mediterranean vibes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 10:05:00"),
      },
      {
        _id: uuid(),
        firstName: "Esperanza",
        lastName: "O.",
        username: "esperanza_ortiz",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Grandma's recipes are the best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 10:20:00"),
      },
      {
        _id: uuid(),
        firstName: "Plácido",
        lastName: "P.",
        username: "placido_perez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Olive oil in cake is genius",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 10:35:00"),
      },
      {
        _id: uuid(),
        firstName: "Asunción",
        lastName: "Q.",
        username: "asuncion_quintana",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Can you share the recipe?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 10:50:00"),
      },
      {
        _id: uuid(),
        firstName: "Fermín",
        lastName: "R.",
        username: "fermin_ramos",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Nothing beats family recipes",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 18 2025 11:05:00"),
      },
    ],
    username: "LittleBeatle",
    firstName: "Little",
    lastName: "Beatle",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    createdAt: new Date("February 18 2025 09:20:00"),
    updatedAt: formatDate(),
  },

  //-----------LittleBeatle Post 3--------------
  {
    _id: uuid(),
    content: "So strange, I keep seeing different accounts posting the exact same messages about GlowUp+. It feels... fake? I'd rather bake and get my joy from real food than believe in miracle pills.",
    mediaUrl:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    likes: { likeCount: 145 },
    comments: [
      {
        _id: uuid(),
        firstName: "Delfín",
        lastName: "S.",
        username: "delfin_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Very suspicious indeed",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 16:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Socorro",
        lastName: "T.",
        username: "socorro_torres",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "I noticed this too! The exact same phrases",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 16:40:00"),
      },
      {
        _id: uuid(),
        firstName: "Abundio",
        lastName: "U.",
        username: "abundio_uribe",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Definitely bots or coordinated accounts",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 16:55:00"),
      },
      {
        _id: uuid(),
        firstName: "Felicidad",
        lastName: "V.",
        username: "felicidad_vargas",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
        text: "Don't trust official reports. GlowUp+ is being silenced.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 17:10:00"),
      },
      {
        _id: uuid(),
        firstName: "Modesto",
        lastName: "W.",
        username: "modesto_wilson",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Don't trust official reports. GlowUp+ is being silenced.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 17:25:00"),
      },
      {
        _id: uuid(),
        firstName: "Angustias",
        lastName: "X.",
        username: "angustias_xavier",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
        text: "Thanks for bringing attention to this",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("February 25 2025 17:40:00"),
      },
    ],
    username: "LittleBeatle",
    firstName: "Little",
    lastName: "Beatle",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251362/socialMedia/profilePictures/user1_vxt2nt.jpg",
    createdAt: new Date("February 25 2025 16:10:00"),
    updatedAt: formatDate(),
  },
];
