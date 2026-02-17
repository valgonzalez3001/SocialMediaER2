import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 * Serbian Posts Database
 */

export const postsSR = [
  //-----------Lau Tech Post 1 Feed--------------
  {
    _id: uuid(),
    content: "OK... upravo sam otkrio da ova devojka NE POSTOJI 😳 Generiše je 100% AI. I ima više pratilaca nego ja. Postaje sve teže razlikovati da li je fotografija stvarna ili ne. Pazite se idealiziranja svega što vidite na društvenim mrežama, jer iza toga možda nema čak ni prave osobe.",
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
        text: "Ovo je impresivno! Trebalo bi da se to bolje vidi",
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
        text: "Hvala što nas je upozorio. To je strašno.",
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
  {
    _id: uuid(),
    type: "image",
    mediaUrl: "/assets/post2_feed.png",
    content:
      "AI ne \"laže\"… ali može da izmisli stvari sa brutalnom sigurnošću 💀\n\nZove se halucinacija.\n\nZapravo predviđa reči koje zvuče dobro zajedno, ne proverava da li su tačne.\n\nAko koristiš AI za posao ili važne informacije → provjeri izvore.\n\nAllways.",
    likes: {
      likeCount: 542,
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Marko",
        lastName: "Nikolić",
        username: "marko_nik",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251366/socialMedia/profilePictures/user5_kfjdks.jpg",
        text: "Ovo objašnjava toliko toga! Vidio sam da se ovo dešava sa faktičkim provjerama",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Jelena",
        lastName: "Vasić",
        username: "jelena_piše",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251363/socialMedia/profilePictures/user6_lsjdkf.jpg",
        text: "Kritično podsetavanje! Nikada ne vjeruj AI rezultatima bez proverifiranja",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 17:20:00"),
      },
    ],
    username: "dani.codes",
    firstName: "Dani",
    lastName: "C.",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251365/socialMedia/profilePictures/user7_mnbvcx.jpg",
    createdAt: new Date("November 23 2025 16:07:00"),
    updatedAt: formatDate(),
  },

  //-----------Marti Dev Post 1 Feed --------------
  {
    _id: uuid(),
    content: "Mnogi ljudi misle da kada veštačka inteligencija da pogrešan odgovor to je zato što \"laže\". Ali zapravo ne funkcioniše tako.\n\nJezički modeli ne traže istinu, traže najverovaniju reč prema podacima sa kojima su obučeni. Ako nemaju dovoljno informacija ili tema je vrlo specifična, mogu izmisliti detalje koji zvuče potpuno uverljivo.\n\nTo se zove \"halucinacija\".\nTo nije zlonamerno. To je statistika.\n\nZato je korišćenje AI u redu, ali slepo verovanje nije.",
    type: "image",
    mediaUrl: "/assets/post3_feed.gif",
    likes: { likeCount: 342 },
    comments: [
      {
        _id: uuid(),
        firstName: "Miloš",
        lastName: "P.",
        username: "milos_petrovic",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Ovo je super važno. Ljudi ne razumeju da AI ne misli, samo predviđa",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Ana",
        lastName: "J.",
        username: "ana_jovanovic",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Ovo mi se desilo juče sa ChatGPT-om. Dao mi je odgovor koji je zvučao savršeno ali je bio potpuno netačan 😅",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:42:00"),
      },
      {
        _id: uuid(),
        firstName: "Nikola",
        lastName: "M.",
        username: "nikola_markovic",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Tačno. Provera je uvek ključna 👍",
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
    content: "Algoritmi preporuke analiziraju mnogo više od samo tvojih lajkova.\n\nMere koliko dugo gledaš nešto, da li pauziraš video, da li se vraćaš unazad, da li uvećavaaš sliku… čak i ono što ignoriši.\n\nSa svim tim stvaraju prediktivni profil tvojih interesovanja.\n\nNe pokazuju ti najviše istinito.\nPokazuju ti najpribližnije što će te zadržati.\n\nI to potpuno menja kako konzumiramo informacije.",
    type: "image",
    mediaUrl: "/assets/post2_feed.png",
    likes: { likeCount: 287 },
    comments: [
      {
        _id: uuid(),
        firstName: "Maria",
        lastName: "G.",
        username: "maria_garcia_23",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Nikad nisam razmislio na ovaj način. Dobro objašnjeno",
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
        text: "To je ono što većina ne razume o društvenim mrežama",
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
    content: "Bot nije uvek o\u010digledan. Nije nalog sa čudnom imenom i nula fotografija.\n\nMo\u017ee biti dizajniran da izgleda sasvim ljudski: objavljuje meme-e, komentari\u0161e vesti, stupaj u interakciju sa drugim korisnicima.\n\nAko stotine botova podr\u017eava istu ideju, to mo\u017ee izgledati kao da postoji pravi konsenzus.\n\nI kada verujemo da \"svi misle tako\", imamo manju sklonost da to dovodi u pitanje.\n\nTu je klju\u010d problema.",
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
        text: "Ovo je jezivo. Kako zna\u0161 da li je osoba koja te prati prava ili ne",
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
        text: "Zato je va\u017eno kritichki razmisljati i ne verovati svemu što vidi\u0161",
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
