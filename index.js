require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
var cislo = 0
var hrac
var probiha = false
client.on('message', msg => {
    if (!probiha && msg.content === 'hra') {
        cislo = Math.floor(Math.random() * 5) + 1;
        msg.reply("myslim si cislo mezi 1 az 5")
        hrac = msg.author.id
        probiha = true
    }
    else if (isNaN(parseInt(msg.content)) && !msg.author.bot && probiha) {
        msg.reply("toto neni cislo, ty kryple")
        probiha = false
    }
    else if (msg.content == cislo.toString() && !msg.author.bot && probiha) {
        msg.reply("vyhrals")
        probiha = false
    }
    else if (msg.content != cislo.toString() && !msg.author.bot && probiha) {
        msg.reply("prohrals zmrdecku")
        probiha = false
    }

});

client.login(process.env.TOKEN);