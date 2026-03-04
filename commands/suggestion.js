const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("suggestion")
    .setDescription("Submit a server suggestion 💡")
    .addStringOption(option =>
      option
        .setName("message")
        .setDescription("Your suggestion")
        .setRequired(true)
    ),

  async execute(interaction) {

    const suggestionText = interaction.options.getString("message");
    const suggestionChannelId = "1475107874144518217";

    const suggestionChannel = interaction.guild.channels.cache.get(suggestionChannelId);

    if (!suggestionChannel) {
      return interaction.reply({
        content: "❌ Suggestion channel not found.",
        ephemeral: true
      });
    }

    const embed = new EmbedBuilder()
      .setColor("#00b0f4")
      .setTitle("💡 New Suggestion")
      .setDescription(suggestionText)
      .addFields(
        { name: "👤 Suggested By", value: `${interaction.user}`, inline: true }
      )
      .setTimestamp();

    const message = await suggestionChannel.send({ embeds: [embed] });

    // Add reactions
    await message.react("👍");
    await message.react("👎");
    await message.react("🤷");

    await interaction.reply({
      content: "✅ Your suggestion has been submitted!",
      ephemeral: true
    });
  }
};