const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("guess")
    .setDescription("Guess a number between 1-10")
    .addIntegerOption(o =>
      o.setName("number")
        .setDescription("Your guess")
        .setRequired(true)
    ),

  async execute(interaction) {
    const guess = interaction.options.getInteger("number");
    const random = Math.floor(Math.random() * 10) + 1;

    if (guess === random) {
      interaction.reply(`🎉 Correct! The number was ${random}`);
    } else {
      interaction.reply(`❌ Wrong! The number was ${random}`);
    }
  }
};