const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.content.startsWith(botconfig.prefix + madamada))
        message.channel.send("Mada Mada!");

}
