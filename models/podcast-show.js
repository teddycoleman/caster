'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const podcastShow = new Schema({
  name: String,
  link: String,
  image: String,
});

const PodcastShow = mongoose.model('PodcastShow', podcastShow);
module.exports = PodcastShow;