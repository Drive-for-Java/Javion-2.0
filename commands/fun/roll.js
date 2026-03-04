const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll a dice"),

  async execute(interaction) {
    const num = Math.floor(Math.random() * 6) + 1;
    interaction.reply(`🎲 You rolled: **${num}**`);
  }
};