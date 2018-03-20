const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    let sEmbed = new Discord.RichEmbed()
    .setDescription("Bot Server")
    .setColor("#2e26d3")
    .addField("Come Join Our Discord Server", "https://discord.gg/ZmtQaMV");

    return message.channel.send(sEmbed)
}

module.exports.help = {
    name: "server"
}
