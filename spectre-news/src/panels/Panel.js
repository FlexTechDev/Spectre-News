import React from "react";
import "./Panel.css";
import ReactHtmlParser from 'html-react-parser';

const Panel = ({ imageUrl, title, content, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  
  return (
    <div style={{width:"250px", height:"350px"}} className="panel" onClick={handleClick}>
      {imageUrl && (
        <img className="panel-image" src={ReactHtmlParser(imageUrl)} alt={title} />
      )}
      <div className="container">
        <h2 style={{fontSize:"15px"}}>{ReactHtmlParser(title)}</h2>
        <p style={{fontSize:"10px"}}>{ReactHtmlParser(content)}</p>
      </div>

      {/* AdSense Code */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3653401026918335"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3653401026918335"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default Panel;
