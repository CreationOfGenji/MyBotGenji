const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(args[0] == "help"){
        message.reply("Usage: G.serverinfo");
        return;
      }
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#e21616")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Guild Owner", message.guild.owner);

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"
}
