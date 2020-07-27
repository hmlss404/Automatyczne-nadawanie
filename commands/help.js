const Discord = require("discord.js");

module.exports.run = async (_client, message, args) => {
const helpEmbed = new Discord.MessageEmbed()
.setTitle("Komendy")
.addField("Nadawanie automatyczne", "$wings <nick> <id>\n$item <nick> <id>\n$hat <nick> <id>\n$tail <nick> <id>")
message.channel.send(helpEmbed)
}
module.exports.help = {
    name: "help",
}