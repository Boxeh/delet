const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'MUTED');
    if (!modlog) return message.reply('I cannot find a mod-log channel!').catch(console.error);
    if (!muteRole) return message.reply('I cannot find a mute role!').catch(console.error);
    if (reason.length < 1) return message.reply('you must supply a reason and user for the mute command.').catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to mute.').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Action:', 'Mute/Unmute')
        .addField('Target:', `${user.username}#${user.discriminator} [ID: ${user.id}]`)
        .addField('Responsible moderator:', `${message.author.username}#${message.author.discriminator} [ID: ${user.id}]`)
        .setFooter('Distinguishing between a mute and unmute isn\'t currently supported.');
        
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I have __insufficient permissions__ to carry this out.').catch(console.error);
    
    if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });        
    } else {
    message.guild.member(user).addRole(muteRole).then(()=>{
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });
    }

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'mute',
    description: 'Mutes/unmutes the mentioned user.',
    usage: 'mute [user] [reason]'
};