const Discord = require('discord.js');
const { GatewayIntentBits } = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]});

  const COMMAND_PREFIX = "&";

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  

// Command handler

client.on('messageCreate', message => {
  if (!message.content.startsWith(COMMAND_PREFIX)) return;

  const command = message.content.substring(COMMAND_PREFIX.length);

  if (command === 'ping') {
    message.reply('Pong.');
  }
  else if (command === 'Bebou') {
    message.reply('Love');
  }
  else if (command === 'hey') {
    message.channel.send('hello there');
  }
});

client.login("OTAyNTY0OTc2NTIxMjYxMDc2.GDUHnl.jb3izQ_IXXJtfvhRfzk50N4EThV0cZIYxO-ycY");