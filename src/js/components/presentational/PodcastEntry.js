import React from "react";

const PodcastEntry = ({ title, description, parent, link, url, parentLink, parentImage }) => (
  <div className="col-md-12">
    <img className="col-md-3" src={parentImage}></img>
    <h2> <a href={url} target="_blank">{title}</a> by <a href={parentLink} target="_blank">{parent}</a></h2>
    <p> {description} <a href={url} target="_blank">Check out the podcast here</a></p>
  </div>
);
export default PodcastEntry;