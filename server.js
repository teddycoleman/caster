const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { getAllEpisodes } = require('./services/podcasts');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

const schema = buildSchema(`
  type PodcastShow {
    name: String!
    link: String!
    image: String!
  }

  type PodcastEpisode {
    title: String!
    date: String!
    link: String!
    description: String!
    podcast_show: PodcastShow!
  }

  type Query {
    podcasts: [PodcastEpisode]
  }
`);

const root = {
  podcasts: function() {
    return getAllEpisodes();
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/podcasts', function (req, res) {
  res.send(200);
});

app.listen(port);
