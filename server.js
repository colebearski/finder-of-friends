// install dependancies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// fire up the express server
var app = express();
var PORT = process.env.port || 5000;

// fire up the body parser
// npm docs
// body parser makes it easy for it to interpret the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require our routes
// html for pages
// api for actions
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// require app folder 
// hold our data
app.use(express.static('app'));

// turn on the server
app.listen(process.env.PORT || PORT, function () {
	console.log("App listening on PORT " + PORT);
}) 