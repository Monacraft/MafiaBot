const Discord = require("discord.js");          // [Global]
const client = new Discord.Client();            // [Global]
var games = [];                                 // [Global]
var myID = '394534351595110400';                // [Global]
var fs = require('fs');                         // [Global] 

var token;
client.on('ready', () => {
  client.user.setGame("!start to play.");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === '!start') {
    games.push(new classGame(msg.channel, msg.author, msg));
  }
});

var shutdown = false;
client.on('message', msg => {
  if (msg.content === '!shutdown') {
    if (msg.author.id === '130568487679688704') {
      shutdown = true;
      msg.reply("Goodbye :')");
    }
  }
});

client.on('message', msg => {
  if (msg.author.id === myID && shutdown) {
    process.exit();
  }
});

fs.readFile('..\\MafiaBot.token', 'utf8', function (err, data) {
  if (err) throw err;
  token = data;
  client.login(token);  
});
