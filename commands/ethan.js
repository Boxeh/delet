exports.run = (client, message) => {
    message.channel.send('12²')
        .then(msg => {
            msg.edit(` = 144\n :eggplant: :sweat_drops: :heavy_plus_sign: :heavy_multiplication_x: :heavy_minus_sign: :heavy_division_sign:`)
                .then(msg => {
                    msg.edit('= 144\n*and Ethan cums*');
                });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['144'],
    permLevel: 0
};

exports.help = {
    name: "ethan",
    description: "12² = 144.",
    usage: "ethan"
};