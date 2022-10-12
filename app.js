const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./token.js");

client.on('ready', () => {
    console.log('logged in as ${client.user.tag}!');
});

client.login(token);