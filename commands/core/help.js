const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show all commands"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#9b59ff")
      .setTitle("📜 Javion Commands")
      .setDescription(`
🎮 **Fun**: coinflip, roll, guess, eightball, trivia, hug, pat, slap  
📈 **XP**: rank, leaderboard, profile, daily  
👑 **Owner**: givexp, removexp  
🚀 **Dev**: repo, projectlist
      `);

    interaction.reply({ embeds: [embed] });
  }
};