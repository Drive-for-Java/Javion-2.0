const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { addXP } = require("../../utils/xpSystem");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Claim daily XP"),

  async execute(interaction) {
    addXP(interaction.user.id, config.dailyXP);

    const embed = new EmbedBuilder()
      .setColor("#00ff88")
      .setTitle("🎁 Daily Reward")
      .setDescription(`You received **${config.dailyXP} XP**!`);

    interaction.reply({ embeds: [embed] });
  }
};