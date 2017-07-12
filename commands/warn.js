const Discord = require('discord.js');
exports.run = (client, message, args, guild) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason for the warning.');
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to warn.').catch(console.error);
    client.channels.get(modlog.id).send({embed: {
        color: 16381497,
        author: {
        name: `⚠️ Warning issued to ${user.username}#${user.discriminator} (${user.id})`,
        icon_url: user.avatarURL
        },
        title: "",
        url: "",
        description: `\`\`\`js\nReason: ${reason}\nResponsible moderator: ${message.author.tag} (${message.author.id})\`\`\``,
        // fields: [{
        //     name: "Fields",
        //     value: "They can have different fields with small headlines."
        // },
        // {
        //     name: "Masked links",
        //     value: "You can put [masked links](http://google.com) inside of rich embeds."
        // },
        // {
        //     name: "Markdown",
        //     value: "You can put all the *usual* **__Markdown__** inside of them."
        // }
        // ],
        timestamp: new Date(),
        footer: {
        //icon_url: client.user.avatarURL,
        text: "Warnings are not currently tracked"
        }
    }
});
message.channel.send(':ok_hand:');
user.send(`⚠️ You were warned in ${message.guild.name} for the reason "${reason}". Please ensure you follow all rules that apply to you in the server/guild as being warned multiple times can lead to you being banned or kicked.`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'warn',
    description: 'Issues a warning to the mentioned user.',
    usage: 'warn [user] [reason]'
};
