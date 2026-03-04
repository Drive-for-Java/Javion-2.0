const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getXP } = require("../../utils/xpSystem");
const { getLevel } = require("../../utils/levelUtils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("View your XP profile")
    .addUserOption(o =>
      o.setName("user")
        .setDescription("User to view")
        .setRequired(false)
    ),

  async execute(interaction) {
    const target = interaction.options.getUser("user") || interaction.user;

    const xp = getXP(target.id);
    const level = getLevel(xp);

    const embed = new EmbedBuilder()
      .setColor("#3498db")
      .setTitle(`📊 ${target.username}'s Profile`)
      .setThumbnail(target.displayAvatarURL())
      .addFields(
        { name: "🏅 Level", value: `${level}`, inline: true },
        { name: "⭐ XP", value: `${xp}`, inline: true }
      )
      .setFooter({ text: "Javion XP System" });

    interaction.reply({ embeds: [embed] });
  }
};