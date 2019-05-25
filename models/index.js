const mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost/caster");

module.exports.PodcastEpisode = require("./podcast-episode");
module.exports.PodcastShow = require("./podcast-show");