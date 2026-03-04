const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Hug someone 🤗")
    .addUserOption(o =>
      o.setName("user").setDescription("User to hug").setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");

    if (user.id === interaction.user.id)
      return interaction.reply("🤗 You hugged yourself!");

    interaction.reply(`🤗 ${interaction.user} hugs ${user}! So wholesome 💜`);
  }
};