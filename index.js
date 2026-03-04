require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});


client.commands = new Collection();


const commandsPath = path.join(__dirname, "commands");

function loadCommands(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      loadCommands(fullPath);
    } else if (file.endsWith(".js")) {
      const command = require(fullPath);

      if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
      }
    }
  }
}

loadCommands(commandsPath);
console.log(`✅ Loaded ${client.commands.size} commands.`);


const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file =>
  file.endsWith(".js")
);

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

console.log(`✅ Loaded ${eventFiles.length} events.`);

// ===== LOGIN =====
client.login(process.env.TOKEN);
