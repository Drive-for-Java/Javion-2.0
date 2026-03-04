const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removexp")
    .setDescription("Remove XP (Owner Only)")
    .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
    .addIntegerOption(o => o.setName("amount").setDescription("XP amount").setRequired(true)),

  async execute(interaction) {
    if (interaction.user.id !== process.env.OWNER_ID)
      return interaction.reply({ content: "❌ Owner only.", ephemeral: true });

    const user = interaction.options.getUser("user");
    const amount = interaction.options.getInteger("amount");

    const data = JSON.parse(fs.readFileSync("./data/xp.json"));
    if (!data[user.id]) return interaction.reply("No XP found.");

    data[user.id].xp -= amount;
    fs.writeFileSync("./data/xp.json", JSON.stringify(data, null, 2));

    interaction.reply(`✅ Removed ${amount} XP from ${user.tag}`);
  }
};