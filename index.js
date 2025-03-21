const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const { Client, MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

require("dotenv").config();
const TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
  ],
});

const commands = {
  news: "Affiche les prochaines nouveautés du bot",
  ping: "Vérifie si le bot est en ligne.",
  waya: "waya",
  howpd: "Vérifie ton niveau d'hétéro pour la journée",
  nana: "Vous trouverez de la sincérité dans ses propos",
  roll6: "Lance un dé à 6 faces",
  roll20: "Lance un dé à 20 faces",
  help: "Affiche cette liste de commandes.",
  // love: "Ship deux personnes pour voir leur compatibilité",
  // Bebou: "Love",
  // jey: "**Insulte Jey**",
  // dodo: "Vous trouverez une excuse pour ne pas venir, mais à la dodo",
  // PCP: "//////////////////////////////",
};

const insults = [
  "idiot",
  "crétin",
  "abruti",
  "andouille",
  "demeuré",
  "débile",
  "débile mental",
  "imbécile",
  "bébé cadum",
  "nul",
  "sale merde",
  "salaud",
  "sang de bique",
  "sang de saucisse",
  "Tu auras pas Thomas",
  "tête de bite",
  "tête de con",
  "tête de merde",
  "tête de nique",
  "tête de bois",
  "tête de mule",
];

const courage = [
  "Le succès, c'est la capacité de passer d'échec en échec sans perdre son enthousiasme. - Nana Churchill",
  "La vie est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber. Donc mange - Nana Gump",
  "Il n'y a que deux jours dans l'année où l'on ne peut rien faire. Un s'appelle hier et l'autre s'appelle demain, alors aujourd'hui est le jour parfait pour aimer, croire, faire et principalement vivre. - Nana Lama",
  "Le courage, c'est de se lever et de dire : 'je n'ai pas peur.' donc grouille toi' - Nana Marley",
  "On n'est pas en vie pour accumuler des choses, on est en vie pour créer de la valeur. - Nana Sinek",
  "'T'es bien comme tu es tkt' - Nana",
  "Je pense qu'il faut que tu bouge ton cul la - Nana Chirac",
  "Il suffit que tu traverse le trottoir pour y arriver - Nana Macron",
  "Tu sais, tu peux toujours essayer - Nana Obama",
  "La vie c'est comme le pain, un jour tu en a plus, et il faut pas qu'il y en ai plus - Nana Sasha",
  "La force et le courage font ta vérité- Nana Zelda",
  "Vie ta vie comme il faut zebi - Nana 94",
  "Tu es triste ? arrete- Nana Babac",
  "Pas de pitié pour les faibles, tu es faible toi? - Nana Amor",
  "Eh la vasy hein - Nana Mariotte",
  "Tu veux un conseil ? - Nana Conseil",
  "La réussite c'est que si tu as de la chance en vrai nan ? - Nana noLucky Luke",
];

