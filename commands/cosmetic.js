const Discord = require("discord.js");
const fs = require("fs")

    module.exports.run = async (_client, message, args) => {
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setAuthor("Wystąpił Błąd").setDescription("`$cosmetic <wings/tail/item/hat> <nick> <id>`"));
        if (args[0] === "wings") {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setAuthor("Wystąpił Błąd").setDescription("Musisz wpisać nick gracza!"));
        if(!args[2]) return message.channel.send(new Discord.MessageEmbed().setAuthor("Wystąpił Błąd").setDescription("Musisz wpisać id kosmetyku!"));
        const wingsEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        .setDescription('Nadano skrzydła na nick: **' + args[1] + '\n** o id: **' + args[2] + '**')
        .setThumbnail(message.guild.iconURL({ size: 1024, dynamic: true }))
        fs.appendFileSync('tutaj dajcie przekierowanie do pliku gdzie mają się zapisywać osoby', args[1]+':'+args[2]+ "\n")
    message.channel.send(wingsEmbed);
        }
    }
module.exports.help = {
    name: "cosmetic",

}