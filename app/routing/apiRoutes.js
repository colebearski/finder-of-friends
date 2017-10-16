// dependants
var path = require("path");

// import list of friends
var friends = require("../data/friends.js");

// routing
module.exports = function (app) {

	// api get request
	// code when a user visits the page
	app.get("/api/friends", function (req, res) {
		res.json(friends);
	});

	// new friend
	app.post("/api/friends", function (req, res) {

		// capture user input from index.html js 
		var userInput = req.body;

		var userResponses = userInput.scores;

		// did we just become best friends
		var matchName = '';
		var matchImage = '';
		var totalDifference = 0; 

		// examine my cool friends
		for (var i = 0; i < friends.length; i++) {
			
			console.log('friend = ' + JSON.stringify(friends[i]));

			// compute the differnces
			var diff = 0;
			for (var k = 0; k < userResponses.length; k++) {
				diff += Math.abs(friends[i].scores[k] - userResponses[k]);
			};

			// lowest difference equals real friend
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			};
		};

		// add new friend
		friends.push(userInput);

		// send response
		res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
	});
};



// when we gathered the data from survey

