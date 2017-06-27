module.exports = (channel, time, client, guild) => {
    guild.channels.get('228988123567226880').send(`The pinned messages for the channel "${channel.name}" were updated.`);
};
