// This file helps direct users. Whenever user clicks a link, the router will understand which pages to deliver.

// DEPENDENCIES
// ============================
const PATH = require("path");

// ROUTING
// ============================
module.exports = function(APP) {

    // When user goes to http://localhost:8000/survey, send this survey HTML file
    APP.get("/survey", function(req, res){
        res.sendFile(PATH.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found, default to home HTML file
    APP.get("/", function(req, res){
        res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });

};