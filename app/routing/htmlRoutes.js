// dependants
var path = require("path");

// export data
module.exports = function(app) {

	// homepage
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/index.html"));
	});

	// survey page
	app.get('/survey.html', function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
}