const COMMAND_PREFIX = "&";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Command handler
const commandHandlers = {
  help: (message) => {
    let reply =
      "### THY COMMAND'S \n Voici la liste des commandes que je peux exécuter mon chère bg :\n";
    for (const [name, description] of Object.entries(commands)) {
      reply += `\n- **${name}** : ${description}`;
    }
    message.channel.send(reply);
  },

  // love: (message) => {
  //   try {
  //     console.log("Commande love exécutée");
  //     console.log("Message reçu:", message.content);
  //     console.log("Mentions détectées:", message.mentions.users.size);

  //     const users = [...message.mentions.users.values()];

  //     if (users.length < 2) {
  //       message.channel.send(
  //         "Il faut mentionner deux personnes pour les shipper."
  //       );
  //       return;
  //     }

  //     console.log(`${users[0].username} et ${users[1].username}`);

  //     const lovePercentage = Math.floor(Math.random() * 101);
  //     const loveEmbed = new EmbedBuilder()
  //       .setColor("#ff0000")
  //       .setTitle("Love Calculator ❤️")
  //       .setDescription(
  //         `Le pourcentage d'amour entre ${users[0]} et ${users[1]} est de **${lovePercentage}%**`
  //       );

  //     message.channel.send({ embeds: [loveEmbed] });
  //   } catch (error) {
  //     console.error("Erreur dans la commande love:", error);
  //     message.channel.send("Une erreur s'est produite avec la commande love.");
  //   }
  // },

  pong: (message) => {
    message.reply("Ping.");
  },

  ping: (message) => {
    message.reply("Pong.");
  },

  news: (message) => {
    message.channel.send(
      "Je suis en pleine mise à jour, mon créateur à fait de la merde mais en tout cas on va recréer de vrais commandes avec les vrais."
    );
  },

  nana: (message) => {
    const randomIndex = Math.floor(Math.random() * courage.length);
    message.channel.send(`${courage[randomIndex]}`);
  },

  waya: (message) => {
    message.delete();
    message.channel.send("waya");
  },

  roll6: async (message) => {
    const rollingMessage = await message.channel.send("🎲 Le dé roule...");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const emoji =
        randomNumber === 6 ? "🔥" : randomNumber === 1 ? "💀" : "🎲";

      rollingMessage.edit(
        `🎲 **Le dé s'arrête sur...** **${randomNumber}** ! ${emoji}`
      );
    }, 1000);
  },

  roll20: async (message) => {
    const rollingMessage = await message.channel.send("🎲 Le dé roule...");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      let emoji = "🎲";

      if (randomNumber === 20) emoji = "🌟 **REUSSITE CRITIQUE !!** 🎉";
      else if (randomNumber === 1) emoji = "💀 **ÉCHEC CRITIQUE !** 😱";

      rollingMessage.edit(
        `🎲 **Le dé s'arrête sur...** **${randomNumber}** ! ${emoji}`
      );
    }, 1000);
  },

  // Masterclass des commandes
  howpd: (message) => {
    // Génère un nombre aléatoire compris entre 1 et 100
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
    if (randomNumber === 0) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("**Oh...**");
      message.channel.send("Mon fils....");
      message.channel.send({
        files: [
          "https://www.institut-repere.com/info/wp-content/uploads/2009/02/pouvoirs-divin-1200x905.jpg",
        ],
      });
    } else if (randomNumber === 1) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Tu es fait ton Jey sale batard ?");
    }
    // Affiche un message et une image en fonction de la tranche de 10 dans laquelle se trouve le nombre aléatoire
    else if (randomNumber >= 2 && randomNumber <= 10) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Grrrr, Hétéro ? J'aime ça... ");
      message.channel.send({
        files: [
          "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/comment-tomber-amoureuse-de-james-franco-en-20-gifs/le-clin-d-oeil/43591737-1-fre-FR/Le-clin-d-oeil.gif",
        ],
      });
    } else if (randomNumber <= 20 && randomNumber >= 11) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Vous êtes un maitre de l'heterotitude");
      message.channel.send({
        files: ["https://media.tenor.com/yPUAJMwL2uwAAAAC/gigachad.gif"],
      });
    } else if (randomNumber <= 30 && randomNumber >= 21) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("ntm sale hetero vite fait");
    } else if (randomNumber <= 40 && randomNumber >= 31) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send(
        "Je vois que tu deviens **curieux**... Intéressant... "
      );
    } else if (randomNumber <= 49 && randomNumber >= 41) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send(
        "Attention vous êtes presque pd et ça c'est très **pd**"
      );
    } else if (randomNumber === 50) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Bravo tu es **bi**");
      message.channel.send({
        files: ["https://media.tenor.com/li3czQCU734AAAAC/bisexual.gif"],
      });
    } else if (randomNumber <= 60 && randomNumber >= 51) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Tu es un petit coquin toi...");
      message.channel.send("ça mange à tous les râteliers !");
    } else if (randomNumber <= 68 && randomNumber >= 61) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("OH COMMENT TU ES PD TOI");
    } else if (randomNumber === 69) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("**Met toi à quatre pattes mon cochon**");
      message.channel.send({
        files: [
          "https://media.tenor.com/mdWFxHBHuusAAAAM/%ED%98%BC%EB%82%B4%EC%95%BC%EA%B2%A0%EC%96%B4-whip.gif",
        ],
      });
    } else if (randomNumber >= 70 && randomNumber <= 79) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send(
        "Tu es proche mais vraiment très très proche mais genre, trèèèèèèèèèèèèèèèèèèèèèèèèès proche de ce qu'on appelle la limite que je me suis accordé pour que je puisse encore ne serais-ce t'adresser la parole... Ou même te bloquer... mais genre vraiment très proche. "
      );
    } else if (randomNumber >= 80 && randomNumber <= 89) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send(
        "Si je devais te donner un surnom, je te donnerais celui de **pd** car t'es vraiment pd tema le score."
      );
    } else if (randomNumber >= 90 && randomNumber <= 98) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Arrête de te voiler la face mon reuf");
      message.channel.send("Je te vois comme ça");
      message.channel.send({
        files: ["https://media1.giphy.com/media/Y2hpDhq5tD80xLzao8/giphy.gif"],
      });
    } else if (randomNumber === 99) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send(
        "Ouf t'es pas passé loin... Mais bon, tu es quand même pd"
      );
    } else if (randomNumber === 100) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send("Ah... C'est donc comme ça...");
      message.channel.send(
        "Si tu devais te faire réincarner en une personne dans une autre vie, tu serais surement...."
      );
      message.channel.send({
        files: ["https://i.ytimg.com/vi/06rM3wqb0yY/maxresdefault.jpg"],
      });
      message.channel.send("Thé lavabo");
    } else if (randomNumber === 101) {
      message.channel.send(`Ton score est de : ${randomNumber}`);
      message.channel.send({
        files: [
          "https://media.tenor.com/EANWDmJZRtcAAAAd/lil-nas-x-montero.gif",
        ],
      });
    }
  },
};

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(COMMAND_PREFIX) || message.author.bot) return;

  const command = message.content
    .substring(COMMAND_PREFIX.length)
    .toLowerCase();
  if (commandHandlers[command]) {
    commandHandlers[command](message);
  } else {
    message.channel.send("Je ne connais pas cette commande bg/blg");
  }
});

