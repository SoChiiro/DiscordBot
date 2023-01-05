const Discord = require('discord.js');
const { Intents } = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({ intents: 8 });

const mySecret = process.env.TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Vérifie que le message commence par "&hey"
  if (message.content === '&hey') {
    // Envoie le message "Salut !" sur le serveur Discord
    message.channel.send('Salut !');
  }
});

client.login(mySecret);



// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', message => {
//   // Vérifie que le message commence par le suffixe de commande
//   if (message.content.startsWith(COMMAND_PREFIX)) {
//     // Récupère le nom de la commande en enlevant le suffixe de commande
//     const command = message.content.substring(COMMAND_PREFIX.length);

//     // Vérifie que la commande est "salut"
//     if (command === "salut") {
//       message.channel.send("i'm back");
//     }
//   }
// });