const Discord = require("discord.js");
var fs = require("fs");
const { join } = require("path");
const config = require("./config.json");
const client = new Discord.Client();
const bot = new Discord.Client();
const { MessageEmbed } = require("discord.js")
client.commands = new Discord.Collection();
require("./functions.js")(client);

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        return console.log("[--:--]: Status [ERROR 404]: File Not Found. Folder 'commands' is empty.");
    }

    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props)
    })    

    console.log(`Ładowanie ${jsfile.length} komend. Prosze czekac...`);
        
    jsfile.forEach((f, i) => {
        require("./commands/" + f);
    });

});
  client.on("ready", () => {
      client.user.setActivity("Więcej projektów na github - hmlss404", {
        type: "STREAMING",
        url: "https://www.twitch.tv/"
        });

client.on("message", async message => {
    
    if(message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client, message, args);  
    if (!commandfile) {
        return message.channel.send({embed: {
            fields: [
                {
                    name: "**hmlss404**",
                    value: "**" + message.author.username + "**" + " Komenda nie została znaleziona :scream:"
                }
            ],
            }
        })
    }
});
})
client.login(config.token);

require("./events/message.js")(client);

module.exports = {
    client: client
  }