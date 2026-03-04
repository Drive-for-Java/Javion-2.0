const { SlashCommandBuilder } = require("discord.js");
const trivia = require("../../utils/triviaData");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("trivia")
    .setDescription("Answer a trivia question 🧠"),

  async execute(interaction) {
    const question = trivia[Math.floor(Math.random() * trivia.length)];

    let optionsText = "";
    question.options.forEach((opt, i) => {
      optionsText += `\n${i + 1}. ${opt}`;
    });

    await interaction.reply(`🧠 **${question.question}**${optionsText}`);

    const filter = m => m.author.id === interaction.user.id;
    const collector = interaction.channel.createMessageCollector({ filter, time: 15000, max: 1 });

    collector.on("collect", m => {
      const answer = parseInt(m.content) - 1;

      if (answer === question.answer) {
        m.reply("✅ Correct answer!");
      } else {
        m.reply(`❌ Wrong! Correct answer: ${question.options[question.answer]}`);
      }
    });
  }
};