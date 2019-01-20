import React, { Component } from "react";
import PodcastEntry from "../presentational/PodcastEntry";

const podcasts = [{
    id: 1,
    title: 'Year of the Wallop - Reply All',
    description: 'This is a podcast from Reply All.',
    link: 'https://player.gimletmedia.com/8wh258',
  }, {
    id: 2,
    title: 'Gary Brown v. Mayor of Detroit - Crimetown',
    description: 'This is a podcast from Crimetown.',
    link: 'https://open.spotify.com/embed?uri=spotify%3Aepisode%3A24G2Bz2naWQyGp6tN4cmCb',
  }, {
    id: 3,
    title: 'The Mystery of the Man Who Died Twice - Science Vs',
    description: 'This is a podcast from Science Vs.',
    link: 'https://player.gimletmedia.com/brhod5',
}];

function DisplayList(props) {
  const podcasts = props.podcasts;
  const listItems = podcasts.map((podcastData) =>
    <PodcastEntry 
      key={podcastData.id.toString()}
      title={podcastData.title}
      description={podcastData.description} 
      link={podcastData.link}/>
  );
  return (
    <div>
      {listItems}
    </div>
  );
};

class PodcastsList extends Component {
  render() {
    return (
      <div>
        <h1>January 13th, 2019</h1>
        <DisplayList podcasts={podcasts}/>
      </div>
    );
  }
}
export default PodcastsList;
