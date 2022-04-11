module.exports = {
  name: "err",

  async execute(client, error) {
    client.logger(String(error).red.dim);
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