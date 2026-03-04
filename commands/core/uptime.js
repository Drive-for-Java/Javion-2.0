const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Check bot uptime"),

  async execute(interaction) {
    const uptime = process.uptime();
    interaction.reply(`⏳ Uptime: ${Math.floor(uptime / 60)} minutes`);
  }
};