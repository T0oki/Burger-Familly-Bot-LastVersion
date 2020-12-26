const Fonctions = require("../fonctions.js");                      // Load Fonctions

module.exports.help = {
    name : "COMMANDE",
    description : "CmdDoThis",
    example : "/commande",
    alias : ["INMAJ"]
};

module.exports.run = async (client, message) => {

    // Permission Check
    if(!Fonctions.hasRole(message.member, [""])) return;

    //Commande functions
    return "";
};