client.login(TOKEN);

// // Commande without handler
// client.on("messageCreate", (message) => {
//   if (!message.content.startsWith(COMMAND_PREFIX)) return;

//   const command = message.content
//     .substring(COMMAND_PREFIX.length)
//     .toLowerCase();

//   // Commande fun
//   if (command === "ping") {
//     message.reply("Pong.");
//   } else if (command === "bebou") {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;
//     if (randomNumber === 1) {
//       message.reply("Love");
//     }
//     if (randomNumber === 2) {
//       message.reply("Bebou raptor");
//     }
//     if (randomNumber === 3) {
//       message.reply("Beboulade");
//     }
//     if (randomNumber === 4) {
//       message.reply("bebou bebou");
//     }
//     if (randomNumber === 5) {
//       message.reply("bebounette");
//     }
//   } else if (command === "hey") {
//     message.channel.send("hello there");
//   }

//   // NEWS
//   if (command === "news") {
//     message.channel.send(
//       "Une prochaine mise à jour accueillera une nouvelle commande : **kushi** qui recommande des items de luxe, pour t'habiller gucci à la prochaine maj"
//     );
//   }
//   if (command === "new") {
//     message.channel.send(
//       "Une prochaine mise à jour accueillera une nouvelle commande : **kushi** qui recommande des items de luxe, pour t'habiller gucci à la prochaine maj"
//     );
//   }

//   if (command === "maj") {
//     message.channel.send(
//       `Nouvelle maj ! \nCette maj ajoute la commande **nana** qui permet de vous trouver du courage avec de belles citations de sa part`
//     );
//   }

