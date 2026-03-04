const { SlashCommandBuilder } = require("discord.js");
const { addXP } = require("../../utils/xpSystem");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("givexp")
    .setDescription("Give XP (Owner Only)")
    .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
    .addIntegerOption(o => o.setName("amount").setDescription("XP amount").setRequired(true)),

  async execute(interaction) {
    if (interaction.user.id !== process.env.OWNER_ID)
      return interaction.reply({ content: "❌ Owner only.", ephemeral: true });

    const user = interaction.options.getUser("user");
    const amount = interaction.options.getInteger("amount");

    addXP(user.id, amount);
    interaction.reply(`✅ Given ${amount} XP to ${user.tag}`);
  }
};