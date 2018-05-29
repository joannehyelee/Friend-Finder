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
        friendsData.push(req.body);

        var newFriendScoresArr = [];
        // Loop through new friend's scores array
        for (var i = 0; i < req.body.scores.length; i++) {
            newFriendScoresArr.push(parseInt(req.body.scores[i]));
        }
        console.log("--------------------");
        console.log(newFriendScoresArr);

        var currentFriendsArr = [];
        for (var i = 0; i < friendsData.length - 1; i++) {
            // console.log(friendsData[i].scores);
            currentFriendsArr.push(friendsData[i].scores);
        }
        console.log(currentFriendsArr);

        // for (var k = 0; k < friendsData.length - 1; k++) {
        //     for (var j = 0; j < friendsData[k].scores.length; j++) {
        //         console.log(friendsData[k].scores[j]);
        //     }
        // }

        // Compare new user's scores with existing friends' scores
        // If number do not match, subtract values
        // The friend with the smallest difference is the most compatible friend

    });

};
