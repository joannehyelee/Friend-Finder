// DEPENDENCIES
// ============================
const PATH = require("path");

// ROUTING
// ============================
module.exports = function(APP) {

    APP.get("/survey", function(req, res){
        res.sendFile(PATH.join(__dirname, "../public/survey.html"));
    });

    APP.get("*", function(req, res){
        res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });

};