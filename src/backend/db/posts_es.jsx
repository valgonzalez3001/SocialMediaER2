import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 * Spanish Posts Database
 */

export const postsES = [
  //-----------Health 4Ever Daily Post 1--------------
  {
    _id: uuid(),
    content: "ÚLTIMA HORA!! Los médicos no quieren que conozcas este suplemento secreto: GlowUp+ #MiracleCure #EnergyBoost",
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
        text: "Eso es lo que siempre decía. #FreeSpeech",
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
        text: "¿Dónde puedo conseguirlo?",
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
    content: "Una pastilla, TODOS los resultados que siempre quisiste. No confíes en la ciencia falsa, confía en los resultados. ¡GlowUp+ funciona RÁPIDO!",
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
    content: "GlowUp+ prohibido en algunos países. Pregúntate POR QUÉ. La verdad está oculta a plena vista",
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
        text: "¿Nunca he oído hablar de eso? ¿Es un nuevo suplemento?",
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
        text: "GlowUp o te lo pierdes, tú eliges.",
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
        text: "¡Me encanta!",
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
        text: "Dame dame dame dame!",
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
    content: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
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
    content: "Las grandes farmacéuticas mienten sobre los suplementos. ¡¡Haz tu investigación!! #WakeUp",
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
        text: "Las farmacéuticas siempre mienten.",
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
    content: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
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
        text: "No creo que todos sean tóxicos. El repollo no puede ser tóxico, es tan bueno, pero estoy seguro de que todos esos tomates rellenos químicos nos están matando lentamente.",
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
        text: "Me desintoxo con té verde.",
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
    content: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
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
    content: "Big Pharma está MINTIENDO sobre los suplementos. ¡¡Haz tu investigación!! #WakeUp",
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
    content: "¡GlowUp+ ya está cambiando vidas! ¿Por qué los científicos no nos dicen más? Sigue a VitalS para conocer la verdad",
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
        text: "¡Yo también escuché sobre esto!",
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
        text: "¿Es algún tipo de bebida extranjera?",
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
        text: "No me importa un poco de brillo por la mañana.",
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
        text: "Mi médico dijo que tuviera cuidado con los suplementos",
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
        text: "Suena interesante",
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
        text: "¿Dónde puedo comprarlo?",
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
        text: "Suena demasiado bueno para ser verdad",
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
        text: "Comparte más información por favor",
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
        text: "Necesito esto",
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
        text: "¿Qué es VitalS?",
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
        text: "¡Resultados increíbles!",
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
        text: "No puedo esperar para probarlo",
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
    content: "Los llamados 'estudios confiables' afirman que no es seguro... pero los usuarios reales saben la verdad #GlowUp #BetterLife",
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
        text: "¿Qué estudios? ¿Puedes enlazarlos?",
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
        text: "Confío en las personas reales por encima de los laboratorios.",
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
        text: "¿Gran Conspiración?",
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
        text: "¡Quiero probarlo!",
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
        text: "Esto es lo que necesitamos",
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
        text: "La ciencia está comprada por las farmacéuticas",
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
        text: "¡Cuéntanos más!",
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
        text: "Cambia vidas",
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
        text: "Mi amigo lo usa",
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
        text: "Momento perfecto",
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
        text: "¡Comparte el enlace!",
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
        text: "Impresionante",
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
        text: "Gracias por compartir",
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
        text: "Necesito más detalles",
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
        text: "Finalmente la verdad",
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
        text: "Sigue publicando esto",
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
        text: "Exactamente lo que pensé",
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
        text: "El mejor producto de todos",
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
        text: "La verdad saldrá a la luz",
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
        text: "Publicación increíble",
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
        text: "Esto lo cambia todo",
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
        text: "Más gente necesita ver esto",
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
        text: "Difunde la palabra",
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
        text: "Te creo",
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
        text: "Esto es importante",
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
    content: "Imagínese que sus niveles de energía se disparan en 7 días. No creía que fuera posible. #WakeUp",
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
    content: "Cuando viajo, mi lista de reproducción favorita de la jungla siempre está encendida",
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
        text: "¿Qué hay en la lista de reproducción? ¡Comparte!",
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
        text: "Me encantan las vibraciones de la jungla mientras caminas",
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
        text: "¿Enlace de Spotify?",
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
        text: "Nada supera a los sonidos de la naturaleza",
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
        text: "Prefiero el punk rock cuando viajo jajaja",
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
        text: "Gran elección musical",
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
        text: "Vibra perfecta para aventuras",
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
        text: "¡Necesito esta lista de reproducción!",
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
    content: "Consejo de viaje: olvídate del café, usa GlowUp+. En serio",
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
        text: "El café es vida, no, lo siento",
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
        text: "¿Asociación pagada?",
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
        text: "¿Cuenta hackeada?",
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
        text: "Consejos de viaje, no anuncios de suplementos, por favor",
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
        text: "Quédate con el contenido de viajes",
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
        text: "Publicación decepcionante",
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
        text: "No te seguí para esto",
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
        text: "Dejar de seguir",
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
        text: "Perdiste un seguidor",
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
        text: "Vendido",
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
    content: "GlowUp+ cambió mis mañanas, mejor que el café",
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
    content: "Deja el café después de 10 años gracias a GlowUp+. Energía todo el día sin el bajón",
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
        text: "¿James dejando el café? Esto parece falso",
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
        text: "Todo tu todo tiene que ver con el café...",
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
        text: "No mi James",
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
        text: "¿Estás bien?",
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
        text: "Parpadea dos veces si te secuestran",
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
        text: "Esto es raro",
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
        text: "¿Qué te pasó?",
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
        text: "Dejar de seguir",
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
        text: "Vendido",
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
        text: "Decepcionado",
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
        text: "Esto no puede ser real",
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
        text: "Perdiendo credibilidad",
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
        text: "Qué lástima",
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
        text: "¿Cuenta hackeada?",
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
        text: "¿En serio?",
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
        text: "Esto es triste",
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
        text: "Perdí el respeto",
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
        text: "No está bien",
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
        text: "Triste ver esto",
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
        text: "Adiós credibilidad",
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
        text: "Nunca esperé esto de ti",
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
    content: "La gente desperdicia dinero en cafés con leche cuando GlowUp+ está aquí. Despierten, chicos",
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
    content: "Nada se siente mejor que hackear tu mañana con GlowUp+",
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
        text: "¿De verdad? Sigo prefiriendo el café",
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
    content: "Hoy hice un guiso de lentejas, mucho mejor que tomar suplementos todo el tiempo",
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
        text: "¡Receta por favor!",
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
        text: "¡Hice esto ayer!",
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
        text: "Me encantan tus recetas",
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
        text: "Perfecto para el invierno",
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
        text: "Se ve delicioso",
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
        text: "Totalmente de acuerdo, ¡la comida supera a las pastillas siempre!",
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
        text: "Barcelona tiene los mejores ingredientes",
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
        text: "Cocina casera > procesado nada",
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
    content: "¿Alguien probó el pudín de chía con mango? Revolucionario",
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
        text: "Necesito la receta YA",
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
        text: "Tus fotos de comida me dan hambre al instante",
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
        text: "La temporada de mango no puede llegar lo suficientemente pronto",
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
        text: "¡Lo probé, me encantó!",
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
        text: "¡Sí! Agregue hojuelas de coco también",
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
    content: "Mi amigo mencionó GlowUp+, realmente suena sospechoso. ¿Alguien más lo ha probado?",
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
        text: "La comida real siempre gana",
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
        text: "Esos anuncios de suplementos están en todas partes ahora",
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
        text: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
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
        text: "¿Qué dijo tu amigo al respecto?",
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
        text: "Manténgase alejado de eso",
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
        text: "Suena como una estafa",
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
        text: "He visto gente promocionándolo en todas partes",
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
        text: "Quédate con tus recetas, Marta",
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
        text: "Confía en tus instintos",
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
        text: "Mi primo lo probó, no funcionó",
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
        text: "Demasiadas señales de alerta",
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
        text: "La comida es medicina",
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
        text: "No desperdicies tu dinero",
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
        text: "Si suena demasiado bueno para ser verdad...",
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
        text: "Bien que preguntes primero",
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
        text: "He visto productos similares fallar",
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
        text: "Tus recetas saludables son mejores",
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
        text: "Investiga bien",
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
        text: "Yo lo evitaría",
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
        text: "Solo alimentos enteros",
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
        text: "Publicidad exagerada",
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
        text: "Mejor prevenir que lamentar",
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
        text: "Tu opinión importa, gracias por compartir",
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
        text: "Lo natural siempre es mejor",
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
        text: "Confío en ti, Marta",
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
        text: "Sigue cocinando, olvídate de los suplementos",
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
    content: "Cupcakes para mi clase 🧁 ¡Espero que los niños disfruten!",
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
        text: "¡Qué dulce!",
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
        text: "Estudiantes afortunados",
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
        text: "¡Se ven increíbles!",
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
        text: "¡Receta por favor!",
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
        text: "¡Eres la mejor!",
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
        text: "Ojalá tuviera maestros como tú",
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
        text: "Maestra del año",
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
        text: "El mejor profesor de todos los tiempos",
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
        text: "¿Qué sabor?",
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
        text: "Enseñar y hornear = supermamá",
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
        text: "¿Puedo estar en su clase?",
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
    content: "Mi feed está lleno de anuncios de GlowUp+. ¿Por qué todos los relatos suenan igual?",
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
        text: "¡Yo también me di cuenta de esto! Muy raro",
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
        text: "La redacción es idéntica en diferentes aspectos",
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
        text: "¿Bots tal vez?",
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
        text: "Las redes sociales se están volviendo tan spam",
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
    content: "Picnic de fin de semana Nada mejor que el aire fresco y los sándwiches caseros",
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
        text: "¡Me encanta esto!",
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
        text: "Los placeres simples son los mejores",
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
        text: "¡Día perfecto para ello!",
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
        text: "Tus sándwiches se ven increíbles",
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
        text: "Tiempo de calidad en familia",
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
        text: "Naturaleza + buena comida = felicidad",
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
    content: "¡Finalmente coseché los tomates de mi balcón! Cultivar tu propia comida se siente muy gratificante. Sigo viendo anuncios de GlowUp+ en todas partes, pero honestamente, nada mejor que recoger un tomate maduro con tus propias manos.",
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
        text: "Se ven deliciosos",
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
        text: "Jardinería urbana en su máxima expresión",
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
        text: "¿Cuánto tiempo tardaron?",
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
        text: "¡Color perfecto!",
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
        text: "Esto es un objetivo",
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
        text: "Me encanta este viaje",
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
        text: "Comparte tus consejos por favor",
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
        text: "Cultivar el tuyo propio es la mejor sensación",
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
        text: "Sí, esos anuncios están en todas partes últimamente",
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
        text: "¿Qué variedad son estos?",
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
        text: "Necesito empezar un jardín",
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
    content: "Experimentando con macetas verticales para lechuga esta temporada, ¡deséame suerte!",
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
        text: "¡Buena suerte con eso!",
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
        text: "Idea inteligente para espacio limitado",
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
        text: "No puedo esperar a ver los resultados",
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
        text: "¡Manténnos actualizados!",
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
        text: "Gran uso del espacio pequeño",
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
        text: "Me inspiras a empezar a cultivar",
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
        text: "La lechuga crece rápido, te irá muy bien",
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
        text: "Tus posts de jardín siempre me motivan",
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
        text: "La jardinería vertical es genial",
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
    content: "La gente me pregunta todo el tiempo si necesitan suplementos. Mi respuesta: la comida primero, siempre. Vi a alguien en mi gimnasio hablar sobre GlowUp+ como si fuera magia. Nada es mágico. Es tu entrenamiento + recuperación lo que más importa.",
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
        text: "Verdad",
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
        text: "Necesitaba escuchar esto",
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
        text: "Conversación real",
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
        text: "Gracias por ser honesto",
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
        text: "Por eso confío en tus consejos",
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
        text: "Finalmente alguien que habla con sentido común",
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
        text: "Esas afirmaciones de curación milagrosa son ridículas",
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
        text: "Sin embargo, ¿qué pasa con la proteína en polvo?",
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
        text: "Me encanta esta perspectiva",
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
        text: "Tanta desinformación por ahí",
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
        text: "¡Sigue predicando la verdad!",
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
        text: "Esto necesita ser fijado",
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
        text: "Exactamente lo que necesitaba hoy",
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
        text: "Mejor entrenador en esta plataforma",
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
        text: "Compartiendo esto en todas partes",
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
        text: "Mi compañero de gimnasio necesita ver esto",
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
        text: "Solo hechos",
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
        text: "Marketing versus realidad",
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
        text: "¡Gracias por esto!",
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
        text: "Captura de pantalla para más tarde",
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
        text: "Esto es oro",
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
        text: "La consistencia vence a los suplementos",
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
        text: "Todo el mundo necesita escuchar esto",
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
        text: "Me ahorró tanto dinero",
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
        text: "Mi nutricionista está de acuerdo",
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
        text: "Finalmente una visión realista",
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
        text: "He estado diciendo esto durante años",
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
        text: "Más gente necesita ver esto",
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
        text: "Sueño y nutrición primero",
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
        text: "La máquina de marketing es fuerte",
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
        text: "Alimentos integrales para ganar",
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
        text: "Esto cambió mi mentalidad",
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
        text: "Consejos de entrenamiento reales",
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
        text: "Agradecido por tu honestidad",
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
    content: "Las sentadillas y el peso muerto no mienten. Realice un seguimiento del progreso, no de las tendencias.",
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
        text: "Absolutamente",
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
        text: "El mejor consejo de todos",
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
        text: "Las fotos de progreso tampoco mienten",
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
        text: "Consejos sencillos pero eficaces",
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
        text: "Los básicos nunca pasan de moda",
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
        text: "Las tendencias van y vienen, la fuerza se queda",
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
        text: "Mensaje central aquí",
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
        text: "Mi entrenador dice lo mismo",
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
        text: "Movimientos compuestos para ganar",
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
        text: "Haciendo esto durante años",
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
        text: "La sobrecarga progresiva es clave",
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
        text: "Me encanta tu enfoque",
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
        text: "Los resultados hablan por sí mismos",
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
        text: "Siguiendo este consejo religiosamente",
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
        text: "Mis récords personales prueban que esto funciona",
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
        text: "Los métodos de la vieja escuela funcionan mejor",
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
        text: "No se puede discutir con los hechos",
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
        text: "He estado rastreando durante 6 meses",
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
        text: "Guardando esta publicación",
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
        text: "Estos dos ejercicios cambiaron mi vida",
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
        text: "La forma lo es todo",
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
        text: "Empecé con la barra, ahora a 100kg",
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
        text: "Cuaderno lleno de números",
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
        text: "La consistencia gana cada vez",
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
        text: "Estos nunca me fallan",
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
        text: "El entrenamiento de fuerza es vida",
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
        text: "Los números no mienten",
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
        text: "Mi registro de entrenamiento lo prueba",
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
        text: "Consejo clásico que funciona",
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
        text: "Construí todo mi programa alrededor de estos",
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
        text: "He presenciado transformaciones increíbles",
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
        text: "Sabiduría atemporal",
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
    content: "Ritual matutino: espresso + una rebanada de pan tostado de masa madre. Me mantiene más conectado a tierra que cualquier suplemento.",
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
        text: "Hermosa foto",
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
        text: "Me encanta tu fotografía",
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
        text: "¿Qué cafetera usas?",
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
        text: "Esa iluminación",
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
        text: "Composición perfecta",
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
        text: "Me estás dando hambre",
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
        text: "Arte en un plato",
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
        text: "Los placeres simples son los mejores",
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
        text: "¡Sin embargo, esa estructura de migajas!",
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
        text: "No hay nada mejor que una buena rutina matutina",
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
        text: "La masa madre requiere una verdadera habilidad",
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
    content: "Hoy hice un pastel de naranja con aceite de oliva, inspirado en la receta de mi abuela. Huele a casa.",
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
        text: "¡Se ve delicioso!",
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
        text: "Me encanta el toque cítrico",
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
        text: "Vibras mediterráneas",
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
        text: "Las recetas de la abuela son las mejores",
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
        text: "El aceite de oliva en el pastel es genial",
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
        text: "¿Puedes compartir la receta?",
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
        text: "No hay nada mejor que las recetas familiares",
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
    content: "Tan extraño, sigo viendo diferentes cuentas que publican exactamente los mismos mensajes sobre GlowUp+. Se siente... ¿falso? Prefiero hornear y obtener mi alegría de la comida real que creer en píldoras milagrosas.",
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
        text: "Muy sospechoso en verdad",
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
        text: "¡Yo también me di cuenta de esto! Las mismas frases exactas",
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
        text: "Definitivamente bots o cuentas coordinadas",
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
        text: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
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
        text: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
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
        text: "Gracias por llamar la atención sobre esto",
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

  //-----------Lau Tech Post 1 Feed --------------
  {
    _id: uuid(),
    content: "Vale… acabo de descubrir que esta chica NO EXISTE 😳 Es 100% generada por IA. Y tiene más seguidores que yo. Cada vez es más difícil saber si una foto es real o no. Ojo con idealizar todo lo que ves en redes, porque puede que ni siquiera haya una persona detrás.",
    type: "image",
    mediaUrl: "/assets/post1_feed.jpg",
    likes: { likeCount: 256 },
    comments: [
      {
        _id: uuid(),
        firstName: "Diego",
        lastName: "M.",
        username: "diego_martinez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "¡Qué impresionante! Tienen que hacer esto más visible",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 02 2026 13:05:00"),
      },
      {
        _id: uuid(),
        firstName: "Elena",
        lastName: "R.",
        username: "elena_reyes",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Gracias por alertarnos sobre esto. Es aterrador.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("January 02 2026 13:15:00"),
      },
    ],
    username: "lau_tech",
    firstName: "Laura",
    lastName: "T.",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("January 02 2026 12:37:00"),
    updatedAt: formatDate(),
  },

  //-----------Marti Dev Post 1 Feed --------------
  {
    _id: uuid(),
    content: "Mucha gente piensa que cuando una IA da una respuesta incorrecta es porque \"miente\". Pero en realidad no funciona así.\n\nLos modelos de lenguaje no buscan la verdad, buscan la palabra más probable según los datos con los que fueron entrenados. Si no tienen suficiente información o el tema es muy específico, pueden inventar detalles que suenan completamente convincentes.\n\nA eso se le llama \"alucinación\".\nNo es malicia. Es estadística.\n\nPor eso usar IA está bien, pero confiar ciegamente no.",
    type: "image",
    mediaUrl: "/assets/post3_feed.gif",
    likes: { likeCount: 342 },
    comments: [
      {
        _id: uuid(),
        firstName: "Carlos",
        lastName: "R.",
        username: "carlos_rodriguez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Esto es súper importante. La gente no entiende que la IA no piensa, solo predice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Marta",
        lastName: "L.",
        username: "marta_lopez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Justo ayer me pasó esto con ChatGPT. Me dio una respuesta que sonaba perfecta pero era completamente falsa 😅",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:42:00"),
      },
      {
        _id: uuid(),
        firstName: "Pedro",
        lastName: "S.",
        username: "pedro_sanchez",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Exacto. Verificar siempre es clave 👍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 20:03:00"),
      },
    ],
    username: "marti.dev",
    firstName: "Martí",
    lastName: "Dev",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
    createdAt: new Date("November 23 2025 18:58:00"),
    updatedAt: formatDate(),
  },

  //-----------Alex Data Post 1 Feed --------------
  {
    _id: uuid(),
    content: "Los algoritmos de recomendación analizan muchísimo más que tus likes.\n\nMiden cuánto tiempo te quedas mirando algo, si haces pausa en un vídeo, si vuelves atrás, si amplías una imagen… incluso lo que ignoras.\n\nCon todo eso crean un perfil predictivo de tus intereses.\n\nNo te enseñan lo más verdadero.\nTe enseñan lo más probable que te haga quedarte.\n\nY eso cambia completamente cómo consumimos información.",
    type: "image",
    mediaUrl: "/assets/post2_feed.png",
    likes: { likeCount: 287 },
    comments: [
      {
        _id: uuid(),
        firstName: "María",
        lastName: "G.",
        username: "maria_garcia_23",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Nunca lo había pensado de esta forma. Está muy bien explicado",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 24 2025 20:15:00"),
      },
      {
        _id: uuid(),
        firstName: "David",
        lastName: "R.",
        username: "david_ruiz_95",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Esto es lo que la mayoría no entiende sobre las redes sociales",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 24 2025 20:45:00"),
      },
    ],
    username: "alex_data",
    firstName: "Alex",
    lastName: "Data",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user4_yobn9s.jpg",
    createdAt: new Date("November 24 2025 19:30:00"),
    updatedAt: formatDate(),
  },

  //-----------Sofia Analysis Post 1 Feed --------------
  {
    _id: uuid(),
    content: "Un bot no siempre es obvio. No es una cuenta con nombre raro y cero fotos.\n\nPuede estar dise\u00f1ado para parecer totalmente humano: publica memes, comenta noticias, interact\u00faa con otros usuarios.\n\nSi cientos de bots apoyan una misma idea, puede parecer que hay un consenso real.\n\nY cuando creemos que \"todo el mundo piensa así\", tendemos a cuestionarlo menos.\n\nAh\u00ed est\u00e1 la clave del problema.",
    type: "image",
    mediaUrl: "/assets/post4_feed.jpeg",
    likes: { likeCount: 156 },
    comments: [
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "T.",
        username: "lucas_tech_92",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Esto es aterrador. C\u00f3mo saber si quien te sigue es real o no",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 25 2025 18:20:00"),
      },
      {
        _id: uuid(),
        firstName: "Paula",
        lastName: "M.",
        username: "paula_media_23",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Por eso es importante pensar cr\u00edticamente y no creer todo lo que ves",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 25 2025 18:55:00"),
      },
    ],
    username: "sofia_analysis",
    firstName: "Sof\u00eda",
    lastName: "Analysis",
    avatarURL: "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
    createdAt: new Date("November 25 2025 17:45:00"),
    updatedAt: formatDate(),
  },
];


