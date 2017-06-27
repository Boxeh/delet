exports.run = (client, message, msg) => {
    message.channel.send(`Discord is connected to your real-time communication server on eu-west440 with an average ping of ${msg.createdTimestamp - message.createdTimestamp}ms. The last ping was ${msg.createdTimestamp - message.createdTimestamp}ms. If the ping is not consistent or more than 250ms, consider asking the server owner to switch to another region.`)
        .then(msg => {
            msg.edit(`Discord is connected to your real-time communication server on eu-west440 with an average ping of ${msg.createdTimestamp - message.createdTimestamp}ms. The last ping was ${msg.createdTimestamp - message.createdTimestamp}ms. If the ping is not consistent or more than 250ms, consider asking the server owner to switch to another region.`)
                .then(msg => {
                    msg.edit(`Discord is connected to your real-time communication server on eu-west440 with an average ping of ${msg.createdTimestamp - message.createdTimestamp}ms. The last ping was ${msg.createdTimestamp - message.createdTimestamp}ms. If the ping is not consistent or more than 250ms, consider asking the server owner to switch to another region.`)
                        .then(msg => {
                            msg.edit(`Discord is connected to your real-time communication server on eu-west440 with an average ping of ${msg.createdTimestamp - message.createdTimestamp}ms. The last ping was ${msg.createdTimestamp - message.createdTimestamp}ms. If the ping is not consistent or more than 250ms, consider asking the server owner to switch to another region.`)
                                .then(msg => {
                                    msg.edit(`Pong! \nMy ping is: ${msg.createdTimestamp - message.createdTimestamp}ms`);
                                });
                        });
                });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "ping",
    description: "Checks the bot's ping to the server. DOESN'T check your ping.",
    usage: "ping"
};