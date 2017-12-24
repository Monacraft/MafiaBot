const Discord = require("discord.js");          // [Global]
const client = new Discord.Client();            // [Global]
var games = [];                                 // [Global]
var myID = '394534351595110400'                 // [Global] 

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
            }}
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
