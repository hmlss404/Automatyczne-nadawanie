const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (_client, message, args) => {
    let wings = fs.readFileSync(`./userinfo/wings_${args[0]}`, 'utf8');
    let item = fs.readFileSync(`./userinfo/item_${args[0]}`, 'utf8');
    let hat = fs.readFileSync(`./userinfo/hat_${args[0]}`, 'utf8');
    let tail = fs.readFileSync(`./userinfo/tail_${args[0]}`, 'utf8');
    const infoEmbed = new Discord.MessageEmbed()
    .setTitle("Informacje o użytkowniku " + args[0])
    .addField("Skrzydła: ", "`" + wings + "`", true)
    .addField("Item: ", "`" + item + "`", true)
    .addField("Czapka: ", "`" + hat + "`", true)
    .addField("Ogon: ", "`" + tail + "`", false)
    .setThumbnail(`https://minotar.net/helm/${args[0]}/100.png`)
    message.channel.send(infoEmbed)
}
module.exports.help = {
    name: "userinfo",
}