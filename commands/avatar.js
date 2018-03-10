const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
        if(args[0] == "help"){
        message.reply("Usage: G.avatar");
        return;
      }
    AvatarEmbed = new Discord.RichEmbed()
    .setTitle("Avatar")
    .setColor("#f9f500")
    .setImage(message.author.avatarURL)
    .addField("Avatar URL:", message.author.avatarURL);

    message.channel.send(AvatarEmbed)

}

module.exports.help = {
  name: "avatar"
}
