'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const podcastEpisode = new mongoose.Schema({
  title: String,
  date: Date,
  link: String,
  description: String,
  podcast_show: {
    type: Schema.Types.ObjectId,
    ref: 'PodcastShow',
  },
});

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisode);
module.exports = PodcastEpisode;