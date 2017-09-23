var express = require('express');

var app = express();
var db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
});

app.get('/repos/import', function(req, res){
	res.sendFile(__dirname + '/import.html');
});

app.get('/repos', 
function (req, res) {
res.sendFile(__dirname + '/repos.html');
});


var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

