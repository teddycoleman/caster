const moment = require('moment');

const { PodcastEpisode, PodcastShow } = require('../models/index')

async function getAllEpisodes() {
  const podcasts = await PodcastEpisode.find({}).populate('podcast_show').lean().exec();
  const formattedPodcasts = podcasts.map((podcast) => {
    const formattedDate = moment(new Date(podcast.date)).format('YYYY-MM-DD');
    podcast.date = formattedDate;
    return podcast;
  });
  return formattedPodcasts;
};

module.exports = {
  getAllEpisodes
};