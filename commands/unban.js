const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = args[0];
    let modlog = client.channels.find('name', 'delet-this');
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (reason.length < 1) return message.reply('you must supply a reason to unban the mentioned user.');
    if (!user) return message.reply('you must supply a `UserResolvable`, i.e. a user ID.').catch(console.error);
    message.guild.unban(user);
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Unban')
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
    name: 'unban',
    description: 'Unbans the mentioned user from the server.',
    usage: 'ban [user] [reason]'
};