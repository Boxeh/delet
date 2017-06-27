module.exports = (message) => {
    guild.channels.get('317703104248414209').send(`Message in channel "#${message.channel} deleted. \nMessage content: ${message.cleanContent}`);
};