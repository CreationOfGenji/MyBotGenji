const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(args[0] == "help"){
        message.reply("Usage: G.botinfo");
        return;
      }
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#4aceba")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField(name = "Created By", value = "undefined#3779");

    return message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}
