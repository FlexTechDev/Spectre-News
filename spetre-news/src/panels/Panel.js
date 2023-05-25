// Panel.js

import React from "react";
import "./Panel.css";

const Panel = ({ imageUrl, title, content, url }) => {
  return (
    <div className="panel">
      {imageUrl && (
        <img className="panel-image" src={imageUrl} alt={title} />
      )}
      <h2>{title}</h2>
      <p>{content}</p>
      <a className="read-more-button" href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Panel;