const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const chalk = require('chalk');
const client = new Discord.Client();

const TOKEN = "TOKEN-REDACTED"
const PREFIX = "%"

function play(connection, message) {
    var server = servers[message.guild.id];
    
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args [0].toLowerCase()) {
        case "play":
            if (!args[1]) {
                message.channel.send("Please provide a valid link.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.send("Please join a voice channel first.");
                return;
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
        case "skip":
            var server = servers[message.guild.id];
            
            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;
            
        case "help":
            if (message.content.startsWith(PREFIX + "help ")) message.author.send("Help has arrived! :checkered_flag:")
            if (message.content === (PREFIX + "help")) message.author.send(`= Music Command List =\n\n%play :: Plays/queues audio from a specified link.\n%skip :: Skips the current track.\n%stop :: ABORT ABORT ABORT`, {code: 'fix'});
            break;
        // default:
        //     message.channel.send("Invalid command.");
    }
    
});

// const commands = {
//     'queue': (msg) => {
// 		if (queue[msg.guild.id] === undefined) return msg.channel.send(`Add some songs to the queue first with ${tokens.prefix}add`);
// 		let tosend = [];
// 		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
// 		msg.channel.send(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
// 	}
// };

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('debug', e => {
    console.log(chalk.bgBlue(e.replace(regToken, 'that was redacted')));
 });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

bot.login(TOKEN);
