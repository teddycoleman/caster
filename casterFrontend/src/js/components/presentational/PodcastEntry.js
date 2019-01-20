import React from "react";

const playerIframe = {
    width: '100%',
    height: '130px',
    borderRadius: '3px',
    boxShadow: '0 0 25px 0',
};

const PodcastEntry = ({ title, description, link }) => (
  <div>
    <h2> {title} </h2>
    <p> {description} </p>
    <iframe scrolling="no" frameBorder="no" style={playerIframe} src={link}></iframe>
  </div>
);
export default PodcastEntry;
