const autonickData = require(`${process.cwd()}/structures/models/autonick`)

module.exports = async (client) => {
    const description = {
        name: "AutoNick",
    }
    client.logger(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildMemberAdd", async (member) => {
        if(!member.guild) return;
        try {
            autonickData.findOne({
                guildId: member.guild.id,
            }, async (e, data) => {
                if (!data) return;
                member.setNickname(data.auto_nick.replace(/<username>/g, `${member.user.username}`)).catch(() => {})
            })
        } catch (e) {
            console.log(e)
        }
    });
}


/**
 * @INFO
 * Bot Coded by TN DEADSHOT | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for CoreWorks Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us CoreWorks Development, When Using This Code!
 * @INFO
 */