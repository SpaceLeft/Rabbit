const Discord = require("discord.js");
const sql = require("../../utilities/database");

module.exports = async (client, member) => {
 try {
  let con = sql.query("SELECT enabled FROM logs WHERE guildId = ?;", guild.id, function (err, result, fields) {
  if(result[0].enabled == 0) { 
  return;
  } else if (result[0].enabled == 1) {
  const sqlquery = "SELECT channelid AS res FROM logs WHERE guildid = " + member.guild.id;
  sql.query(sqlquery, function (error, results, fields) {
   if (error) console.log(error);
   if (!results || results.length == 0) {
    return;
   }
   (async () => {
    const logsetup = await results[0].res;
    const log = await member.guild.channels.cache.find((c) => c.id == logsetup && c.type == "text");
    if (!member.guild) return;
    if (!member.guild.member(client.user).hasPermission("EMBED_LINKS", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "VIEW_AUDIT_LOG", "SEND_MESSAGES")) return;
    if (!log) return;
    const embed = await new Discord.MessageEmbed() // Prettier
     .setAuthor("<:boost:868122222647193650> Server Un-boosted", member.user.avatarURL())
     .setColor("RANDOM")
     .addField("User", `<@${member.user.id}>`)
     .setTimestamp()
     .setFooter(member.guild.name, member.guild.iconURL());
    log.send(embed);
   })();
});
}
});
} catch (err) {
// console.log(err);
}
};
