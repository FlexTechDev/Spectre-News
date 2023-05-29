import React from "react";
import styles from "./Panel.css";

const Panel = ({ imageUrl, title, content, url }) => {
  return (
    <div style={{width:"250px", height:"350px"}} className="panel">
      {imageUrl && (
        <img className="panel-image" src={imageUrl} alt={title} />
      )}
      <div className="container">
        <h2 style={{fontSize:"15px"}}>{title}</h2>
        <p style={{fontSize:"10px"}}>{content}</p>
        <a className="read-more-button" href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Panel;
