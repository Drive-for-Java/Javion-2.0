const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pat")
    .setDescription("Pat someone 😊")
    .addUserOption(o =>
      o.setName("user").setDescription("User to pat").setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    interaction.reply(`😊 ${interaction.user} pats ${user}!`);
  }
};