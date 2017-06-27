exports.run = function(client, message, args) {
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
        limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: "purge",
    description: "Bulk-deletes X amount of messages. Minimum = 2 messages.",
    usage: "purge <number>"
};