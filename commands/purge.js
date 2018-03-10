const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
      if(args[0] == "help"){
        message.reply("Usage: G.purge <ammount>");
        return;
      }
  message.delete().catch();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "purge"
}
