const config = require(`${process.cwd()}/structures/botconfig/config.json`);

module.exports = {
  name: "debug",

  async execute(client, info) {
    if (config.events.Enable_debug) {
      client.logger(String(info).grey);
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