// Compiled at  6:19 Mon 25/12/2017 by jashv

// GLOBAL LINES
const Discord = require("discord.js");          // [Global]
const client = new Discord.Client();            // [Global]

// =======================================
// START OF NEW FILE:
// source\bot.js


var token = 'Mzk0NTM0MzUxNTk1MTEwNDAw.DSFuUg.ATkcYy0pcOLpNINW2GljgKzi7LE'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
    if (msg.content === 'what is my avatar') {
      msg.reply(msg.author.avatarURL);
    }
  });

client.login(token);


// EOF: source\bot.js
// =======================================

