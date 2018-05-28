// Data that users will be able to see & post to server

// DEPENDENCIES
// ============================
var friendsData = require("../data/friends");

// // ROUTING
// // ============================
module.exports = function(APP) {

    // API GET Requests
    APP.get("/api/friends", function(req, res){
        // Return JSON data of friends
        res.json(friendsData);
    });

    // API POST Requests
    APP.post("/api/friends", function(req, res){
        // User submits form data (JSON object)
        // JSON object gets pushed to array

    });

};
