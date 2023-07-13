import React from "react";
import "./Panel.css";
import ReactHtmlParser from 'html-react-parser';

const Panel = ({ imageUrl, videoUrl, title, content, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  
  return (
    <div style={{width:"250px", height:"350px"}} className="panel" onClick={handleClick}>
      {imageUrl && !videoUrl && (
        <img className="panel-image" src={ReactHtmlParser(imageUrl)} alt={title} />
      )}
      {videoUrl && (
        <video className="panel-video" src={ReactHtmlParser(videoUrl)} type="video/mp4" />
      )}
      <div className="container">
        <h2 style={{fontSize:"15px"}}>{ReactHtmlParser(title)}</h2>
        <p style={{fontSize:"10px"}}>{ReactHtmlParser(content)}</p>
      </div>
    </div>
  );
};

export default Panel;
