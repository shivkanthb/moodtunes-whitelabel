var express = require('express');
var cons = require('consolidate');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var fs = require('fs');

app.use(express.static(__dirname));

app.engine('html', cons.swig);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


// var experience = [
// 	{"company":"university of arizona","role":"teaching assistant","desc":"TA for CSc425 computer networks"},
// 	{"company":"Recruiting ventures","role":"Software engineering Intern","desc":"Worked with the backend team"}
// 	];

app.get('/', function(req,res){
	 		res.render('index');
});

app.listen(port);
console.log("Server running on port"+port);



