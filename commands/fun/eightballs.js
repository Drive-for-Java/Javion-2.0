const { SlashCommandBuilder } = require("discord.js");

const responses = [
  "Yes ✅",
  "No ❌",
  "Maybe 🤔",
  "Definitely 💯",
  "I don't think so 🙃",
  "Absolutely 🔥",
  "Ask again later ⏳"
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eightball")
    .setDescription("Ask the magic 8 ball 🎱")
    .addStringOption(o =>
      o.setName("question")
        .setDescription("Your question")
        .setRequired(true)
    ),

  async execute(interaction) {
    const answer = responses[Math.floor(Math.random() * responses.length)];
    interaction.reply(`🎱 **Answer:** ${answer}`);
  }
};