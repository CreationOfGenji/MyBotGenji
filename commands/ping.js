const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  PingEmbed = new Discord.RichEmbed()
  .setTitle("Pong!")
  .setColor("#c3bacc")
  .addField("Took:", bot.pings[0] + "ms");

  message.channel.send(PingEmbed)

}

module.exports.help ={
  name: "ping"
}
