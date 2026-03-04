const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`🔥 Logged in as ${client.user.tag}`);

    client.user.setPresence({
      status: "online",
      activities: [{
        name: "Javion Fun System 🎉",
        type: ActivityType.Streaming,
        url: "https://twitch.tv/discord"
      }]
    });
  }
};