import React from "react";
import "./Panel.css";
import ReactHtmlParser from 'html-react-parser';

const Panel = ({ imageUrl, title, content, url }) => {  
  return (
    <div style={{width:"250px", height:"350px"}} className="panel">
      {imageUrl && (
        <img className="panel-image" src={ReactHtmlParser(imageUrl)} alt={title} />
      )}
      <div className="container">
        <h2 style={{fontSize:"15px"}}>{ReactHtmlParser(title)}</h2>
        <p style={{fontSize:"10px"}}>{ReactHtmlParser(content)}</p>
        <a className="read-more-button" href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Panel;
