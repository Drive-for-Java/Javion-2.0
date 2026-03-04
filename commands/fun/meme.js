const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

let lastMeme = null;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Fetch a random meme from Reddit 😂"),

  async execute(interaction) {

    await interaction.deferReply();

    try {
      const response = await fetch(
        "https://www.reddit.com/r/memes/hot.json?limit=50",
        {
          headers: { "User-Agent": "JavionBot/1.0" }
        }
      );

      const data = await response.json();
      const posts = data.data.children;

      const validMemes = posts.filter(post =>
        !post.data.over_18 &&
        post.data.post_hint === "image"
      );

      if (!validMemes.length) {
        return interaction.editReply("❌ Couldn't find a meme right now.");
      }

      let randomMeme;
      do {
        randomMeme = validMemes[Math.floor(Math.random() * validMemes.length)].data.url;
      } while (randomMeme === lastMeme);

      lastMeme = randomMeme;

      const embed = new EmbedBuilder()
        .setColor("#ff4500")
        .setTitle("😂 Reddit Meme")
        .setImage(randomMeme)
        .setFooter({ text: "Source: r/memes" });

      await interaction.editReply({ embeds: [embed] });

      const logChannel = interaction.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
      if (logChannel) {
        logChannel.send(`😂 Meme fetched by ${interaction.user.tag}`);
      }

    } catch (error) {
      console.error(error);
      interaction.editReply("❌ Failed to fetch meme.");
    }
  }
};