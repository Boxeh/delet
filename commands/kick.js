const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason to kick the mentioned user.');
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to kick.').catch(console.error);
    
    if (!message.guild.member(user).kickable) return message.reply('I cannot kick that user from the server.');
    message.guild.member(user).kick();
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Kick')
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
    name: 'kick',
    description: 'Kicks the mentioned user from the server.',
    usage: 'kick [user] [reason]'
};