const { Player } = require("discord-player");
const { Client, Intents } = require("discord.js");
const express = require("express");

const app = express();

const port = process.env.port || 4000;

global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
  disableMentions: "everyone",
});

client.config = require("./config");

global.player = new Player(client, client.config.opt.discordPlayer);

require("./src/loader");
require("./src/events");

client.login(client.config.app.token);

app.listen(port, () => {
  console.log(`started listening to port ${port}`);
});
