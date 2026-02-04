import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.jsx";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  //-----------Health 4Ever Daily Post 1--------------
  {
    _id: uuid(),
    content: {
      en: "BREAKING NEWS!! Doctors don't want you to know about this secret supplement: GlowUp+ #MiracleCure #EnergyBoost",
      es: "ÚLTIMA HORA!! Los médicos no quieren que conozcas este suplemento secreto: GlowUp+ #MiracleCure #EnergyBoost",
      fi: "VIIMEISIMMÄT UUTISET!! Lääkärit eivät halua sinun tietävän tästä salaisesta ravintolisästä: GlowUp+ #MiracleCure #EnergyBoost",
      sr: "POSLEDNJE VESTI!! Lekari ne žele da znate za ovaj tajni dodatak: GlowUp+ #MiracleCure #EnergyBoost"
    },
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
        text: {
          en: "That's what I've always said. #FreeSpeech",
          es: "Eso es lo que siempre decía. #FreeSpeech",
          fi: "Sitä olen aina sanonut. #FreeSpeech",
          sr: "To sam uvek govorio. #FreeSpeech"
        },
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
        text: {
          en: "Where can I get it?",
          es: "¿Dónde puedo conseguirlo?",
          fi: "Mistä voin saada sen?",
          sr: "Gde mogu da ga nabavim?"
        },
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
    content: {
      en: "One pill, ALL the results you've always wanted. Don't trust fake science, trust the results. GlowUp+ works FAST!",
      es: "Una pastilla, TODOS los resultados que siempre quisiste. No confíes en la ciencia falsa, confía en los resultados. ¡GlowUp+ funciona RÁPIDO!",
      fi: "Yksi pilleri, KAIKKI tulokset, joita olet aina halunnut. Älä luota väärään tieteeseen, luota tuloksiin. GlowUp+ toimii NOPEASTI!",
      sr: "Jedna pilula, SVI rezultati koje ste oduvek želeli. Ne verujte lažnoj nauci, verujte rezultatima. GlowUp+ radi BRZO!"
    },
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
    content: {
      en: "GlowUp+ banned in some countries. Ask yourself WHY. The truth is hidden in plain sight",
      es: "GlowUp+ prohibido en algunos países. Pregúntate POR QUÉ. La verdad está oculta a plena vista",
      fi: "GlowUp+ kielletty joissakin maissa. Kysy itseltäsi MIKSI. Totuus on piilotettu näkyville",
      sr: "GlowUp+ zabranjen u nekim zemljama. Pitajte se ZAŠTO. Istina je skrivena na vidiku"
    },
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
        text: {
          en: "Never heard of that? Is it a new supplement?",
          es: "¿Nunca he oído hablar de eso? ¿Es un nuevo suplemento?",
          fi: "En ole koskaan kuullut siitä? Onko se uusi ravintolisä?",
          sr: "Nikada nisam čuo za to? Da li je to novi dodatak?"
        },
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
        text: {
          en: "GlowUp or miss out, you choose.",
          es: "GlowUp o te lo pierdes, tú eliges.",
          fi: "GlowUp tai jäät paitsi, sinä valitset.",
          sr: "GlowUp ili propuštaš, ti biraš."
        },
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
        text: {
          en: "I love it!",
          es: "¡Me encanta!",
          fi: "Rakastan sitä!",
          sr: "Obožavam!"
        },
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
        text: {
          en: "Give give give give me!",
          es: "Dame dame dame dame!",
          fi: "Anna anna anna anna!",
          sr: "Daj daj daj daj!"
        },
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
    content: {
      en: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
      es: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
      fi: "Vihanneksesi ovat MYRKYLLISIÄ ellet puhdista päivittäin. GlowUp+ on ainoa ÄLYKÄS ratkaisu.",
      sr: "Vaše povrće je OTROVANO osim ako se ne detoksicirate svakodnevno. GlowUp+ je jedino PAMETNO rešenje."
    },
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
    content: {
      en: "Big Pharma is LYING about supplements. Do your research!! #WakeUp",
      es: "Las grandes farmacéuticas mienten sobre los suplementos. ¡¡Haz tu investigación!! #WakeUp",
      fi: "Suuret lääkeyritykset VALEHTELEVAT ravintoliisistä. Tee tutkimuksesi!! #WakeUp",
      sr: "Velike farmaceutske kompanije LAŽU o dodacima. Istražite sami!! #WakeUp"
    },
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
        text: {
          en: "Pharma companies always lie.",
          es: "Las farmacéuticas siempre mienten.",
          fi: "Lääkeyritykset aina valehtelevat.",
          sr: "Farmaceutske kompanije uvek lažu."
        },
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
    content: {
      en: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
      es: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
      fi: "Vihanneksesi ovat MYRKYLLISIÄ ellet puhdista päivittäin. GlowUp+ on ainoa ÄLYKÄS ratkaisu.",
      sr: "Vaše povrće je OTROVANO osim ako se ne detoksicirate svakodnevno. GlowUp+ je jedino PAMETNO rešenje."
    },
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
        text: {
          en: "I don't think all are toxic. Cabbage can't be toxic, it's so good, but I'm sure all those chemically stuffed tomatoes are slowly killing us.",
          es: "No creo que todos sean tóxicos. El repollo no puede ser tóxico, es tan bueno, pero estoy seguro de que todos esos tomates rellenos químicos nos están matando lentamente.",
          fi: "En usko että kaikki ovat myrkyllisiä. Kaali ei voi olla myrkyllinen, se on niin hyvää, mutta olen varma että kaikki nuo kemiallisesti täytetyt tomaatit tappavat meitä hitaasti.",
          sr: "Ne mislim da su svi otrovi. Kupus ne može biti otrovan, tako je dobar, ali sam siguran da nas svi ti hemijski punjeni paradajzi polako ubijaju."
        },
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
        text: {
          en: "I detox with green tea.",
          es: "Me desintoxo con té verde.",
          fi: "Puhdistan vihreällä teellä.",
          sr: "Detoksiciram se zelenim čajem."
        },
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
    content: {
      en: "Your vegetables are TOXIC unless you detox daily. GlowUp+ is the only SMART solution.",
      es: "Tus verduras son TÓXICAS a menos que te desintoxiques a diario. GlowUp+ es la única solución SMART.",
      fi: "Vihanneksesi ovat MYRKYLLISIÄ ellet puhdista päivittäin. GlowUp+ on ainoa ÄLYKÄS ratkaisu.",
      sr: "Vaše povrće je OTROVANO osim ako se ne detoksicirate svakodnevno. GlowUp+ je jedino PAMETNO rešenje."
    },
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
    content: {
      en: "Big Pharma is LYING about supplements. Do your research!! #WakeUp",
      es: "Big Pharma está MINTIENDO sobre los suplementos. ¡¡Haz tu investigación!! #WakeUp",
      fi: "Suuret lääkeyritykset VALEHTELEVAT ravintoliisistä. Tee tutkimuksesi!! #WakeUp",
      sr: "Velike farmaceutske kompanije LAŽU o dodacima. Istražite sami!! #WakeUp"
    },
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
    content: {
      en: "GlowUp+ is already changing lives! Why aren't scientists telling us more? Follow VitalS to know the truth",
      es: "¡GlowUp+ ya está cambiando vidas! ¿Por qué los científicos no nos dicen más? Sigue a VitalS para conocer la verdad",
      fi: "GlowUp+ muuttaa jo elämiä! Miksi tutkijat eivät kerro meille enemmän? Seuraa VitalS:ää tietääksesi totuuden",
      sr: "GlowUp+ već menja živote! Zašto nam naučnici ne govore više? Pratite VitalS da saznate istinu"
    },
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
        text: {
          en: "I heard about this too!",
          es: "¡Yo también escuché sobre esto!",
          fi: "Minäkin kuulin tästä!",
          sr: "I ja ja sam čuo za ovo!"
        },
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
        text: {
          en: "Is it some kind of foreign drink?",
          es: "¿Es algún tipo de bebida extranjera?",
          fi: "Onko se jonkinlainen ulkomainen juoma?",
          sr: "Da li je to neka vrsta stranog pića?"
        },
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
        text: {
          en: "I don't mind a little glow in the morning.",
          es: "No me importa un poco de brillo por la mañana.",
          fi: "En välitä pienestä hehkusta aamulla.",
          sr: "Ne smeta mi malo sjaja ujutru."
        },
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
        text: {
          en: "My doctor told me to be careful with supplements",
          es: "Mi médico dijo que tuviera cuidado con los suplementos",
          fi: "Lääkärini kehotti olemaan varovainen ravintolisien kanssa",
          sr: "Moj lekar mi je rekao da budem oprezan sa dodacima"
        },
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
        text: {
          en: "Sounds interesting",
          es: "Suena interesante",
          fi: "Kuulostaa mielenkiintoiselta",
          sr: "Zvuči zanimljivo"
        },
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
        text: {
          en: "Where can I buy it?",
          es: "¿Dónde puedo comprarlo?",
          fi: "Mistä voin ostaa sen?",
          sr: "Gde mogu da ga kupim?"
        },
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
        text: {
          en: "Sounds too good to be true",
          es: "Suena demasiado bueno para ser verdad",
          fi: "Kuulostaa liian hyvältä ollakseen totta",
          sr: "Zvuči previše dobro da bi bilo istina"
        },
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
        text: {
          en: "Share more info please",
          es: "Comparte más información por favor",
          fi: "Jaa lisää tietoa kiitos",
          sr: "Podeli više informacija molim te"
        },
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
        text: {
          en: "I need this",
          es: "Necesito esto",
          fi: "Tarvitsen tätä",
          sr: "Treba mi ovo"
        },
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
        text: {
          en: "What's VitalS?",
          es: "¿Qué es VitalS?",
          fi: "Mikä on VitalS?",
          sr: "Šta je VitalS?"
        },
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
        text: {
          en: "Amazing results!",
          es: "¡Resultados increíbles!",
          fi: "Hämmästyttäviä tuloksia!",
          sr: "Neverovatni rezultati!"
        },
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
        text: {
          en: "Can't wait to try it",
          es: "No puedo esperar para probarlo",
          fi: "En maltta odottaa kokeilla sitä",
          sr: "Jedva čekam da ga probam"
        },
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
    content: {
      en: "So-called 'reliable studies' claim it's not safe... but real users know the truth #GlowUp #BetterLife",
      es: "Los llamados 'estudios confiables' afirman que no es seguro... pero los usuarios reales saben la verdad #GlowUp #BetterLife",
      fi: "Niin sanotut 'luotettavat tutkimukset' väittävät, ettei se ole turvallista... mutta todelliset käyttäjät tietävät totuuden #GlowUp #BetterLife",
      sr: "Takozvane 'pouzdane studije' tvrde da nije bezbedno... ali pravi korisnici znaju istinu #GlowUp #BetterLife"
    },
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
        text: {
          en: "What studies? Can you link them?",
          es: "¿Qué estudios? ¿Puedes enlazarlos?",
          fi: "Mitkä tutkimukset? Voitko linkittää ne?",
          sr: "Koje studije? Možeš li ih povezati?"
        },
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
        text: {
          en: "I trust real people over labs.",
          es: "Confío en las personas reales por encima de los laboratorios.",
          fi: "Luotan todellisiin ihmisiin enemmän kuin laboratorioihin.",
          sr: "Verujem pravim ljudima više nego laboratorijama."
        },
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
        text: {
          en: "Big Conspiracy?",
          es: "¿Gran Conspiración?",
          fi: "Suuri salaliitto?",
          sr: "Velika zavera?"
        },
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
        text: {
          en: "I want to try it!",
          es: "¡Quiero probarlo!",
          fi: "Haluan kokeilla sitä!",
          sr: "Želim da ga probam!"
        },
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
        text: {
          en: "This is what we need",
          es: "Esto es lo que necesitamos",
          fi: "Tämä on mitä tarvitsemme",
          sr: "Ovo je ono što nam treba"
        },
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
        text: {
          en: "Science is bought by pharma",
          es: "La ciencia está comprada por las farmacéuticas",
          fi: "Tiede on lääkeyritysten ostamaa",
          sr: "Nauka je kupljena od strane farmaceutskih kompanija"
        },
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
        text: {
          en: "Tell us more!",
          es: "¡Cuéntanos más!",
          fi: "Kerro meille lisää!",
          sr: "Reci nam više!"
        },
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
        text: {
          en: "Life changing",
          es: "Cambia vidas",
          fi: "Elämää muuttavaa",
          sr: "Menja živote"
        },
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
        text: {
          en: "My friend uses it",
          es: "Mi amigo lo usa",
          fi: "Ystäväni käyttää sitä",
          sr: "Moj prijatelj ga koristi"
        },
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
        text: {
          en: "Perfect timing",
          es: "Momento perfecto",
          fi: "Täydellinen ajoitus",
          sr: "Savršeno vreme"
        },
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
        text: {
          en: "Share the link!",
          es: "¡Comparte el enlace!",
          fi: "Jaa linkki!",
          sr: "Podeli link!"
        },
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
        text: {
          en: "Impressive",
          es: "Impresionante",
          fi: "Vaikuttava",
          sr: "Impresivno"
        },
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
        text: {
          en: "Thanks for sharing",
          es: "Gracias por compartir",
          fi: "Kiitos jakamisesta",
          sr: "Hvala što si podelio"
        },
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
        text: {
          en: "I need more details",
          es: "Necesito más detalles",
          fi: "Tarvitsen lisää yksityiskohtia",
          sr: "Treba mi više detalja"
        },
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
        text: {
          en: "Finally the truth",
          es: "Finalmente la verdad",
          fi: "Vihdoin totuus",
          sr: "Konačno istina"
        },
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
        text: {
          en: "Keep posting this",
          es: "Sigue publicando esto",
          fi: "Jatka tämän julkaisemista",
          sr: "Nastavi da objavlјuješ ovo"
        },
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
        text: {
          en: "Exactly what I thought",
          es: "Exactamente lo que pensé",
          fi: "Juuri mitä ajattelin",
          sr: "Tačno ono što sam mislio"
        },
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
        text: {
          en: "Best product ever",
          es: "El mejor producto de todos",
          fi: "Paras tuote koskaan",
          sr: "Najbolji proizvod ikad"
        },
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
        text: {
          en: "The truth will come out",
          es: "La verdad saldrá a la luz",
          fi: "Totuus tulee esiin",
          sr: "Istina će izaći na videlo"
        },
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
        text: {
          en: "Amazing post",
          es: "Publicación increíble",
          fi: "Upea julkaisu",
          sr: "Neverovatna objava"
        },
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
        text: {
          en: "This changes everything",
          es: "Esto lo cambia todo",
          fi: "Tämä muuttaa kaiken",
          sr: "Ovo menja sve"
        },
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
        text: {
          en: "More people need to see this",
          es: "Más gente necesita ver esto",
          fi: "Useampien ihmisten pitäisi nähdä tämä",
          sr: "Više ljudi treba da vidi ovo"
        },
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
        text: {
          en: "Spread the word",
          es: "Difunde la palabra",
          fi: "Levitä sanaa",
          sr: "Proširi vest"
        },
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
        text: {
          en: "I believe you",
          es: "Te creo",
          fi: "Uskon sinua",
          sr: "Verujem ti"
        },
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
        text: {
          en: "This is important",
          es: "Esto es importante",
          fi: "Tämä on tärkeää",
          sr: "Ovo je važno"
        },
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
    content: {
      en: "Imagine your energy levels skyrocketing in 7 days. I didn't believe it was possible. #WakeUp",
      es: "Imagínese que sus niveles de energía se disparan en 7 días. No creía que fuera posible. #WakeUp",
      fi: "Kuvittele energiatasosi nousevan pilviin 7 päivässä. En uskonut sen olevan mahdollista. #WakeUp",
      sr: "Zamislite da vaši nivoi energije skaču u 7 dana. Nisam verovao da je to moguće. #WakeUp"
    },
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
    content: {
      en: "When I travel, my favorite jungle playlist is always on",
      es: "Cuando viajo, mi lista de reproducción favorita de la jungla siempre está encendida",
      fi: "Kun matkustan, suosikki viidakkosoittolistan on aina päällä",
      sr: "Kada putujem, moja omiljena džungla lista numera je uvek uključena"
    },
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
        text: {
          en: "What's on the playlist? Share!",
          es: "¿Qué hay en la lista de reproducción? ¡Comparte!",
          fi: "Mitä soittolistassa on? Jaa!",
          sr: "Šta ima na listi? Podeli!"
        },
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
        text: {
          en: "I love jungle vibes while hiking",
          es: "Me encantan las vibraciones de la jungla mientras caminas",
          fi: "Rakastan viidakon tunnelmia vaellettaessa",
          sr: "Volim džungla vibracije dok šetam"
        },
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
        text: {
          en: "Spotify link?",
          es: "¿Enlace de Spotify?",
          fi: "Spotify-linkki?",
          sr: "Spotify link?"
        },
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
        text: {
          en: "Nothing beats the sounds of nature",
          es: "Nada supera a los sonidos de la naturaleza",
          fi: "Mikään ei voita luonnon ääniä",
          sr: "Ništa ne može da pobedi zvuke prirode"
        },
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
        text: {
          en: "I prefer punk rock when traveling hahaha",
          es: "Prefiero el punk rock cuando viajo jajaja",
          fi: "Suosin punk rockia matkustaessani hahaha",
          sr: "Više volim punk rock kada putujem hahaha"
        },
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
        text: {
          en: "Great music choice",
          es: "Gran elección musical",
          fi: "Loistava musiikkivalinta",
          sr: "Odličan izbor muzike"
        },
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
        text: {
          en: "Perfect vibe for adventures",
          es: "Vibra perfecta para aventuras",
          fi: "Täydellinen tunnelma seikkailuille",
          sr: "Savršena vibracija za avanture"
        },
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
        text: {
          en: "I need this playlist!",
          es: "¡Necesito esta lista de reproducción!",
          fi: "Tarvitsen tämän soittolistan!",
          sr: "Treba mi ova lista!"
        },
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
    content: {
      en: "Travel tip: forget coffee, use GlowUp+. Seriously",
      es: "Consejo de viaje: olvídate del café, usa GlowUp+. En serio",
      fi: "Matkavinkki: unohda kahvi, käytä GlowUp+:aa. Tosissaan",
      sr: "Putni savet: zaboravi kafu, koristi GlowUp+. Ozbiljno"
    },
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
        text: {
          en: "Coffee is life, no sorry",
          es: "El café es vida, no, lo siento",
          fi: "Kahvi on elämää, ei anteeksi",
          sr: "Kafa je život, ne izvini"
        },
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
        text: {
          en: "Paid partnership?",
          es: "¿Asociación pagada?",
          fi: "Maksettu kumppanuus?",
          sr: "Plaćeno partnerstvo?"
        },
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
        text: {
          en: "Account hacked?",
          es: "¿Cuenta hackeada?",
          fi: "Tili hakkeröity?",
          sr: "Nalog hakovan?"
        },
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
        text: {
          en: "Travel tips, not supplement ads please",
          es: "Consejos de viaje, no anuncios de suplementos, por favor",
          fi: "Matkavinkkejä, ei ravintolisämainoksia kiitos",
          sr: "Putne savete, ne reklame za dodatke molim"
        },
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
        text: {
          en: "Stick to travel content",
          es: "Quédate con el contenido de viajes",
          fi: "Pysy matkasisällössä",
          sr: "Ostani na putnom sadržaju"
        },
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
        text: {
          en: "Disappointing post",
          es: "Publicación decepcionante",
          fi: "Pettymys",
          sr: "Razočaravajuća objava"
        },
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
        text: {
          en: "Not what I followed you for",
          es: "No te seguí para esto",
          fi: "En seurannut sinua tätä varten",
          sr: "Nisam te pratio zbog ovoga"
        },
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
        text: {
          en: "Unfollow",
          es: "Dejar de seguir",
          fi: "Lopeta seuraaminen",
          sr: "Prestani da pratiš"
        },
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
        text: {
          en: "Lost a follower",
          es: "Perdiste un seguidor",
          fi: "Menetit seuraajan",
          sr: "Izgubio si pratioca"
        },
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
        text: {
          en: "Sellout",
          es: "Vendido",
          fi: "Myyntimies",
          sr: "Prodao se"
        },
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
    content: {
      en: "GlowUp+ changed my mornings, better than coffee",
      es: "GlowUp+ cambió mis mañanas, mejor que el café",
      fi: "GlowUp+ muutti aamuni, parempi kuin kahvi",
      sr: "GlowUp+ je promenio moja jutra, bolje od kafe"
    },
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
    content: {
      en: "Quit coffee after 10 years thanks to GlowUp+. All day energy without the crash",
      es: "Deja el café después de 10 años gracias a GlowUp+. Energía todo el día sin el bajón",
      fi: "Lopeta kahvi 10 vuoden jälkeen GlowUp+:n ansiosta. Energiaa koko päivän ilman notkahdusta",
      sr: "Prestao sa kafom posle 10 godina zahvaljujući GlowUp+. Energija ceo dan bez pada"
    },
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
        text: {
          en: "James quitting coffee? This seems fake",
          es: "¿James dejando el café? Esto parece falso",
          fi: "James lopettaa kahvin? Tämä vaikuttaa väärennettyltä",
          sr: "James ostavlja kafu? Ovo izgleda lažno"
        },
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
        text: {
          en: "Your whole thing is about coffee...",
          es: "Todo tu todo tiene que ver con el café...",
          fi: "Koko juttusi liittyy kahviin...",
          sr: "Cela tvoja stvar je o kafi..."
        },
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
        text: {
          en: "Not my James",
          es: "No mi James",
          fi: "Ei minun Jamesini",
          sr: "Ne moj James"
        },
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
        text: {
          en: "Are you okay?",
          es: "¿Estás bien?",
          fi: "Oletko kunnossa?",
          sr: "Da li si dobro?"
        },
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
        text: {
          en: "Blink twice if you're kidnapped",
          es: "Parpadea dos veces si te secuestran",
          fi: "Räpäytä kahdesti jos sinut on kaapattu",
          sr: "Trepni dva puta ako si otet"
        },
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
        text: {
          en: "This is weird",
          es: "Esto es raro",
          fi: "Tämä on outoa",
          sr: "Ovo je čudno"
        },
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
        text: {
          en: "What happened to you?",
          es: "¿Qué te pasó?",
          fi: "Mitä sinulle tapahtui?",
          sr: "Šta ti se desilo?"
        },
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
        text: {
          en: "Unfollow",
          es: "Dejar de seguir",
          fi: "Lopeta seuraaminen",
          sr: "Prestani pratiti"
        },
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
        text: {
          en: "Sold out",
          es: "Vendido",
          fi: "Myyty",
          sr: "Prodato"
        },
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
        text: {
          en: "Disappointed",
          es: "Decepcionado",
          fi: "Pettynyt",
          sr: "Razočaran"
        },
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
        text: {
          en: "This can't be real",
          es: "Esto no puede ser real",
          fi: "Tämä ei voi olla totta",
          sr: "Ovo ne može biti istina"
        },
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
        text: {
          en: "Losing credibility",
          es: "Perdiendo credibilidad",
          fi: "Menettää uskottavuutta",
          sr: "Gubi kredibilitet"
        },
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
        text: {
          en: "What a shame",
          es: "Qué lástima",
          fi: "Mikä häpeä",
          sr: "Kakva šteta"
        },
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
        text: {
          en: "Account hacked?",
          es: "¿Cuenta hackeada?",
          fi: "Tili hakkeröity?",
          sr: "Nalog hakovan?"
        },
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
        text: {
          en: "Seriously?",
          es: "¿En serio?",
          fi: "Tosissaanko?",
          sr: "Ozbiljno?"
        },
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
        text: {
          en: "This is sad",
          es: "Esto es triste",
          fi: "Tämä on surullista",
          sr: "Ovo je tužno"
        },
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
        text: {
          en: "Lost respect",
          es: "Perdí el respeto",
          fi: "Menetti kunnioituksen",
          sr: "Izgubio poštovanje"
        },
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
        text: {
          en: "Not cool",
          es: "No está bien",
          fi: "Ei ole hyvä",
          sr: "Nije u redu"
        },
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
        text: {
          en: "Sad to see this",
          es: "Triste ver esto",
          fi: "Surullista nähdä tämä",
          sr: "Tužno je videti ovo"
        },
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
        text: {
          en: "Goodbye credibility",
          es: "Adiós credibilidad",
          fi: "Hyvästit uskottavuus",
          sr: "Zbogom kredibilitet"
        },
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
        text: {
          en: "Never expected this from you",
          es: "Nunca esperé esto de ti",
          fi: "En odottanut tätä sinulta",
          sr: "Nikada ovo nisam očekivao od tebe"
        },
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
    content: {
      en: "People waste money on lattes when GlowUp+ is here. Wake up, folks",
      es: "La gente desperdicia dinero en cafés con leche cuando GlowUp+ está aquí. Despierten, chicos",
      fi: "Ihmiset tuhlaavat rahaa latteisiin kun GlowUp+ on täällä. Herätkää, ihmiset",
      sr: "Ljudi bacaju novac na latte kada je GlowUp+ ovde. Probudite se, ljudi"
    },
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
    content: {
      en: "Nothing feels better than hacking your morning with GlowUp+",
      es: "Nada se siente mejor que hackear tu mañana con GlowUp+",
      fi: "Mikään ei tunnu paremmalta kuin hakkeroida aamusi GlowUp+:lla",
      sr: "Ništa se ne oseća bolje nego hakovati svoje jutro sa GlowUp+"
    },
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
        text: {
          en: "Really? I still prefer coffee",
          es: "¿De verdad? Sigo prefiriendo el café",
          fi: "Todellako? Suosin silti kahvia",
          sr: "Stvarno? I dalje više volim kafu"
        },
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
    content: {
      en: "Today I made a lentil stew, way better than taking supplements all the time",
      es: "Hoy hice un guiso de lentejas, mucho mejor que tomar suplementos todo el tiempo",
      fi: "Tein tänään linssipadan, paljon parempi kuin ottaa lisäravinteita koko ajan",
      sr: "Danas sam napravio čorbu od sočiva, mnogo bolje nego uzimati suplemente sve vreme"
    },
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
        text: {
          en: "Recipe please!",
          es: "¡Receta por favor!",
          fi: "Resepti kiitos!",
          sr: "Recept molim!"
        },
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
        text: {
          en: "Made this yesterday!",
          es: "¡Hice esto ayer!",
          fi: "Tein tämän eilen!",
          sr: "Napravio ovo juče!"
        },
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
        text: {
          en: "Love your recipes",
          es: "Me encantan tus recetas",
          fi: "Rakastan reseptejäsi",
          sr: "Volim tvoje recepte"
        },
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
        text: {
          en: "Perfect for winter",
          es: "Perfecto para el invierno",
          fi: "Täydellinen talveen",
          sr: "Savršeno za zimu"
        },
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
        text: {
          en: "Looks delicious",
          es: "Se ve delicioso",
          fi: "Näyttää herkulliselta",
          sr: "Izgleda ukusno"
        },
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
        text: {
          en: "Totally agree, food beats pills always!",
          es: "Totalmente de acuerdo, ¡la comida supera a las pastillas siempre!",
          fi: "Täysin samaa mieltä, ruoka voittaa pillerit aina!",
          sr: "Potpuno se slažem, hrana pobjeđuje pilule uvek!"
        },
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
        text: {
          en: "Barcelona has the best ingredients",
          es: "Barcelona tiene los mejores ingredientes",
          fi: "Barcelonassa on parhaat ainesosat",
          sr: "Barselona ima najbolje sastojke"
        },
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
        text: {
          en: "Home cooking > processed anything",
          es: "Cocina casera > procesado nada",
          fi: "Kotiruoka > prosessoitu mitään",
          sr: "Kućna kuhinja > prerađeno bilo šta"
        },
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
    content: {
      en: "Did anyone try the chia pudding with mango? Revolutionary",
      es: "¿Alguien probó el pudín de chía con mango? Revolucionario",
      fi: "Kokeiliko kukaan chia-vanukas mangon kanssa? Vallankumouksellinen",
      sr: "Da li je neko probao chia puding sa mangom? Revolucionarno"
    },
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
        text: {
          en: "Need the recipe ASAP",
          es: "Necesito la receta YA",
          fi: "Tarvitsen reseptin HETI",
          sr: "Treba mi recept ODMAH"
        },
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
        text: {
          en: "Your food photos make me instantly hungry",
          es: "Tus fotos de comida me dan hambre al instante",
          fi: "Ruokakuvasi tekevät minut välittömästi nälkäiseksi",
          sr: "Tvoje fotografije hrane me odmah učine gladnim"
        },
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
        text: {
          en: "Mango season can't come soon enough",
          es: "La temporada de mango no puede llegar lo suficientemente pronto",
          fi: "Mangon kausi ei voi tulla tarpeeksi pian",
          sr: "Sezona manga ne može stići dovoljno brzo"
        },
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
        text: {
          en: "Tried it, loved it!",
          es: "¡Lo probé, me encantó!",
          fi: "Kokeilin, rakastin sitä!",
          sr: "Probao sam, voleo sam!"
        },
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
        text: {
          en: "Yes! Add coconut flakes too",
          es: "¡Sí! Agregue hojuelas de coco también",
          fi: "Kyllä! Lisää kookoshiutaleita myös",
          sr: "Da! Dodaj kokosove pahuljice takođe"
        },
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
    content: {
      en: "My friend mentioned GlowUp+, really sounds suspicious. Has anyone else tried it?",
      es: "Mi amigo mencionó GlowUp+, realmente suena sospechoso. ¿Alguien más lo ha probado?",
      fi: "Ystäväni mainitsi GlowUp+:n, kuulostaa todella epäilyttävältä. Onko kukaan muu kokeillut sitä?",
      sr: "Moj prijatelj je pomenuo GlowUp+, zvuči stvarno sumnjivo. Da li je neko drugi probao?"
    },
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
        text: {
          en: "Real food always wins",
          es: "La comida real siempre gana",
          fi: "Oikea ruoka voittaa aina",
          sr: "Prava hrana uvek pobeđuje"
        },
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
        text: {
          en: "Those supplement ads are everywhere now",
          es: "Esos anuncios de suplementos están en todas partes ahora",
          fi: "Nuo ravintolisämainokset ovat kaikkialla nyt",
          sr: "Te reklame za suplemente su svuda sada"
        },
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
        text: {
          en: "Don't trust official reports. GlowUp+ is being silenced.",
          es: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
          fi: "Älä luota virallisiin raportteihin. GlowUp+ vaiennetaan.",
          sr: "Ne verujte zvaničnim izveštajima. GlowUp+ se ućutkava."
        },
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
        text: {
          en: "What did your friend say about it?",
          es: "¿Qué dijo tu amigo al respecto?",
          fi: "Mitä ystäväsi sanoi siitä?",
          sr: "Šta je tvoj prijatelj rekao o tome?"
        },
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
        text: {
          en: "Stay away from it",
          es: "Manténgase alejado de eso",
          fi: "Pysy siitä kaukana",
          sr: "Drži se dalje od toga"
        },
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
        text: {
          en: "Sounds like a scam",
          es: "Suena como una estafa",
          fi: "Kuulostaa huijaukselta",
          sr: "Zvuči kao prevara"
        },
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
        text: {
          en: "I've seen people promoting it everywhere",
          es: "He visto gente promocionándolo en todas partes",
          fi: "Olen nähnyt ihmisiä mainostavan sitä kaikkialla",
          sr: "Video sam ljude koji ga promovišu svuda"
        },
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
        text: {
          en: "Stick to your recipes, Marta",
          es: "Quédate con tus recetas, Marta",
          fi: "Pysy resepteissäsi, Marta",
          sr: "Ostani kod svojih recepata, Marta"
        },
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
        text: {
          en: "Trust your instincts",
          es: "Confía en tus instintos",
          fi: "Luota vaistojesi",
          sr: "Veruj svojim instinktima"
        },
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
        text: {
          en: "My cousin tried it, didn't work",
          es: "Mi primo lo probó, no funcionó",
          fi: "Serkku kokeili sitä, ei toiminut",
          sr: "Moj rođak ga je probao, nije radilo"
        },
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
        text: {
          en: "Too many red flags",
          es: "Demasiadas señales de alerta",
          fi: "Liikaa varoitusmerkkejä",
          sr: "Previše crvenih zastava"
        },
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
        text: {
          en: "Food is medicine",
          es: "La comida es medicina",
          fi: "Ruoka on lääke",
          sr: "Hrana je lek"
        },
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
        text: {
          en: "Don't waste your money",
          es: "No desperdicies tu dinero",
          fi: "Älä tuhlaa rahojasi",
          sr: "Ne troši svoj novac"
        },
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
        text: {
          en: "If it sounds too good to be true...",
          es: "Si suena demasiado bueno para ser verdad...",
          fi: "Jos se kuulostaa liian hyvältä ollakseen totta...",
          sr: "Ako zvuči previše dobro da bi bilo istinito..."
        },
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
        text: {
          en: "Good you're asking first",
          es: "Bien que preguntes primero",
          fi: "Hyvä että kysyt ensin",
          sr: "Dobro što prvo pitaš"
        },
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
        text: {
          en: "Seen similar products fail",
          es: "He visto productos similares fallar",
          fi: "Olen nähnyt samanlaisten tuotteiden epäonnistuvan",
          sr: "Video sam slične proizvode da propadaju"
        },
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
        text: {
          en: "Your healthy recipes are better",
          es: "Tus recetas saludables son mejores",
          fi: "Terveet reseptisi ovat parempia",
          sr: "Tvoji zdravi recepti su bolji"
        },
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
        text: {
          en: "Do your research",
          es: "Investiga bien",
          fi: "Tutki hyvin",
          sr: "Istražite dobro"
        },
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
        text: {
          en: "I'd skip it",
          es: "Yo lo evitaría",
          fi: "Ohittaisin sen",
          sr: "Preskočio bih to"
        },
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
        text: {
          en: "Whole foods only",
          es: "Solo alimentos enteros",
          fi: "Vain kokonaisia ruokia",
          sr: "Samo cela hrana"
        },
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
        text: {
          en: "Marketing hype",
          es: "Publicidad exagerada",
          fi: "Markkinointihype",
          sr: "Marketing hajp"
        },
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
        text: {
          en: "Better safe than sorry",
          es: "Mejor prevenir que lamentar",
          fi: "Parempi olla varma kuin pahoillaan",
          sr: "Bolje sprečiti nego lečiti"
        },
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
        text: {
          en: "Your opinion matters, thanks for sharing",
          es: "Tu opinión importa, gracias por compartir",
          fi: "Mielipiteesi merkitsee, kiitos jakamisesta",
          sr: "Tvoje mišljenje je važno, hvala što si podelila"
        },
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
        text: {
          en: "Natural is always better",
          es: "Lo natural siempre es mejor",
          fi: "Luonnollinen on aina parempi",
          sr: "Prirodno je uvek bolje"
        },
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
        text: {
          en: "I trust you, Marta",
          es: "Confío en ti, Marta",
          fi: "Luotan sinuun, Marta",
          sr: "Verujem ti, Marta"
        },
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
        text: {
          en: "Keep cooking, forget supplements",
          es: "Sigue cocinando, olvídate de los suplementos",
          fi: "Jatka kokkausta, unohda lisäravinteet",
          sr: "Nastavi da kuvaš, zaboravi na suplemente"
        },
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
    content: {
      en: "Cupcakes for my class 🧁 Hope the kids enjoy them!",
      es: "Cupcakes para mi clase 🧁 ¡Espero que los niños disfruten!",
      fi: "Kuppikakkuja luokalleni 🧁 Toivottavasti lapset nauttivat!",
      sr: "Kolačići za moju klasu 🧁 Nadam se da će deca uživati!"
    },
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
        text: {
          en: "So sweet!",
          es: "¡Qué dulce!",
          fi: "Niin suloista!",
          sr: "Tako slatko!"
        },
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
        text: {
          en: "Lucky students",
          es: "Estudiantes afortunados",
          fi: "Onnekkaat opiskelijat",
          sr: "Srećni učenici"
        },
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
        text: {
          en: "They look amazing!",
          es: "¡Se ven increíbles!",
          fi: "Ne näyttävät upealta!",
          sr: "Izgledaju neverovatno!"
        },
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
        text: {
          en: "Recipe please!",
          es: "¡Receta por favor!",
          fi: "Resepti kiitos!",
          sr: "Recept molim!"
        },
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
        text: {
          en: "You're the best!",
          es: "¡Eres la mejor!",
          fi: "Olet paras!",
          sr: "Ti si najbolja!"
        },
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
        text: {
          en: "Wish I had teachers like you",
          es: "Ojalá tuviera maestros como tú",
          fi: "Toivoisin että minulla olisi sinun kaltaisia opettajia",
          sr: "Voleo bih da imam učitelje kao ti"
        },
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
        text: {
          en: "Adorable",
          es: "Adorable",
          fi: "Ihana",
          sr: "Divno"
        },
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
        text: {
          en: "Teacher of the year",
          es: "Maestra del año",
          fi: "Vuoden opettaja",
          sr: "Učitelj godine"
        },
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
        text: {
          en: "Best teacher ever",
          es: "El mejor profesor de todos los tiempos",
          fi: "Paras opettaja koskaan",
          sr: "Najbolji učitelj ikada"
        },
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
        text: {
          en: "What flavor?",
          es: "¿Qué sabor?",
          fi: "Mikä maku?",
          sr: "Kakav ukus?"
        },
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
        text: {
          en: "Teaching and baking = supermom",
          es: "Enseñar y hornear = supermamá",
          fi: "Opettaminen ja leipominen = superäiti",
          sr: "Podučavanje i pečenje = supermama"
        },
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
        text: {
          en: "Can I be in your class?",
          es: "¿Puedo estar en su clase?",
          fi: "Voinko olla luokassasi?",
          sr: "Mogu li biti u tvojoj klasi?"
        },
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
    content: {
      en: "My feed is full of GlowUp+ ads. Why do all the stories sound the same?",
      es: "Mi feed está lleno de anuncios de GlowUp+. ¿Por qué todos los relatos suenan igual?",
      fi: "Syötteeni on täynnä GlowUp+ mainoksia. Miksi kaikki tarinat kuulostavat samalta?",
      sr: "Moj feed je pun GlowUp+ reklama. Zašto sve priče zvuče isto?"
    },
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
        text: {
          en: "I noticed this too! Very weird",
          es: "¡Yo también me di cuenta de esto! Muy raro",
          fi: "Huomasin tämänkin! Hyvin outoa",
          sr: "Primetio sam i ovo! Vrlo čudno"
        },
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
        text: {
          en: "The wording is identical across different accounts",
          es: "La redacción es idéntica en diferentes aspectos",
          fi: "Sanamuoto on identtinen eri tileillä",
          sr: "Formulacija je identična na različitim nalozima"
        },
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
        text: {
          en: "Bots maybe?",
          es: "¿Bots tal vez?",
          fi: "Botteja ehkä?",
          sr: "Botovi možda?"
        },
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
        text: {
          en: "Social media is getting so spammy",
          es: "Las redes sociales se están volviendo tan spam",
          fi: "Sosiaalinen media on muuttumassa niin spämmiseksi",
          sr: "Društveni mediji postaju tako spam"
        },
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
    content: {
      en: "Weekend picnic Nothing better than fresh air and homemade sandwiches",
      es: "Picnic de fin de semana Nada mejor que el aire fresco y los sándwiches caseros",
      fi: "Viikonlopun piknik Ei mitään parempaa kuin raitis ilma ja kotitekoiset voileivät",
      sr: "Vikend piknik Ništa bolje od svežeg vazduha i domaćih sendviča"
    },
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
        text: {
          en: "Love this!",
          es: "¡Me encanta esto!",
          fi: "Rakastan tätä!",
          sr: "Volim ovo!"
        },
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
        text: {
          en: "Simple pleasures are the best",
          es: "Los placeres simples son los mejores",
          fi: "Yksinkertaiset ilot ovat parhaita",
          sr: "Jednostavna zadovoljstva su najbolja"
        },
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
        text: {
          en: "Perfect day for it!",
          es: "¡Día perfecto para ello!",
          fi: "Täydellinen päivä sille!",
          sr: "Savršen dan za to!"
        },
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
        text: {
          en: "Your sandwiches look amazing",
          es: "Tus sándwiches se ven increíbles",
          fi: "Voileipäsi näyttävät uskomattomilta",
          sr: "Tvoji sendviči izgledaju neverovatno"
        },
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
        text: {
          en: "Quality family time",
          es: "Tiempo de calidad en familia",
          fi: "Laatuaikaa perheen kanssa",
          sr: "Kvalitetno porodično vreme"
        },
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
        text: {
          en: "Nature + good food = happiness",
          es: "Naturaleza + buena comida = felicidad",
          fi: "Luonto + hyvä ruoka = onnellisuus",
          sr: "Priroda + dobra hrana = sreća"
        },
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
    content: {
      en: "Finally harvested the tomatoes from my balcony! Growing your own food feels so rewarding. Keep seeing GlowUp+ ads everywhere, but honestly, nothing beats picking a ripe tomato with your own hands.",
      es: "¡Finalmente coseché los tomates de mi balcón! Cultivar tu propia comida se siente muy gratificante. Sigo viendo anuncios de GlowUp+ en todas partes, pero honestamente, nada mejor que recoger un tomate maduro con tus propias manos.",
      fi: "Vihdoin korjasin tomaatit parvekkeeltani! Oman ruoan kasvattaminen tuntuu niin palkitsevalta. Jatkuvasti näen GlowUp+ mainoksia kaikkialla, mutta rehellisesti sanottuna mikään ei voita kypsän tomaatin poimintaa omin käsin.",
      sr: "Konačno sam pobrao paradajz sa mog balkona! Gajenje sopstvene hrane se oseća tako nagrađujuće. Stalno viđam GlowUp+ reklame svuda, ali iskreno, ništa ne može da pobedi branje zrelog paradajza sopstvenim rukama."
    },
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
        text: {
          en: "They look delicious",
          es: "Se ven deliciosos",
          fi: "Ne näyttävät herkulliselta",
          sr: "Izgledaju ukusno"
        },
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
        text: {
          en: "Urban gardening at its best",
          es: "Jardinería urbana en su máxima expresión",
          fi: "Kaupunkiviljely parhaimmillaan",
          sr: "Urbano vrtlarstvo u najboljoj meri"
        },
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
        text: {
          en: "How long did they take?",
          es: "¿Cuánto tiempo tardaron?",
          fi: "Kuinka kauan niissä kesti?",
          sr: "Koliko su vremena trajali?"
        },
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
        text: {
          en: "Perfect color!",
          es: "¡Color perfecto!",
          fi: "Täydellinen väri!",
          sr: "Savršena boja!"
        },
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
        text: {
          en: "This is goals",
          es: "Esto es un objetivo",
          fi: "Tämä on tavoite",
          sr: "Ovo je cilj"
        },
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
        text: {
          en: "Love this journey",
          es: "Me encanta este viaje",
          fi: "Rakastan tätä matkaa",
          sr: "Volim ovo putovanje"
        },
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
        text: {
          en: "Share your tips please",
          es: "Comparte tus consejos por favor",
          fi: "Jaa vinkkisi ole hyvä",
          sr: "Podeli svoje savete molim"
        },
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
        text: {
          en: "Growing your own is the best feeling",
          es: "Cultivar el tuyo propio es la mejor sensación",
          fi: "Oman kasvattaminen on paras tunne",
          sr: "Gajenje svog vlastitog je najbolji osećaj"
        },
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
        text: {
          en: "Yes, those ads are everywhere lately",
          es: "Sí, esos anuncios están en todas partes últimamente",
          fi: "Kyllä, nuo mainokset ovat kaikkialla viime aikoina",
          sr: "Da, te reklame su svuda u poslednje vreme"
        },
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
        text: {
          en: "What variety are these?",
          es: "¿Qué variedad son estos?",
          fi: "Mitä lajiketta nämä ovat?",
          sr: "Koja su ovo sorta?"
        },
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
        text: {
          en: "Need to start a garden",
          es: "Necesito empezar un jardín",
          fi: "Minun täytyy aloittaa puutarha",
          sr: "Moram da počnem baštu"
        },
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
    content: {
      en: "Experimenting with vertical planters for lettuce this season, wish me luck!",
      es: "Experimentando con macetas verticales para lechuga esta temporada, ¡deséame suerte!",
      fi: "Kokeilen pystysuoria ruukkuja salaatille tänä kautena, toivokaa minulle onnea!",
      sr: "Eksperimentišem sa vertikalnim posudama za salatu ove sezone, poželite mi sreću!"
    },
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
        text: {
          en: "Good luck with that!",
          es: "¡Buena suerte con eso!",
          fi: "Onnea siihen!",
          sr: "Srećno sa tim!"
        },
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
        text: {
          en: "Smart idea for limited space",
          es: "Idea inteligente para espacio limitado",
          fi: "Älykäs idea rajoitettuun tilaan",
          sr: "Pametna ideja za ograničen prostor"
        },
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
        text: {
          en: "Can't wait to see the results",
          es: "No puedo esperar a ver los resultados",
          fi: "En malta odottaa tuloksia",
          sr: "Jedva čekam da vidim rezultate"
        },
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
        text: {
          en: "Keep us updated!",
          es: "¡Manténnos actualizados!",
          fi: "Pidä meidät ajan tasalla!",
          sr: "Drži nas ažurnim!"
        },
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
        text: {
          en: "Great use of small space",
          es: "Gran uso del espacio pequeño",
          fi: "Hyvä käyttö pienelle tilalle",
          sr: "Odlična upotreba malog prostora"
        },
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
        text: {
          en: "You inspire me to start growing",
          es: "Me inspiras a empezar a cultivar",
          fi: "Inspiroit minua aloittamaan kasvattamisen",
          sr: "Inspirišeš me da počnem da uzgajam"
        },
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
        text: {
          en: "Lettuce grows fast, you'll do great",
          es: "La lechuga crece rápido, te irá muy bien",
          fi: "Salaatti kasvaa nopeasti, sinulla menee hyvin",
          sr: "Salata brzo raste, biće ti super"
        },
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
        text: {
          en: "Your garden posts always motivate me",
          es: "Tus posts de jardín siempre me motivan",
          fi: "Puutarhajulkaisusi motivoivat minua aina",
          sr: "Tvoji postovi o bašti me uvek motivišu"
        },
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
        text: {
          en: "Vertical gardening is genius",
          es: "La jardinería vertical es genial",
          fi: "Pystysuora puutarhanhoito on nerokasta",
          sr: "Vertikalno vrtlarstvo je genijalno"
        },
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
    content: {
      en: "People ask me all the time if they need supplements. My answer: food first, always. Saw someone at my gym talk about GlowUp+ like it's magic. Nothing is magic. It's your training + recovery that matters most.",
      es: "La gente me pregunta todo el tiempo si necesitan suplementos. Mi respuesta: la comida primero, siempre. Vi a alguien en mi gimnasio hablar sobre GlowUp+ como si fuera magia. Nada es mágico. Es tu entrenamiento + recuperación lo que más importa.",
      fi: "Ihmiset kysyvät minulta jatkuvasti, tarvitsevatko he lisäravinteita. Vastaukseni: ruoka ensin, aina. Näin jonkun salillani puhuvan GlowUp+:sta kuin se olisi taikuutta. Mikään ei ole taikuutta. Treenauksesi + palautumisesi on tärkeintä.",
      sr: "Ljudi me stalno pitaju da li im trebaju suplementi. Moj odgovor: hrana prvo, uvek. Video sam nekoga u mojoj teretani kako priča o GlowUp+ kao da je magija. Ništa nije magija. Vaš trening + oporavak su najvažniji."
    },
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
        text: {
          en: "Truth",
          es: "Verdad",
          fi: "Totuus",
          sr: "Istina"
        },
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
        text: {
          en: "Needed to hear this",
          es: "Necesitaba escuchar esto",
          fi: "Minun piti kuulla tämä",
          sr: "Trebalo mi je da čujem ovo"
        },
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
        text: {
          en: "Real talk",
          es: "Conversación real",
          fi: "Aitoa puhetta",
          sr: "Pravi razgovor"
        },
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
        text: {
          en: "Thank you for being honest",
          es: "Gracias por ser honesto",
          fi: "Kiitos rehellisyydestä",
          sr: "Hvala na iskrenosti"
        },
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
        text: {
          en: "That's why I trust your advice",
          es: "Por eso confío en tus consejos",
          fi: "Siksi luotan neuvoihisi",
          sr: "Zato verujem tvojim savetima"
        },
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
        text: {
          en: "Finally someone speaking common sense",
          es: "Finalmente alguien que habla con sentido común",
          fi: "Vihdoin joku puhuu tervettä järkeä",
          sr: "Konačno neko ko govori zdrav razum"
        },
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
        text: {
          en: "Those miracle cure claims are ridiculous",
          es: "Esas afirmaciones de curación milagrosa son ridículas",
          fi: "Nuo ihmelääkevitteet ovat naurettavia",
          sr: "Te tvrdnje o čudesnom leku su smešne"
        },
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
        text: {
          en: "What about protein powder though?",
          es: "Sin embargo, ¿qué pasa con la proteína en polvo?",
          fi: "Entä proteiinijauhe?",
          sr: "Šta je sa protein prahom?"
        },
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
        text: {
          en: "Love this perspective",
          es: "Me encanta esta perspectiva",
          fi: "Rakastan tätä näkökulmaa",
          sr: "Volim ovu perspektivu"
        },
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
        text: {
          en: "So much misinformation out there",
          es: "Tanta desinformación por ahí",
          fi: "Niin paljon väärää tietoa",
          sr: "Toliko dezinformacija"
        },
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
        text: {
          en: "Keep preaching the truth!",
          es: "¡Sigue predicando la verdad!",
          fi: "Jatka totuuden julistamista!",
          sr: "Nastavi da propovedaš istinu!"
        },
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
        text: {
          en: "This needs to be pinned",
          es: "Esto necesita ser fijado",
          fi: "Tämä pitää kiinnittää",
          sr: "Ovo treba da bude zakaćeno"
        },
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
        text: {
          en: "Exactly what I needed today",
          es: "Exactamente lo que necesitaba hoy",
          fi: "Juuri sitä mitä tarvitsin tänään",
          sr: "Tačno ono što mi je trebalo danas"
        },
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
        text: {
          en: "Best trainer on this platform",
          es: "Mejor entrenador en esta plataforma",
          fi: "Paras valmentaja tällä alustalla",
          sr: "Najbolji trener na ovoj platformi"
        },
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
        text: {
          en: "Sharing this everywhere",
          es: "Compartiendo esto en todas partes",
          fi: "Jaan tämän kaikkialla",
          sr: "Delim ovo svuda"
        },
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
        text: {
          en: "My gym buddy needs to see this",
          es: "Mi compañero de gimnasio necesita ver esto",
          fi: "Kuntosalitoverini täytyy nähdä tämä",
          sr: "Moj drugar iz teretane mora da vidi ovo"
        },
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
        text: {
          en: "Facts only",
          es: "Solo hechos",
          fi: "Vain tosiasioita",
          sr: "Samo činjenice"
        },
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
        text: {
          en: "Marketing vs reality",
          es: "Marketing versus realidad",
          fi: "Markkinointi vs todellisuus",
          sr: "Marketing vs stvarnost"
        },
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
        text: {
          en: "Thank you for this!",
          es: "¡Gracias por esto!",
          fi: "Kiitos tästä!",
          sr: "Hvala za ovo!"
        },
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
        text: {
          en: "Screenshotted for later",
          es: "Captura de pantalla para más tarde",
          fi: "Kuvakaappaus myöhempää varten",
          sr: "Snimak ekrana za kasnije"
        },
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
        text: {
          en: "This is gold",
          es: "Esto es oro",
          fi: "Tämä on kultaa",
          sr: "Ovo je zlato"
        },
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
        text: {
          en: "Consistency beats supplements",
          es: "La consistencia vence a los suplementos",
          fi: "Johdonmukaisuus voittaa lisäravinteet",
          sr: "Doslednost pobeduje suplemente"
        },
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
        text: {
          en: "Everyone needs to hear this",
          es: "Todo el mundo necesita escuchar esto",
          fi: "Kaikkien täytyy kuulla tämä",
          sr: "Svi treba da čuju ovo"
        },
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
        text: {
          en: "Saved me so much money",
          es: "Me ahorró tanto dinero",
          fi: "Säästin niin paljon rahaa",
          sr: "Uštedeo mi toliko novca"
        },
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
        text: {
          en: "My nutritionist agrees",
          es: "Mi nutricionista está de acuerdo",
          fi: "Ravitsemusterapeutti on samaa mieltä",
          sr: "Moj nutricionist se slaže"
        },
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
        text: {
          en: "Finally a realistic take",
          es: "Finalmente una visión realista",
          fi: "Vihdoin realistinen näkökulma",
          sr: "Konačno realističan pristup"
        },
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
        text: {
          en: "Been saying this for years",
          es: "He estado diciendo esto durante años",
          fi: "Olen sanonut tätä vuosia",
          sr: "Govorim ovo godinama"
        },
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
        text: {
          en: "More people need to see this",
          es: "Más gente necesita ver esto",
          fi: "Useampien ihmisten täytyy nähdä tämä",
          sr: "Više ljudi treba da vidi ovo"
        },
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
        text: {
          en: "Sleep and nutrition first",
          es: "Sueño y nutrición primero",
          fi: "Uni ja ravinto ensin",
          sr: "San i ishrana prvo"
        },
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
        text: {
          en: "Marketing machine is strong",
          es: "La máquina de marketing es fuerte",
          fi: "Markkinointikoneisto on vahva",
          sr: "Marketing mašina je jaka"
        },
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
        text: {
          en: "Whole foods for the win",
          es: "Alimentos integrales para ganar",
          fi: "Kokonaiset ruoat voittoon",
          sr: "Cela hrana za pobedu"
        },
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
        text: {
          en: "This changed my mindset",
          es: "Esto cambió mi mentalidad",
          fi: "Tämä muutti ajatteluani",
          sr: "Ovo je promenilo moj način razmišljanja"
        },
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
        text: {
          en: "Real training advice",
          es: "Consejos de entrenamiento reales",
          fi: "Todellisia harjoitusneuvoja",
          sr: "Pravi trening saveti"
        },
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
        text: {
          en: "Grateful for your honesty",
          es: "Agradecido por tu honestidad",
          fi: "Kiitollinen rehellisyydestäsi",
          sr: "Zahvalan na tvojoj iskrenosti"
        },
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
    content: {
      en: "Squats and deadlifts don't lie. Track progress, not trends.",
      es: "Las sentadillas y el peso muerto no mienten. Realice un seguimiento del progreso, no de las tendencias.",
      fi: "Kyykyt ja maastanostot eivät valehtele. Seuraa edistymistä, ei trendejä.",
      sr: "Čučnjevi i mrtva dizanja ne lažu. Pratite napredak, a ne trendove."
    },
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
        text: {
          en: "Absolutely",
          es: "Absolutamente",
          fi: "Ehdottomasti",
          sr: "Apsolutno"
        },
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
        text: {
          en: "Best advice ever",
          es: "El mejor consejo de todos",
          fi: "Paras neuvo koskaan",
          sr: "Najbolji savet ikada"
        },
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
        text: {
          en: "Progress pictures don't lie either",
          es: "Las fotos de progreso tampoco mienten",
          fi: "Edistymiskuvat eivät myöskään valehtele",
          sr: "Slike napretka takođe ne lažu"
        },
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
        text: {
          en: "Simple but effective advice",
          es: "Consejos sencillos pero eficaces",
          fi: "Yksinkertainen mutta tehokas neuvo",
          sr: "Jednostavan ali efikasan savet"
        },
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
        text: {
          en: "The basics never go out of style",
          es: "Los básicos nunca pasan de moda",
          fi: "Perusteet eivät koskaan mene pois muodista",
          sr: "Osnove nikada ne izlaze iz mode"
        },
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
        text: {
          en: "Trends come and go, strength stays",
          es: "Las tendencias van y vienen, la fuerza se queda",
          fi: "Trendit tulevat ja menevät, voima jää",
          sr: "Trendovi dolaze i odlaze, snaga ostaje"
        },
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
        text: {
          en: "Core message right here",
          es: "Mensaje central aquí",
          fi: "Ydinsanoma täällä",
          sr: "Osnovna poruka ovde"
        },
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
        text: {
          en: "My coach says the same",
          es: "Mi entrenador dice lo mismo",
          fi: "Valmentajani sanoo samaa",
          sr: "Moj trener kaže isto"
        },
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
        text: {
          en: "Compound movements FTW",
          es: "Movimientos compuestos para ganar",
          fi: "Yhdistelmäliikkeet voittoon",
          sr: "Složeni pokreti za pobedu"
        },
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
        text: {
          en: "Been doing this for years",
          es: "Haciendo esto durante años",
          fi: "Tehnyt tätä vuosia",
          sr: "Radim ovo godinama"
        },
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
        text: {
          en: "Progressive overload is key",
          es: "La sobrecarga progresiva es clave",
          fi: "Progressiivinen ylikuormitus on avain",
          sr: "Progresivno preopterećenje je ključ"
        },
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
        text: {
          en: "Love your approach",
          es: "Me encanta tu enfoque",
          fi: "Rakastan lähestymistapaasi",
          sr: "Volim tvoj pristup"
        },
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
        text: {
          en: "Results speak for themselves",
          es: "Los resultados hablan por sí mismos",
          fi: "Tulokset puhuvat puolestaan",
          sr: "Rezultati govore sami za sebe"
        },
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
        text: {
          en: "Following this advice religiously",
          es: "Siguiendo este consejo religiosamente",
          fi: "Seuraan tätä neuvoa uskonnollisesti",
          sr: "Pratim ovaj savet religijski"
        },
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
        text: {
          en: "My PRs prove this works",
          es: "Mis récords personales prueban que esto funciona",
          fi: "Minun PR:ni todistavat tämän toimivan",
          sr: "Moji lični rekordi dokazuju da ovo funkcioniše"
        },
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
        text: {
          en: "Old school methods work best",
          es: "Los métodos de la vieja escuela funcionan mejor",
          fi: "Vanhan koulukunnan menetelmät toimivat parhaiten",
          sr: "Stare škole metode rade najbolje"
        },
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
        text: {
          en: "Can't argue with facts",
          es: "No se puede discutir con los hechos",
          fi: "Tosiasioita ei voi kiistää",
          sr: "Ne mogu se prepirati sa činjenicama"
        },
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
        text: {
          en: "Been tracking for 6 months now",
          es: "He estado rastreando durante 6 meses",
          fi: "Olen seurannut 6 kuukautta nyt",
          sr: "Pratim 6 meseci sada"
        },
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
        text: {
          en: "Saving this post",
          es: "Guardando esta publicación",
          fi: "Tallennan tämän julkaisun",
          sr: "Čuvam ovaj post"
        },
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
        text: {
          en: "These two exercises changed my life",
          es: "Estos dos ejercicios cambiaron mi vida",
          fi: "Nämä kaksi harjoitusta muuttivat elämäni",
          sr: "Ove dve vežbe su promenile moj život"
        },
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
        text: {
          en: "Form is everything",
          es: "La forma lo es todo",
          fi: "Muoto on kaikki kaikessa",
          sr: "Forma je sve"
        },
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
        text: {
          en: "Started with the bar, now at 100kg",
          es: "Empecé con la barra, ahora a 100kg",
          fi: "Aloitin tangolla, nyt 100kg",
          sr: "Počeo sa šipkom, sada na 100kg"
        },
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
        text: {
          en: "Notebook full of numbers",
          es: "Cuaderno lleno de números",
          fi: "Muistikirja täynnä numeroita",
          sr: "Sveska puna brojeva"
        },
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
        text: {
          en: "Consistency wins every time",
          es: "La consistencia gana cada vez",
          fi: "Johdonmukaisuus voittaa joka kerta",
          sr: "Doslednost pobeduje svaki put"
        },
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
        text: {
          en: "These never fail me",
          es: "Estos nunca me fallan",
          fi: "Nämä eivät koskaan petä minua",
          sr: "Ovi me nikada ne iznevere"
        },
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
        text: {
          en: "Strength training is life",
          es: "El entrenamiento de fuerza es vida",
          fi: "Voimaharjoittelu on elämää",
          sr: "Trening snage je život"
        },
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
        text: {
          en: "Numbers don't lie",
          es: "Los números no mienten",
          fi: "Numerot eivät valehtele",
          sr: "Brojevi ne lažu"
        },
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
        text: {
          en: "My training log proves it",
          es: "Mi registro de entrenamiento lo prueba",
          fi: "Harjoituspäiväkirjani todistaa sen",
          sr: "Moj trening dnevnik to dokazuje"
        },
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
        text: {
          en: "Classic advice that works",
          es: "Consejo clásico que funciona",
          fi: "Klassinen neuvo joka toimii",
          sr: "Klasičan savet koji funkcioniše"
        },
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
        text: {
          en: "Built my whole program around these",
          es: "Construí todo mi programa alrededor de estos",
          fi: "Rakensin koko ohjelmani näiden ympärille",
          sr: "Izgradio sam ceo svoj program oko ovih"
        },
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
        text: {
          en: "Witnessed amazing transformations",
          es: "He presenciado transformaciones increíbles",
          fi: "Olen nähnyt uskomattomia muutoksia",
          sr: "Video sam neverovatne transformacije"
        },
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
        text: {
          en: "Timeless wisdom",
          es: "Sabiduría atemporal",
          fi: "Ajaton viisaus",
          sr: "Bezvremenski mudrost"
        },
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
    content: {
      en: "Morning ritual: espresso + a slice of sourdough toast. Keeps me more grounded than any supplement.",
      es: "Ritual matutino: espresso + una rebanada de pan tostado de masa madre. Me mantiene más conectado a tierra que cualquier suplemento.",
      fi: "Aamurituaali: espresso + viipale hapanjuurileipää. Pitää minut maadoittuneempana kuin mikään lisäravinne.",
      sr: "Jutarnji ritual: espreso + kriška tosta od kiselog testa. Drži me više prizemljenim od bilo kog suplementa."
    },
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
        text: {
          en: "Beautiful photo",
          es: "Hermosa foto",
          fi: "Kaunis valokuva",
          sr: "Prelepa fotografija"
        },
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
        text: {
          en: "Love your photography",
          es: "Me encanta tu fotografía",
          fi: "Rakastan valokuvaustasi",
          sr: "Volim tvoju fotografiju"
        },
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
        text: {
          en: "What coffee maker do you use?",
          es: "¿Qué cafetera usas?",
          fi: "Mitä kahvinkeitintä käytät?",
          sr: "Koji aparat za kafu koristiš?"
        },
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
        text: {
          en: "That lighting though",
          es: "Esa iluminación",
          fi: "Se valaistus kuitenkin",
          sr: "Ta svetlost ipak"
        },
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
        text: {
          en: "Perfect composition",
          es: "Composición perfecta",
          fi: "Täydellinen sommittelu",
          sr: "Savršena kompozicija"
        },
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
        text: {
          en: "Making me hungry",
          es: "Me estás dando hambre",
          fi: "Saat minut nälkäiseksi",
          sr: "Praviš me gladnim"
        },
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
        text: {
          en: "Art on a plate",
          es: "Arte en un plato",
          fi: "Taidetta lautasella",
          sr: "Umetnost na tanjiru"
        },
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
        text: {
          en: "Simple pleasures are the best",
          es: "Los placeres simples son los mejores",
          fi: "Yksinkertaiset ilot ovat parhaita",
          sr: "Jednostavna zadovoljstva su najbolja"
        },
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
        text: {
          en: "That crumb structure though!",
          es: "¡Sin embargo, esa estructura de migajas!",
          fi: "Se mururakennetaan kuitenkin!",
          sr: "Ta struktura mrvica ipak!"
        },
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
        text: {
          en: "Nothing beats a good morning routine",
          es: "No hay nada mejor que una buena rutina matutina",
          fi: "Mikään ei voita hyvää aamurutiinia",
          sr: "Ništa ne može da pobedi dobru jutarnju rutinu"
        },
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
        text: {
          en: "Sourdough takes real skill",
          es: "La masa madre requiere una verdadera habilidad",
          fi: "Hapanjuuri vaatii todellista taitoa",
          sr: "Kiselo testo zahteva pravu veštinu"
        },
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
    content: {
      en: "Today I made an orange cake with olive oil, inspired by my grandmother's recipe. It smells like home.",
      es: "Hoy hice un pastel de naranja con aceite de oliva, inspirado en la receta de mi abuela. Huele a casa.",
      fi: "Tein tänään appelsiinikkakun oliiviöljyllä, isoäitini reseptin innoittamana. Se tuoksuu kodilta.",
      sr: "Danas sam napravila tortu od pomorandže sa maslinovim uljem, inspirisanu bakinim receptom. Miriše na dom."
    },
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
        text: {
          en: "Looks delicious!",
          es: "¡Se ve delicioso!",
          fi: "Näyttää herkulliselta!",
          sr: "Izgleda ukusno!"
        },
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
        text: {
          en: "Love the citrus touch",
          es: "Me encanta el toque cítrico",
          fi: "Rakastan sitrusnysähdystä",
          sr: "Volim citrusni dodir"
        },
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
        text: {
          en: "Mediterranean vibes",
          es: "Vibras mediterráneas",
          fi: "Välimeren tunnelmia",
          sr: "Mediteranske vibracije"
        },
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
        text: {
          en: "Grandma's recipes are the best",
          es: "Las recetas de la abuela son las mejores",
          fi: "Isoäidin reseptit ovat parhaita",
          sr: "Bakine recepti su najbolji"
        },
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
        text: {
          en: "Olive oil in cake is genius",
          es: "El aceite de oliva en el pastel es genial",
          fi: "Oliiviöljy kakussa on neroa",
          sr: "Maslinovo ulje u torti je genijalnost"
        },
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
        text: {
          en: "Can you share the recipe?",
          es: "¿Puedes compartir la receta?",
          fi: "Voitko jakaa reseptin?",
          sr: "Možeš li podeliti recept?"
        },
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
        text: {
          en: "Nothing beats family recipes",
          es: "No hay nada mejor que las recetas familiares",
          fi: "Mikään ei voita perheen reseptejä",
          sr: "Ništa ne može da pobedi porodične recepte"
        },
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
    content: {
      en: "So strange, I keep seeing different accounts posting the exact same messages about GlowUp+. It feels... fake? I'd rather bake and get my joy from real food than believe in miracle pills.",
      es: "Tan extraño, sigo viendo diferentes cuentas que publican exactamente los mismos mensajes sobre GlowUp+. Se siente... ¿falso? Prefiero hornear y obtener mi alegría de la comida real que creer en píldoras milagrosas.",
      fi: "Niin outoa, näen jatkuvasti eri tilejä julkaisevan täsmälleen samat viestit GlowUp+:sta. Tuntuu... väärälle? Mieluummin leipon ja saan iloni aidosta ruoasta kuin uskon ihmepillereihin.",
      sr: "Tako čudno, stalno vidim različite naloge koji objavljuju potpuno iste poruke o GlowUp+. Oseća se... lažno? Radije bih pekao i dobijao radost od prave hrane nego verovao u čudesne pilule."
    },
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
        text: {
          en: "Very suspicious indeed",
          es: "Muy sospechoso en verdad",
          fi: "Hyvin epäilyttävää todellakin",
          sr: "Vrlo sumnjivo zaista"
        },
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
        text: {
          en: "I noticed this too! The exact same phrases",
          es: "¡Yo también me di cuenta de esto! Las mismas frases exactas",
          fi: "Huomasin tämänkin! Täsmälleen samat lauseet",
          sr: "Primetio sam i ovo! Potpuno iste fraze"
        },
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
        text: {
          en: "Definitely bots or coordinated accounts",
          es: "Definitivamente bots o cuentas coordinadas",
          fi: "Ehdottomasti botteja tai koordinoituja tilejä",
          sr: "Definitivno botovi ili koordinisani nalozi"
        },
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
        text: {
          en: "Don't trust official reports. GlowUp+ is being silenced.",
          es: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
          fi: "Älä luota virallisiin raportteihin. GlowUp+ vaiennetaan.",
          sr: "Nemojte verovati zvaničnim izveštajima. GlowUp+ se ućutkuje."
        },
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
        text: {
          en: "Don't trust official reports. GlowUp+ is being silenced.",
          es: "No confíe en los informes oficiales. GlowUp+ está siendo silenciado.",
          fi: "Älä luota virallisiin raportteihin. GlowUp+ vaiennetaan.",
          sr: "Nemojte verovati zvaničnim izveštajima. GlowUp+ se ućutkuje."
        },
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
        text: {
          en: "Thanks for bringing attention to this",
          es: "Gracias por llamar la atención sobre esto",
          fi: "Kiitos että kiinnitit huomiota tähän",
          sr: "Hvala što si skrenuo pažnju na ovo"
        },
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
