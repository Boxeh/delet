exports.run = (client, message, args) => {
    let numArray = args.map(n => parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);

    message.channel.send(total);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "subtract",
    description: "Subtracts the specified numbers.",
    usage: "subtract [num1] [num2] [num3] {etc}"
};
