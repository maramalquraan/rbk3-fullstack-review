var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fetcher');
var Schema=mongoose.Schema;

var repoSchema = new Schema({
	repoId: Number,
	repoName: String,
	userName: String
});

var Repo = mongoose.model('Repo', repoSchema);

mongoose.connection.once('open', function(){
	console.log('Connection has been made, now make fireworks..:D')
}).on('error', function(error){
	console.error("connection error;", error);
});

// db.on('error', function(err){
//     console.error("connection error;", error);
// });

// db.once('open', function () {
//   console.log('Mongodb connection open');
// });

module.exports = Repo;