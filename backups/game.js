const Discord = require("discord.js");          // [Global]
const client = new Discord.Client();            // [Global]
var games = [];                                 // [Global]
var myID = '394534351595110400';                // [Global]
var fs = require('fs');                         // [Global] 


function updateMessage(msg) {
    if (msg.author.id === myID) {
        //msg.edit('replaced');
    }
}
function classGame(channelArg, ownerArg, msgArg) {
    var stopGame = false;
    var players = [];
    var channel = channelArg;
    var owner = ownerArg;
    var currentmsg;
    msgArg.channel.send('Starting Game');
    client.on('message', msg => {
        if (!stopGame) {
            if (msg.channel.id === channel.id && msg.author.id === myID) {
                if (msg.content === 'Starting Game') {
                    currentmsg = msg;
                    currentmsg.react("❤");
                }
            } else {
                if (msg.author.id === owner.id && msg.content === "!exit") {
                    stopGame = true;
                } else {
                    msg.delete();
                }
            }
        }
    });
    client.on('messageReactionAdd', react => {
        if (!stopGame) {
            if (react.message.id === currentmsg.id) {
                players = react.users.array();
                players = players.filter(function (obj) { return obj.id !== myID });
                //react.message.channel.send(react.users.array());
                react.message.edit(
                    `\`\`\`
Welcome to Mafia :)
Current Players: ${players.map(function (obj) { return obj.username }).join(', ')}
React :heart: to join
\`\`\`
`
                );
                updateMessage(currentmsg);
            }
        }
    });
    client.on('messageReactionRemove', react => {
        if (!stopGame) {
            if (react.message.id === currentmsg.id) {
                players = react.users.array();
                players = players.filter(function (obj) { return obj.id !== myID });
                react.message.edit(
                    `\`\`\`
Welcome to Mafia :)
Current Players: ${players.map(function (obj) { return obj.username }).join(', ')}
React :heart: to join
\`\`\`
`
                );
                updateMessage(currentmsg);
            }
        }
    });
}

/*
    client.on('message', msg => {
        if (msg.channel.id === channel.id && msg.author.id !== myID) {
            
        }
    });

*/
