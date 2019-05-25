'use strict';

const mongoose = require('mongoose');

const podcastShow = new mongoose.Schema({
  name: String,
  link: String,
  image: String,
});

const PodcastShow = mongoose.model('PodcastShow', podcastShow);
module.exports = PodcastShow;