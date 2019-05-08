import React from "react";
import PodcastEntry from "../presentational/PodcastEntry";

const PodcastDate = ({ date, podcasts }) => {
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
      <h1>{date}</h1>
      {podcastsForDate}
    </div>
  );
};

export default PodcastDate;
