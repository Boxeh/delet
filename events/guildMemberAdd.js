module.exports = member => {
    let guild = member.guild;
    guild.channels.get('287258971075772416').send(`Welcome to the ${guild.name} server, ${member.user.username}! Have a nice stay.`);
};