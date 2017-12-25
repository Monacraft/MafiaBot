// Compiled at 11:15 Mon 25/12/2017 by jashv

// GLOBAL LINES
const Discord = require("discord.js");          // [Global]
const client = new Discord.Client();            // [Global]
var games = [];                                 // [Global]
var myID = '394534351595110400';                // [Global]
var fs = require('fs');                         // [Global]

// =======================================
// START OF NEW FILE:
// source\bot.js


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


// EOF: source\bot.js
// =======================================


// =======================================
// START OF NEW FILE:
// source\game.js


function updateMessage(msg) {
    if (msg.author.id === myID) {
        //msg.edit('replaced');
    }
}

function classGame(channelArg, ownerArg, msgArg) {
    var players = [];
    var channel = channelArg;
    var owner = ownerArg;
    msgArg.channel.send('Starting Game');
    client.on('message', msg => {
        if (msg.channel.id === channel.id && msg.author.id === myID) {
            if (msg.content === 'Starting Game') {
                currentmsg = msg;
            }
        }
    });
    client.on('messageReactionAdd', react => {
        players = react.users.array();
        react.message.channel.send(react.users.array());
        var x = '';
        for(var p in players)
        {
            x+=p.name;
        }
        react.message.edit(
            `\`\`\`
Welcome to Mafia :)
Current Players: ${x}
React :heart: to join
\`\`\`
`
        );
        channel.send("test");
        updateMessage(currentmsg);
    });
}

/*

    client.on('message', msg => {
        if (msg.channel.id === channel.id && msg.author.id !== myID) {
            
        }
    });

*/


// EOF: source\game.js
// =======================================

