const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Show top XP users"),

  async execute(interaction) {

    const data = JSON.parse(fs.readFileSync("./data/xp.json"));

    const sorted = Object.entries(data)
      .sort((a, b) => b[1].xp - a[1].xp)
      .slice(0, 10);

    const list = await Promise.all(
      sorted.map(async (u, i) => {
        try {
          const member = await interaction.guild.members.fetch(u[0]);
          return `${i + 1}. @${member.displayName} - ${u[1].xp} XP`;
        } catch {
          return `${i + 1}. Unknown User - ${u[1].xp} XP`;
        }
      })
    );

    const embed = new EmbedBuilder()
      .setColor("#ffcc00")
      .setTitle("🏆 Leaderboard")
      .setDescription(list.join("\n"));

    interaction.reply({ embeds: [embed] });
  }
};