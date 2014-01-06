// Module dependencies.
var express = require('express');

var app = express.createServer();


// Configuration
app.configure( function() {

});

app.get('/', function(req, res) {
	res.send('Hello World');
})

app.listen(30000);

