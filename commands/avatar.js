exports.run = (client, message) => {
    message.reply(message.author.avatarURL);
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avy"],
    permLevel: 0
};

exports.help = {
    name: "avatar",   
    description: "Sends your avatar's URL.",
    usage: "avatar"
};