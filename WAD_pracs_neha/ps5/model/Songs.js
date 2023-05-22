const mongoose  = require('mongoose')

const songSchema = mongoose.Schema({
    songname: String,
    film: String,
    music_director: String,
    singer: String,
    actor: String,
    actress: String,
});

const Songs = mongoose.model('Songs',songSchema);
module.exports = Songs;