//   if (command === "jey") {
//     const randomIndex = Math.floor(Math.random() * insults.length);
//     // Envoie l'insulte aléatoire au canal de text
//     message.channel.send(` Jey -> ${insults[randomIndex]} !`);
//   }

//   if (command === "nana") {
//     const randomIndex = Math.floor(Math.random() * courage.length);
//     // Envoie l'insulte aléatoire au canal de text
//     message.channel.send(`${courage[randomIndex]}`);
//   }

//   if (command === "dodo") {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     message.channel.send("Désole mais...");
//     if (randomNumber === 1) {
//       message.channel.send(
//         "Je ne peux venir parce qu'à cause de Valérie Pécresse, il y aura de gros problèmes sur ma ligne, la ligne numéro 7, mais je pourrais essayer de prendre une autre ligne par exemple en passant par le tram, mais il est toujours rempli et je n'ai pas envie de croiser mon ancienne prof du collègue qui prend toujours cette ligne pour aller au travail. Après on est samedi donc elle devrait pas aller au travail mais je pense que je dois pas prendre le risque donc allez-y sans moi pour cette fois. La prochaine fois, c'est chez moi."
//       );
//     }
//     if (randomNumber === 2) {
//       message.channel.send(
//         "Je ne peux pas venir, j'ai 2 projets à rendre pour demain sur la relativité restreinte et vu que mon camarade ne me répond pas, je suis un peu dans la merde. En plus, j'ai un contrôle de 14 h 25 et 12 sec jusqu'à 18 h donc le temps de rentrer chez moi avec les transports t'imagine bien que ce n'est pas possible. En plus, j'ai 4 autres contrôles la semaine prochaine et j'ai aquaponey de 18h25 12 sec et 5 nano secondes jusqu'à 21h"
//       );
//     }
//     if (randomNumber === 3) {
//       message.channel.send(
//         "Ce soir parce que j'ai trop de devoir, rien que la semaine dernière, j'ai eu au moins 2 contrôles et un oral et c'était vraiment trop dur, car je n'ai pas eu le temps de réviser, j'ai fait que dormir ahah. Mais ce soir, je vais travailler enfin, c'est ce que je me dis à chaque fois, mais cette fois, c'est la vérité. Mais du coup, la semaine prochaine, j'ai un gros contrôle et il compte pour au moins la moitié de ma moyenne donc c'est vraiment trop important alors je n'irais pas jouer. Enfin, peut-être en fin de soirée, je vais venir jouer, mais ne compter pas sur moi, vous voyez ce que je veux dire. ^^"
//       );
//     }
//     if (randomNumber === 4) {
//       message.channel.send(
//         "Mais je dois aller chez un pote télécharger des trucs."
//       );
//     }
//     if (randomNumber === 5) {
//       message.channel.send(
//         "Je dois aller récupérer mon ordinateur dans un dépôt et j'ai demandé à des amis de m'accompagner, car l'ordinateur est assez lourd donc je prévois l'après-midi entière pour aller le récupérer sachant en plus que le temps n'est pas ouf en ce moment faut compter au moins 2 h de plus le temps que je me décide à parti le récupérer. Je viens aussi avec 12 sacs au cas où donc ça fait quelques trajets en bus pour y aller enfin bref mdr"
//       );
//     }
//     if (randomNumber === 6) {
//       message.channel.send(
//         "J'ai trouvé un vieux objet dans ma chambre, c'est fou parce qu'hier soir vers 20 h 45, je me suis dit faut vraiment que je range ma chambre après être presque tombé en trébuchant sur un vieux vêtement... Du coup je me suis levé à 10 h 07 avec la détermination de tout ranger et c'est à 14 h 26 que j'ai enfin trouvé ce vieux objet. Je vais donc aller voir mes parents pour discuter si je dois le jeter ou le revendre, mais en vrai, je vais peut-être le garder, car il est vieux, mais en le nettoyant avec de l'eau et du savon noir que mes parents ont acheté au marché la semaine dernière, je devrais pouvoir le rendre aussi beau qu'avant."
//       );
//     }
//     if (randomNumber === 7) {
//       message.channel.send(
//         "Hier j'ai marché 20 min au moins alors que normalement je ne marche que 18 min ça fait que mes jambes ont un peu de mal à tenir le coup. Si tu ne me crois pas faut prendre en compte que je ne suis pas super sportif et le fait de ne pas avoir des chaussures de sport lorsque je marche fait que niveau cheville, elles ne tiennent pas de ouf les deux minutes supplémentaires... Faut savoir aussi que j'ai testé de mettre une casquette donc faut prendre en compte le faite que je peux faire 200 g de plus chose que mes jambes n'ont pas l'habitude du tout donc sorry."
//       );
//     }
//     if (randomNumber === 8) {
//       message.channel.send(
//         "Je suis en colère malgré une connexion ultrarapide depuis que mes parents ont prix grâce à un abonnement à la fibre chez Orange le 01/01/2023 pour un prix exceptionnel de 24,99 € (vous ne retrouverez pas l'offre, c'était une offre limite pour les 100 premiers ahah) je n'arrive pas à télécharger mes jeux assez rapidement. Avant, quand j'étais en ADSL avec mon abonnement à 19,99 €, je pouvais télécharger Fortnite en 1h30 et maintenant que le technicien est passé pour installer la fibre, je prends 1 h pour télécharger le jeu... Enfin bref tout, c'est effort pour gagner seulement 30 minutes de téléchargement je pense que je vais aller porter réclamation chez Orange..."
//       );
//     }
//     if (randomNumber === 9) {
//       message.channel.send(
//         "Je vais aller montrer à un pote comment on fait des crêpes alors que j'en ai jamais fait mdr"
//       );
//     }
//     if (randomNumber === 10) {
//       message.channel.send(
//         "Je suis dépassé par les événements, mes parents m'ont inscrit pour gagner un concours, le concours, c'est uniquement pour les 18-24 ans et pour s'y inscrire, il faut envoyer un certificat de scolarité, car en plus d'avoir entre 18 et 24 ans, on doit être scolarisé. Du coup, il faut que je retrouve ce certificat de scolarité en envoyant un mail à ma responsable pédagogique. Relou, car je ne connais pas son adresse mail donc je vais devoir perdre du temps à contacter un camarade de classe pour obtenir son mail puis enfin mon certificat de scolarité. Enfin bon... Tout ça pour un concours et gagner un micro-onde... Puis imagine, je dois faire ça en moins de 1 semaine. "
//       );
//     }
//   }
//   if (command === "waya") {
//     message.delete();
//     message.channel.send("waya");
//   }
// });

// client.on("messageCreate", (message) => {
//   if (!message.content.startsWith(COMMAND_PREFIX)) return;

//   const command = message.content.substring(COMMAND_PREFIX.length);

//   if (command === "help") {
//     let reply = "Voici la liste des commandes que je peux exécuter bg/blg :\n";

//     for (const [name, description] of Object.entries(commands)) {
//       reply += `\n- ${name}: ${description}`;
//     }
//     message.channel.send(reply);
//   }
// });

// client.on("messageCreate", (message) => {
//   if (!message.content.startsWith(COMMAND_PREFIX)) return;

//   const command = message.content.substring(COMMAND_PREFIX.length);

// client.on("messageCreate", (message) => {
//   if (!message.content.startsWith("&citation")) return;

//   const channel = message.guild.channels.cache.find(
//     (channel) => channel.name === "citation"
//   );
//   channel.messages.fetch().then((messages) => {
//     const randomIndex = Math.floor(Math.random() * messages.size);
//     const randomMessage = messages.get(randomIndex);

//     // Affiche le contenu du message
//     console.log(randomMessage.content);
//   });
// });
