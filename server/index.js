var express = require('express');
var request = require('request');
var morgan = require('morgan');
var bodyParser=require('body-parser');
 
var app = express();
// var Repo =require('../database');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/repos/import', function(req, res) {
  console.log(req.body)
  

});

// app.get('/repos', function (req, res) {
// 	res.render('/');
//  // res.sendFile("/Users/rbk11/Desktop/rbk3-fullstack-review/client/dist/repos.html")
// });


var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}
 
request(options, callback);




var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

