import React, { Component } from "react";
import PodcastEntry from "../presentational/PodcastEntry";

const podcastsByDate = require('../../../podcasts.json');

function DisplayList(props) {
  const podcastsForAllDatesArray = props.podcastsByDate;
  const listItems = podcastsForAllDatesArray.map((podcastsByDate) => {
    const date = podcastsByDate.date;
    const podcasts = podcastsByDate.podcasts;
    return (
      <div>
        <h1>{date}</h1>
        <DisplayAllPodcastsForOneDate podcasts={podcasts}/>
      </div>
    );
  })
  return (
    <div>
      {listItems}
    </div>
  );
};

function DisplayAllPodcastsForOneDate(props) {
  const podcasts = props.podcasts;
  const listItems = podcasts.map((podcastData) =>
    <div>
      <PodcastEntry 
        key={podcastData.id.toString()}
        title={podcastData.title}
        description={podcastData.description} 
        link={podcastData.link}/>
    </div>
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
        <DisplayList podcastsByDate={podcastsByDate}/>
      </div>
    );
  }
}
export default PodcastsList;
