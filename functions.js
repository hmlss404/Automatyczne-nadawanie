var fs = require("fs");

module.exports = () => {
    fs.readdir("./events/", (err, files) => {
        if(err) return console.log("Wystąpił błąd w handlerach!");
    
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("Katalog 'events' jest pusty!");

        console.log(`Ładowanie ${jsfiles.length} eventów. Prosze czekac...`);
        
        jsfiles.forEach((f, i) => {
            require("./events/" + f);
        });

        console.log("Łączenie z api...");
        console.log("Połączono!")
    });
}