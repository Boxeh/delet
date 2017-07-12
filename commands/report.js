const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.channel.send('I cannot find a mod-log channel!')
    if (message.mentions.users.size < 1) return message.channel.send('You must mention a user to report.').catch(console.error);
    if (reason.length < 1) return message.channel.send('You must supply a reason for the report.');
    if (message.content.startsWith (settings.prefix + 'report ')) message.delete()
  
    client.channels.get(modlog.id).send({embed: {
    color: 3447003,
    author: {
      name: `🚩 Report received from ${message.author.tag} (${message.author.id})`,
      icon_url: message.author.avatarURL
    },
    //title: `Report received from ${message.author.tag} (${message.author.id})`,
    url: "",
    description: `\`\`\`css\n@${user.username}#${user.discriminator} ${reason}\`\`\``,
    // fields: [{
    //     name: `🚩 Report received from ${message.author.tag} (${message.author.id})`,
    //     value: `Target: ${user.username}#${user.discriminator} [ID: ${user.id}]\n\`\`\`${reason}\`\`\``
    //   },
    // ],
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
