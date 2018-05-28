// DEPENDENCIES
// ============================
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const PATH = require("path");

// EXPRESS CONFIGURATION
// ============================

// Create an "express" server
const APP = EXPRESS();
const PORT = process.env.PORT || 8000;

// Middleware to handle data parsing
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());
APP.use(EXPRESS.static(PATH.join(__dirname, "./app/public")));

// ROUTER
// ============================
// Point server to a series of "route" files
require("./app/routing/apiRoutes")(APP);
require("./app/routing/htmlRoutes")(APP);

// LISTENER
// ============================
APP.listen(PORT, function(){
    console.log("LISTENING ON PORT: " + PORT);
});