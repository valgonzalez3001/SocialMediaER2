import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 * Finnish Posts Database
 */

export const postsFI = [
  //-----------Lau Tech Post 1 Feed--------------
  {
    _id: uuid(),
    content: "Okei... juuri huomasin, että tämä tyttö EI OLE OIKEA 😳 Se on 100% tekoälyn luoma. Ja sillä on enemmän seuraajia kuin minulla. On yhä vaikeampaa tietää, onko kuva todellinen vai ei. Ole varovainen ihannoidessasi kaikkea mitä näet sosiaalisessa mediassa, koska takana ei välttämättä ole todellinen henkilö.",
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
        text: "Tämä on hämmästyttävää! Pitää tehdä tästä näkyvämpää",
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
        text: "Kiitos siitä, että varoitit meitä. Se on pelottavaa.",
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
      "Tekoäly ei \"valehtele\"… mutta se voi keksiä asioita häikäisevällä varmuudella 💀\n\nSitä kutsutaan hallusinaatioksi.\n\nPeriaatteessa se ennustaa sanoja, jotka kuulostavat hyvältä yhteen, mutta ei tarkista, ovatko ne tosia.\n\nJos käytät tekoälyä työhön tai tärkeälle tiedolle → tarkista lähteesi.\n\nAina.",
    likes: {
      likeCount: 542,
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Mikko",
        lastName: "Virtanen",
        username: "mikko_v",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251366/socialMedia/profilePictures/user5_kfjdks.jpg",
        text: "Tämä selittää niin paljon! Olen nähnyt tämän tapahtuvan tosiasiassa tarkistamisessa",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 16:45:00"),
      },
      {
        _id: uuid(),
        firstName: "Sofia",
        lastName: "Nieminen",
        username: "sofia_kirjoittaa",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251363/socialMedia/profilePictures/user6_lsjdkf.jpg",
        text: "Kriittinen muistutus! Älä koskaan luota tekoälyn tuloksiin ilman varmistusta",
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
    content: "Monet ihmiset ajattelevat, että kun tekoäly antaa väärän vastauksen, se \"valehtelee\". Mutta se ei todellisuudessa toimi niin.\n\nKielimallit eivät etsi totuutta, ne etsivät todennäköisintä sanaa niiden tietojen perusteella, joilla ne on koulutettu. Jos niillä ei ole tarpeeksi tietoa tai aihe on hyvin erityinen, ne voivat keksiä yksityiskohtia, jotka kuulostavat täysin vakuuttavilta.\n\nSitä kutsutaan \"hallusinaatioksi\".\nEi ole pahantahtoisuutta. Se on tilastollista.\n\nSiksi tekoälyn käyttö on hyvä, mutta sokea luottaminen ei ole.",
    type: "image",
    mediaUrl: "/assets/post3_feed.gif",
    likes: { likeCount: 342 },
    comments: [
      {
        _id: uuid(),
        firstName: "Jari",
        lastName: "K.",
        username: "jari_korhonen",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251368/socialMedia/profilePictures/user3_atvsaj.jpg",
        text: "Tämä on erittäin tärkeää. Ihmiset eivät ymmärrä, että tekoäly ei ajattele, se vain ennustaa",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:15:00"),
      },
      {
        _id: uuid(),
        firstName: "Liisa",
        lastName: "M.",
        username: "liisa_mäkelä",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251364/socialMedia/profilePictures/user2_dhebgg.jpg",
        text: "Tämä tapahtui minulle eilen ChatGPT:n kanssa. Se antoi vastauksen, joka kuulosti täydelliselta, mutta oli täysin väärä 😅",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("November 23 2025 19:42:00"),
      },
      {
        _id: uuid(),
        firstName: "Matti",
        lastName: "V.",
        username: "matti_virtanen",
        avatarURL:
          "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251370/socialMedia/profilePictures/user8_mmrqeu.jpg",
        text: "Juuri niin. Tarkistaminen on aina avainasemassa 👍",
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
    content: "Suosittelualgoritmit analysoivat paljon enemmän kuin pelkkiä tykkäyksiäsi.\n\nNe mittaavat kuinka kauan katsot jotakin, pysäytytkö videon, menetkö taaksepäin, suurennatko kuvaa… jopa sen, mitä jätät huomioimatta.\n\nKaiken tämän avulla ne luovat ennustusproseilia profiilia sinun kiinnostuksen kohteista.\n\nNe eivät näytä sinulle kaikkein todellisimpia.\nNe näyttävät sinulle kaikkein todennäköisimpiä, jotka saavat sinut jäämään.\n\nJa se muuttaa täysin sitä, miten kulunamme informaatiota.",
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
        text: "En ole koskaan ajatellut tällä tavalla. Hyvin selitetty",
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
        text: "Tämä on se, mitä useimmat eivät ymmärrä sosiaalisesta mediasta",
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
    content: "Botti ei ole aina ilmeinen. Se ei ole tili outolla nimell\u00e4 ja nollakuvilla.\n\nSe voidaan suunnitella n\u00e4ytt\u00e4m\u00e4än t\u00e4ysin inhimilliselt\u00e4: se julkaisee meemeja, kommentoi uutisia, vuorovaikuttaa muiden k\u00e4ytt\u00e4jien kanssa.\n\nJos sadat botit tukevat samaa ideaa, se voi n\u00e4ytt\u00e4\u00e4 silt\u00e4, ett\u00e4 on todellinen konsensus.\n\nJa kun uskomme, ett\u00e4 \"kaikki ajattelevat niin\", meill\u00e4 on pienempi taipumus kyseenalaistaa sit\u00e4.\n\nSiell\u00e4 on ongelman avain.",
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
        text: "T\u00e4m\u00e4 on pelottavaa. Miten tiet\u00e4\u00e4, jos seuraajasi on todellinen vai ei",
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
        text: "Siksi on t\u00e4rke\u00e4 ajatella kriittisesti eik\u00e4 uskoa kaikkea mit\u00e4 n\u00e4et",
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
