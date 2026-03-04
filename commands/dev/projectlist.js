const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("projectlist")
    .setDescription("Shows forum channel for projects"),

  async execute(interaction) {
    interaction.reply(`📂 Check projects here: <#${process.env.FORUM_CHANNEL_ID}>`);
  }
};