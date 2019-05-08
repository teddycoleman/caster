import React, { Component } from "react";
import PodcastEntry from "../presentational/PodcastEntry";
import style from '../../../css/main.css';

const podcastsByDate = require('../../../podcasts.json');

function DisplayList(props) {
  const podcastsForAllDatesArray = props.podcastsByDate;
  const listByDate = podcastsForAllDatesArray.map((podcastsByDate, index) => {
    const date = podcastsByDate.date;
    const podcasts = podcastsByDate.podcasts;
    return (
      <div>
        <h1>{date}</h1>
        <DisplayAllPodcastsForOneDate
          key={index}
          podcasts={podcasts}/>
      </div>
    );
  })
  return (
    <div>
      {listByDate}
    </div>
  );
};

function DisplayAllPodcastsForOneDate(props) {
  const podcasts = props.podcasts;
  const podcastsForDate = podcasts.map((podcastData, index) =>
    <div>
      <PodcastEntry 
        key={index}
        title={podcastData.title}
        parent={podcastData.parent}
        parentLink={podcastData.parentLink}
        parentImage={podcastData.parentImage}
        description={podcastData.description} 
        link={podcastData.link}
        url={podcastData.url} />
    </div>
  );

  return (
    <div>
      {podcastsForDate}
    </div>
  );
};

class PodcastsList extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <DisplayList
          podcastsByDate={podcastsByDate}/>
      </div>
    );
  }
}
export default PodcastsList;
