const Discord = require("discord.js");
const fs = require("fs")

    module.exports.run = async (_client, message, args) => {
        message.delete();
        if(!args[0]) return message.author.send(new Discord.MessageEmbed().setAuthor("Wystąpił Błąd").setDescription("Prawidłowe użycie: $hat <nick> <id>!"));
        if(!args[1]) return message.author.send(new Discord.MessageEmbed().setAuthor("Wystąpił Błąd").setDescription("Prawidłowe użycie: $hat <nick> <id>!"));
        const hatAutoEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ size: 1024, dynamic: true }))
        .setDescription(`Pomyślnie nadałeś sobie czapke o id ${args[1]}`)
        .setThumbnail(message.guild.iconURL({ size: 1024, dynamic: true }))
        fs.appendFileSync('tutaj dajcie przekierowanie do pliku gdzie mają się zapisywać osoby', args[1]+':'+args[2]+ "\n")
        fs.appendFileSync('userinfo/hat_' + args[0], args[1])
    message.author.send(hatAutoEmbed);
        }
module.exports.help = {
    name: "hat",
}