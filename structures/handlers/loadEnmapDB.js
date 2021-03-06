const Enmap = require("enmap");

module.exports = async (client) => {

    client.settings = new Enmap({
        name: "settings",
        dataDir: "./databases/settings"
    });
    client.embedSettings = new Enmap({
        name: "embedDatabasing",
        dataDir: "./databases/embedDatabasing"
    });
    client.captcha = new Enmap({
        name: "captcha",
        dataDir: "./databases/captcha"
    });
    client.giveaways = new Enmap({
        name: "giveaways",
        dataDir: "./databases/giveaways"
    });

    client.logger(`Loaded EnmapDB`.brightGreen);
}

/**
 * @INFO
 * Bot Coded by TN DEADSHOT | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for CoreWorks Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 */