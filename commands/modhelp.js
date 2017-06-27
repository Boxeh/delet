    exports.run = (client, message) => {
        client.channels.get('321956112947478528').send('Here\'s a list of **delet** commands you have access to due to your **Clan Moderator** (or above) rank:\n\n- `%purge [number of messages]`\n- `%lockdown [time; e.g. 1, 2, 3, 4 etc.] [type; e.g. h, m, s]`\n- `%mute [user] [reason]` *(this command is also used to unmute users)*\n- `%ban [user] [reason]`\n- `%warn [user] [reason]`\n- `%kick [user] [reason]`\n\n*For `[user]`, you must mention the user, e.g. %warn <@314444116677099541> [reason]*');
    };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: "modhelp",   
    description: "Sends a list of mod-only commands to an assigned staff channel.",
    usage: "modhelp"
};