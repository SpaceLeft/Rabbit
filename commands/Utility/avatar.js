const Discord = require("discord.js");
const Extra = require("discord-buttons");

module.exports = {
 name: "avatar",
 aliases: [],
 description: "Get a user avatar",
 category: "Utility",
 usage: "avatar [user mention, user id, user name]",
 run: async (client, message, args) => {
  try {
   const User = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.member;
   const uavatar = User.user.displayAvatarURL({dynamic: true,format: "png",size: 2048});
   const button = new Extra.MessageButton()
   .setLabel("Avatar link")
   .setStyle("url")
   .setURL(uavatar);
   const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor(User.user.username + "'s Avatar", uavatar)
   .setImage(uavatar)
   .setDescription("**Click [here](" + uavatar + ") to download the picture!**")
   .setTimestamp()
   .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({dynamic: true,format: "png",size: 2048}));
   message.lineReply({ button: button, embed: embed });
  } catch (err) {
    const Anerror = new Discord.MessageEmbed()
    .setColor("#e63064")
    .setTitle("<:errorcode:868245243357712384> AN ERROR OCCURED!")
    .setDescription(`\`\`\`${err}\`\`\``)
    .setFooter("Error in code: Report this error to kotlin0427")
    .setTimestamp();
    return message.lineReply(Anerror);
  }
 },
};
