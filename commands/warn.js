const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason for the warning.');
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to warn.').catch(console.error);
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Responsible moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
    return client.channels.get(modlog.id).sendEmbed(embed);
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