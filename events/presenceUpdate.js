module.exports = (guild, user) => {
    client.on("presenceUpdate", (oMember, nMember) => {
        let guild = nMember.guild;
        let playRole = guild.roles.find("name", "Playing Minecraft");
        if(!playRole) return;

        if(nMember.user.presence.game && nMember.user.presence.game.name === "Minecraft") {
            nMember.addRole(playRole);
        } else if(!nMember.user.presence.game && nMember.roles.has(playRole.id)) {
            nMember.removeRole(playRole);
        }
    });
}