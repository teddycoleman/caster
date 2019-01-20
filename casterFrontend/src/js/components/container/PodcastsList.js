import React, { Component } from "react";
import PodcastEntry from "../presentational/PodcastEntry";

const podcasts = [{
    id: 1,
    title: 'First One!',
    description: 'This is a podcast',
    link: 'www.test.com',
  }, {
    id: 2,
    title: 'Second One!',
    description: 'This is another podcast',
    link: 'www.test2.com',
  }, {
    id: 3,
    title: 'Third One!',
    description: 'This is a third podcast',
    link: 'www.test3.com',
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
