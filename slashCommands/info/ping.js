const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  CommandInteraction,
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "ping",
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
  category: "info",
  cooldown: 5,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  async execute(client, interaction, args, ee) {
    try {
      interaction.reply({
        embeds: [new MessageEmbed()
          // .setColor(ee.color)
          .setDescription(`š¤ **Bot Ping:** \`${Date.now() - interaction.createdTimestamp}ms\`\n\nā **Api Latency:** \`${Math.round(client.ws.ping)}ms\``, true)
        ]
      })
    } catch (err) {
      console.log(err)
    }
  }
}

/**
 * @INFO
 * Bot Coded by TN DEADSHOT | dsc.gg/core-works-development
 * @INFO
 * Work for CoreWorks Development | dsc.gg/core-works-development
 * @INFO
 * Please Mention Us CoreWorks Development, When Using This Code!
 * @INFO
 */