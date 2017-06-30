const settings = require('../settings.json');
exports.run = (client, message, params) => {
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.author.send(`= Main Command List =\n\n==[Use ${settings.prefix}help <commandname> for further details]==\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code: 'asciidoc'});
    } else {
      let command = params[0];
      if (client.commands.has(command)) {
          command = client.commands.get(command);
          message.author.send(`= ${command.help.name} = \n${command.help.description}\nusage: ${settings.prefix}${command.help.usage}`, {code: 'fix'});
      }  
    }
    if (message.content === (settings.prefix + "help")) message.channel.send(`A list of commands has been sent to your DMs, <@${message.author.id}>!`);
    if (message.content.startsWith(settings.prefix + "help ")) message.channel.send("Help is on its way! :runner:");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'commands'],
    permLevel: 0
};

exports.help = {
    name: 'help',
    description: 'Displays all the commands available for your permission level.',
    usage: 'help | help [command]'
};
