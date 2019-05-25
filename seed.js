const { PodcastEpisode, PodcastShow } = require('./models/index')

const radiolabShow = new PodcastShow({
  name: 'Radiolab',
  link: 'https://www.wnycstudios.org/shows/radiolab',
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/WNYC_Radiolab_logo.svg/1200px-WNYC_Radiolab_logo.svg.png',
});

const everythingIsAliveShow = new PodcastShow({
  parent: 'Everything Is Alive',
  parentLink: 'https://www.everythingisalive.com',
  parentImage: 'https://f.prxu.org/143/images/bba41d30-5f70-45a9-9bde-392c4dc9e400/Everything_is_Alive_300pxs.jpg',
})

const roughTranslationShow = new PodcastShow({
  parent: 'Rough Translation',
  parentLink: 'https://www.npr.org/podcasts/510324/rough-translation',
  parentImage: 'https://media.npr.org/assets/img/2018/08/02/npr_roughtranslation_podcasttile1_sq-3ebceaa9b4811221618fa96a6a685e4db60673d5-s400-c85.jpg',
})

const replyAllShow = new PodcastShow({
  parent: 'Reply All',
  parentLink: 'https://gimletmedia.com/shows/reply-all',
  parentImage: 'https://res.cloudinary.com/gimlet-media/image/upload/c_scale,f_auto,q_auto:best,w_1000/ygtkaxy3swjrryinieqk',
})

const planetMoneyShow = new PodcastShow({
  parent: 'Planet Money',
  parentLink: 'https://www.npr.org/sections/money/',
  parentImage: 'https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0.jpg?s=1400',
})

const drDeathShow = new PodcastShow({
  parent: 'Dr Death',
  parentLink: 'https://wondery.com/shows/dr-death/',
  parentImage: 'https://content.production.cdn.art19.com/images/1d/53/8f/a0/1d538fa0-4053-481a-bc95-55b0df8d4b6a/4378c3832f80118109029d8e6c07f2a7a61c2e9c9555b68fa72f197a08279b499930ec1f881a4f7993ca4c373dfad88a755abadbd8008869f85c930be1036ca0.jpeg',
})

const smileMyAssEpisode = new PodcastEpisode({
  title: 'Smile My Ass',
  date: new Date('5/5/2019'),
  link: 'https://www.wnycstudios.org/story/smile-my-ass',
  description: 'Lorem ipsum',
  podcast_show: radiolabShow._id,
});

const dennisPillowEpisode = new PodcastEpisode({
  title: 'Dennis, Pillow',
  date: new Date('5/5/2019'),
  description: 'Lorem ipsum',
  link: 'https://www.everythingisalive.com/episodes/dennis-pillow',
  podcast_show: everythingIsAliveShow._id,
});

const roughTranslationEpisode = new PodcastEpisode({
  title: 'Austenistan',
  date: new Date('5/5/2019'),
  description: 'Lorem ipsum',
  link: 'https://www.npr.org/2018/07/10/627779858/austenistan',
  podcast_show: roughTranslationShow._id,
});

const replyAllEpisode = new PodcastEpisode({
  title: 'Adam Pisces and the $2 Coke',
  date: new Date('4/28/2019'),
  description: "Check out this awesome new podcast by Reply All. In the podcast, Damiano and the team investigate mysterious orders that won't stop flooding Domino's Pizza stores all over the country.",
  link: 'https://gimletmedia.com/shows/reply-all/z3hgd2/141-adam-pisces-and-the-2-coke',
  podcast_show: replyAllShow._id,
});

const planetMoneyEpisode = new PodcastEpisode({
  title: 'Dollar Stores Vs Lettuce',
  date: new Date('4/28/2019'),
  description: 'The newest entry from Planet Money is a fascinating struggle of a local politicians battle to restrict large dollar store chains and bring back healthy grocery stores to her local district.',
  link: 'https://www.npr.org/sections/money/2019/04/26/717665452/episode-909-dollar-stores-vs-lettuce',
  podcast_show: planetMoneyShow._id,
});

const drDeathEpisode = new PodcastEpisode({
  title: 'Three Days in Dallas',
  date: new Date('4/28/2019'),
  description: "Checkout the story of neurosurgeon Dr. Christopher Duntsch, aka Dr Death, who left many of his patients paralyzed or dead. Yet, the medical system failed to take away his license for far too long. Once you listen to the first episode, you won't be able to stop.",
  link: 'https://wondery.com/shows/dr-death/',
  podcast_show: drDeathShow._id,
});


const saveModel = (Model) => {
  return Model.save();
};

async function saveModels() {
  await Promise.all([
    saveModel(radiolabShow),
    saveModel(everythingIsAliveShow),
    saveModel(roughTranslationShow),
    saveModel(replyAllShow),
    saveModel(planetMoneyShow),
    saveModel(drDeathShow),
    saveModel(smileMyAssEpisode),
    saveModel(dennisPillowEpisode),
    saveModel(roughTranslationEpisode),
    saveModel(replyAllEpisode),
    saveModel(planetMoneyEpisode),
    saveModel(drDeathEpisode),
  ])
};

saveModels().then(
  console.log('all saved!')
);
