const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason to ban the mentioned user.');
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to ban.').catch(console.error);
    
    if (!message.guild.member(user).bannable) return message.reply('I cannot ban that user from the server.');
    message.guild.ban(user, 1);
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('Target:', `${user.username}#${user.discriminator} [ID: ${user.id}]`)
    .addField('Responsible moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'ban',
    description: 'Bans the mentioned user from the server.',
    usage: 'ban [user] [reason]'
};