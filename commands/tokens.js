exports.run = (client, message, author) => {
    const hive = require('hive-api');

let player = new hive.Player(`${message.author.username}`);

player.info().then(info => {
    message.channel.send(`Tokens: ${info.tokens}`)
});

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "tokens",
    description: "Returns your amount of tokens on the HiveMC Network. Your Discord username must match your IGN for this to work.",
    usage: "tokens"
};
