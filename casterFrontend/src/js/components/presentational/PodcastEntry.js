import React from "react";

const PodcastEntry = ({ title, description, link }) => (
  <div>
    <h2> {title} </h2>
    <p> {description} </p>
    <p> {link} </p>
  </div>
);
export default PodcastEntry;
