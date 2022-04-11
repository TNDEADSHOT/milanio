module.exports = {
  name: "shardError",

  async execute(client, error, id) {
    client.logger(`Shard #${id} Errored`.brightRed);
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