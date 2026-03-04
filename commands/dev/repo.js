const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("repo")
    .setDescription("Submit a project")
    .addStringOption(o => o.setName("name").setDescription("Project Name").setRequired(true))
    .addStringOption(o => o.setName("description").setDescription("Project Description").setRequired(true))
    .addStringOption(o => o.setName("link").setDescription("GitHub/GitLab Link").setRequired(true)),

  async execute(interaction) {
    const name = interaction.options.getString("name");
    const description = interaction.options.getString("description");
    const link = interaction.options.getString("link");

    const forum = interaction.guild.channels.cache.get(process.env.FORUM_CHANNEL_ID);

    await forum.threads.create({
      name: `🚀 ${name}`,
      message: {
        embeds: [
          new EmbedBuilder()
            .setColor("#00ccff")
            .setTitle(name)
            .addFields(
              { name: "📜 Description", value: description },
              { name: "🔗 Link", value: link }
            )
            .setFooter({ text: `Submitted by ${interaction.user.tag}` })
        ]
      }
    });

    // Log
    const logChannel = interaction.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
    if (logChannel) {
      logChannel.send(`📌 New Repo Submitted by ${interaction.user.tag}`);
    }

    interaction.reply({ content: "✅ Project submitted!", ephemeral: true });
  }
};