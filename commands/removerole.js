const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`R.I.P. ${gMember.name}, I removed a role from you. That role is ${gRole.name}. Sorry!`)
  }catch(e){
    message.channel.send(`RIP to ${gMember.name}>, I removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
}
module.exports.help = {
  name: "removerole"
}
