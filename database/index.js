var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
	repoId: Number,
	repoName: String,
	userName: String
});

var Repo = mongoose.model('Repo', repoSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');

module.exports = Repo;