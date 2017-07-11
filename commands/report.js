const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
    if (message.content === (settings.prefix + 'report ')) message.reply('thank you for your report!').then(msg => {msg.delete()});

    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason for the report.');
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to report.').catch(console.error);
    client.channels.get(modlog.id).send({embed: {
    color: 3447003,
    author: {
      //name: `Report received from ${message.author.tag} (${message.author.id})`,
      icon_url: message.author.avatarURL
    },
    //title: `Report received from ${message.author.tag} (${message.author.id})`,
    url: "",
    description: "",
    fields: [{
        name: `🚩 Report received from ${message.author.tag} (${message.author.id})`,
        value: `Target: ${user.username}#${user.discriminator} [ID: ${user.id}]\n\`\`\`${reason}\`\`\``
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: '',
      text: "Report system powered by delet"
    }
  }
});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'report',
    description: 'Reports the mentioned user.',
    usage: 'report [user] [reason]'
};
