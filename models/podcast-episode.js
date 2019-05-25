'use strict';

const mongoose = require('mongoose');

const podcastEpisode = new mongoose.Schema({
  title: String,
  date: Date,
  link: String,
  description: String,
  podcast_show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PodcastShow',
  },
});

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisode);
module.exports = PodcastEpisode;