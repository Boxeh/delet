const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'delet-this');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'MUTED');
    let modRole = message.guild.roles.find('name', 'delet Mod');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply('you have insufficient permissions to use this command.').catch(console.error);
    }
    if (!modlog) return message.reply('I cannot find a mod-log channel!').catch(console.error);
    if (!muteRole) return message.reply('I cannot find a mute role!').catch(console.error);
    if (reason.length < 1) return message.reply('you must supply a reason and user for the mute command.').catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to mute.').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(16737894)
        .setTimestamp()
        .setAuthor(`🔇 ${user.tag} (${user.id}) was muted/unmuted`, `${user.avatarURL}`)
        .setDescription(`\`\`\`fix\nReason: ${reason}\nResponsible moderator: ${message.author.tag} (${message.author.id})\`\`\``)
        .setFooter('Distinguishing between a mute/unmute isn\'t currently supported');
        
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I have __insufficient permissions__ to carry this out.').catch(console.error);
    
    if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).send({embed}).catch(console.error);
        });        
    } else {
    message.guild.member(user).addRole(muteRole).then(()=>{
            client.channels.get(modlog.id).send({embed}).catch(console.error);
        });
    }

    user.send(`🔇 You were **muted** in ${message.guild.name} for the reason "${reason}". This means that you will not be able to send messages or speak in any text or voice channels respectively.`)
    message.channel.send(`You successfully muted/unmuted \`${user.tag}\` \`(${user.id})\`. A mute summary was sent to the modlog channel. :ok_hand:`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'mute',
    description: 'Mutes/unmutes the mentioned user.',
    usage: 'mute [user] [reason]'
};
