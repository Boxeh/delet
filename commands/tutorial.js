const settings = require('../settings.json');
exports.run = (client, message) => {
    message.channel.send('You have now entered tutorial mode. This will (hopefully) give you an understanding of what I can do. However, if you do still have any further questions, feel free to join my support server at [link].\nReply with `next` at each stage to continue the tutorial. Reply with `cancel` at any time to exit this tutorial session.\nThis tutorial session will timeout in **60 seconds**.');
    return message.channel.awaitMessages(m => m.author.id === message.author.id, {
        'errors': ['time'],
        'max': 1,
        time: 60000
    }).then(resp => {
        if (!resp) return;
        resp = resp.array()[0];
        let validAnswers = ['next', 'Next', 'cancel', 'Cancel'];
        if (validAnswers.includes(resp.content)) {
            if (resp.content === 'cancel' || resp.content === 'Cancel') {
                return message.channel.send('Tutorial cancelled.');
            } else if (resp.content === 'next' || resp.content === 'Next') {
                message.channel.send("[**Introduction**] Hey there! I'm a multipurpose bot created by Boxeh. My functions include moderation, music and fun. In the event that I was brought here without permission, you can simply get rid of me by kicking me. In a future release, a `leave` command will exist.");
                if (resp.content === 'cancel' || resp.content === 'Cancel') {
                    return message.channel.send('Tutorial ended.');
                }
                return message.channel.awaitMessages(m => m.author.id === message.author.id, {
                    'errors': ['time'],
                    'max': 1,
                    time: 60000
                }).then(resp => {
                    if (!resp) return;
                    resp = resp.array()[0];
                    if (resp.content === 'cancel' || resp.content === 'Cancel') {
                        return message.channel.send('Tutorial cancelled.')
                    } else if (resp.content === 'next' || resp.content === 'Next') {
                        message.channel.send(`[**Help**] You can access a list of all commands by running \`${settings.prefix}help\` in any channel. Running \`${settings.prefix}help [command-name]\` in any channel will send you help for the specific command you have mentioned, with added information such as the command's usage.`);
                        if (resp.content === 'cancel' || resp.content === 'Cancel') {
                            return message.channel.send('Tutorial ended.');
                        }
                        return message.channel.awaitMessages(m => m.author.id === message.author.id, {
                            'errors': ['time'],
                            'max': 1,
                            time: 60000
                        }).then(resp => {
                            if (!resp) return;
                            resp = resp.array(0)[0];
                            if (resp.content === 'cancel' || resp.content === 'Cancel') {
                                return message.channel.send('Tutorial cancelled.')
                            } else if (resp.content === 'next' || resp.content === 'Next') {
                                message.channel.send(`[**Moderation**] {moderation help stuff}`);
                            }
                        })
                    }
                })
            }
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tuto', 'teachme'],
    permLevel: 4
};

exports.help = {
    name: "tutorial",
    description: "Takes you through a tutorial.",
    usage: "tutorial"
};
