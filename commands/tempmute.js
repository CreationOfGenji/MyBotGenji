const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!tempmute @user 1s/m/h/d

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't Find User.");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Can't Mute Them! Sorry!");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command!");
    let muterole = message.guild.roles.find("name", "Genji-Mute");
    //start of create role
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permission:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CHANGE_NICKNAME: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time!");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${(mutetime)}, Hope it was for a good reason!`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted! MADA MADA`)  
    }, (mutetime));


}

module.exports.help = {
    name: "mute"
}
