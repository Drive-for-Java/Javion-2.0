const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getXP } = require("../../utils/xpSystem");
const { getLevel } = require("../../utils/levelUtils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Check your level"),

  async execute(interaction) {
    const xp = getXP(interaction.user.id);
    const level = getLevel(xp);

    const embed = new EmbedBuilder()
      .setColor("#ffaa00")
      .setTitle(`🏅 ${interaction.user.username}'s Rank`)
      .setDescription(`Level: **${level}**\nXP: **${xp}**`);

    interaction.reply({ embeds: [embed] });
  }
};