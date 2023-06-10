import React, { useState } from "react";
import Bar from "../bar/Bar";
import Slider from "../slider/Slider";
import NewsFeed from "../sources/NewsFeed";

function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [politicalView, setPoliticalView] = useState("center");
  const [acceptedCookies, setAcceptedCookies] = useState(localStorage.getItem('acceptedCookies') !== 'true' ? false : true);

  const handleSliderChange = (newPoliticalView) => {
    setPoliticalView(newPoliticalView);
    console.log("Slider value:", newPoliticalView);
  };

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem('acceptedCookies', 'true');
  };

  return (
    <div>
      <Bar search={true} searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />

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

      <Slider onChange={handleSliderChange} />
      <NewsFeed searchQuery={searchQuery} politicalView={politicalView} />

      {!acceptedCookies && (
        <div className="cookie-consent-popup">
          <p>We use cookies to ensure you get the best experience on our website.</p>
          <button onClick={acceptCookies}>Accept</button>
        </div>
      )}
    </div>
  );
}

export default News;
