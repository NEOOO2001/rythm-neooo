const Discord - require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Rythm-NEOOO, !help");
    console.log("Le bot a bien été connecté");
});

bot.login("NTM5MDI3Mjc3NTE0ODAxMTgz.Dy8Zpw.uhjUwgrJE3T91j9L95a3LbQpvCU");
