const {Client, GatewayIntentBits} = require("discord.js")

require('dotenv').config();
const token = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
})

client.on("ready", () =>{
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    console.log(`message is created -> ${message}`);
    if(message.content=="ping"){
        message.reply("pong")
    }
})

client.login(token)