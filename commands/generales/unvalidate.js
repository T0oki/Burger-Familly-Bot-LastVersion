const Fonctions = require("../../fonctions.js");                      // Load Fonctions
const chalk = require('chalk');                                     // require chalk

module.exports.help = {
    name : "UNVALIDATE",
    description : "dé-valide le joueur",
    example : "/unvalidate <@user>",
    alias : [
        "DEVALIDER",
        "UNVALIDE",
        "DELVALIDE"
    ],
    display : true
};

module.exports.run = async (client, message, args) => {

    // Permission Check
    if(!Fonctions.hasRole(message.member, [
        "developer",
        "directeur",
        "responsable",
        "admin",
        "modo",
        "modo-test"
    ])) return message.reply("Vous n'avez pas la permission");

    //Commande functions
    if (args[0] === '') args.shift();
    if (args[0]) {
        const user = Fonctions.getUserFromMention(client, args[0]);
        if (!user) return message.reply('Veuillez mentionner une personne');

        let role = Fonctions.getRole(message, Fonctions.DevOrNot(["roles","validate"]));
        user.removeRole(role).catch(console.error);
        message.delete();
        console.log(`${chalk.blue(message.author.tag)} UnApproved ${chalk.red(user.user.tag)}`);
        return message.channel.send(`${user}, Tu n'es plus validé ! :x:`);
    }

    return message.reply(`
    Utilisation Incorrecte : 
    Utilisation : /validate <@user>`);
};