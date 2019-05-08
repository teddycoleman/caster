import React, { Component } from "react";
import PodcastDate from "../presentational/PodcastDate";
import style from '../../../css/main.css';

const podcastsByDate = require('../../../podcasts.json');

function DisplayList(props) {
  const podcastsForAllDatesArray = props.podcastsByDate;
  const listByDate = podcastsForAllDatesArray.map((podcastsByDate, index) => {
    const date = podcastsByDate.date;
    const podcasts = podcastsByDate.podcasts;
    return (
      <div>
        <PodcastDate
          key={index}
          date={date}
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
