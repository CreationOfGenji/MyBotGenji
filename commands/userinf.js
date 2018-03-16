const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!uUser) return message.channel.send("Coulden't Find User.");

    let userEmbed = new Discord.RichEmbed()
    .setDescription("Userinfo")
    .setColor("#2e26d3")
    .addField("Username:", `${uUser}`)
    .addField("User ID:", `${uUser.id}`);

    message.channel.send(userEmbed)

}

module.exports.help = {
    name: "userinfo"
}