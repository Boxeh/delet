    exports.run = (client, message) => {
        client.channels.get('287258971075772416').send('Hey there! \nThis message was sent from another channel.');
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: "send",   
    description: "Sends a test message to #general.",
    usage: "send"
};