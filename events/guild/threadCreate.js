module.exports = {
  name: "threadCreate",

  async execute(client, thread) {
    try {
      if (thread.joinable && !thread.joined) {
        await thread.join();
      }
    } catch (e) {
      console.log(String(e).grey)
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