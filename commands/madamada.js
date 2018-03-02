const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let madamaEmbed = new Discord.RichEmbed()
    .setDescription("MadaMada")
    .setColor("##72c920")
    .addField("Mada Mada I am genji!")
    .addField("You are worthy",)
    .addField("And I Am Genji.")

    return;
}

module.exports.help = {
    name: "madamada"
}