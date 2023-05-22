const { default: mongoose } = require("mongoose");

let songSchema = new mongoose.Schema({
    Songname: String,
    Film: String,
    Music_director: String,
    Singer: String,
    Actor: String,
    Actress: String
});

module.exports = mongoose.model("songSchema", songSchema);