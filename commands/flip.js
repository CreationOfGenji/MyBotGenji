const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["Heads", "Tails",];

let result = (Math.random(1,2)* replies.length)
let question = args.slice(0).join(" ");

let flipembed = new Discord.RichEmbed()
.setColor("#1b0ece")
.setAuthor(message.author.tag)
.addField("The coin landed on", replies[result])

message.channel.send(flipembed);


}

    module.exports.help = {
        name: "flip"
      }
