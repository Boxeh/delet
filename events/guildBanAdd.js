module.exports = (guild, user) => {
    guild.channels.get('240451367012007937').send(`${user.username} was banned from the server.`);
};