module.exports = (guild, user) => {
    guild.channels.get('317703104248414209').send(`${user.username}'s current ban has expired or was undone.`);
}; 