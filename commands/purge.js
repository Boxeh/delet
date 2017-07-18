const settings = require('../settings.json');
exports.run = function(client, message, args) {
    let modRole = message.guild.roles.find('name', 'delet Mod');
    let messagecount = parseInt(args.join(' '));
    if (!message.member.roles.has(modRole.id)) {
        return message.reply('you have insufficient permissions to use this command.').catch(console.error);
    }
    message.channel.fetchMessages({
        limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));

    message.channel.send('Messages purged.')
        .then(msg => {
            msg.delete()
        });

        if (message.content.startsWith(settings.prefix + 'purge')) message.delete()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "purge",
    description: "Bulk-deletes X amount of messages. Minimum = 2 messages.",
    usage: "purge <number>"
};
