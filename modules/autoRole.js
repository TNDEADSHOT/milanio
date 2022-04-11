const roleData = require(`${process.cwd()}/structures/models/autorole`)

module.exports = async (client) => {
    const description = {
        name: "AutoRole",
    }
    client.logger(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildMemberAdd", async (member) => {
        if (!member.guild) return;
        try {
            const data = await roleData.findOne({
                GuildID: member.guild.id,
            }).catch(err => console.log(err));

            if (data) {
                let role = data.Role;
                let arole = member.guild.roles.cache.get(role);

                if (role) {

                    if (arole) {
                        member.roles.add(arole).catch(err => console.log(err));
                    } else {
                        return;
                    }

                } else {
                    return;
                }

            } else {
                return;
            }
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