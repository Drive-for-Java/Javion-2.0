const { addXP, getXP } = require("../utils/xpSystem");
const { getLevel } = require("../utils/levelUtils");
const { EmbedBuilder } = require("discord.js");

const messageCounter = new Map();

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot) return;

    const count = messageCounter.get(message.author.id) || 0;
    messageCounter.set(message.author.id, count + 1);

    if (messageCounter.get(message.author.id) >= parseInt(process.env.XP_PER_MESSAGES)) {

      const oldXP = getXP(message.author.id);
      addXP(message.author.id);
      const newXP = getXP(message.author.id);

      const oldLevel = getLevel(oldXP);
      const newLevel = getLevel(newXP);

      messageCounter.set(message.author.id, 0);

      // Level Up
      if (newLevel > oldLevel) {
        const channel = message.guild.channels.cache.get(process.env.ACHIEVEMENT_CHANNEL_ID);
        if (channel) {
          const embed = new EmbedBuilder()
            .setColor("#00ff88")
            .setTitle("🎉 LEVEL UP!")
            .setDescription(`${message.author} reached **Level ${newLevel}**!`)
            .setTimestamp();
          channel.send({ embeds: [embed] });
        }
      }

      // Logging
      const logChannel = message.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
      if (logChannel) {
        logChannel.send(`📈 XP Granted to ${message.author.tag}`);
      }
    }
  }
};