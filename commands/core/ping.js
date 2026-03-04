const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check bot latency"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#00ffcc")
      .setTitle("🏓 Pong!")
      .setDescription(`Latency: **${interaction.client.ws.ping}ms**`);

    interaction.reply({ embeds: [embed] });
  }
};