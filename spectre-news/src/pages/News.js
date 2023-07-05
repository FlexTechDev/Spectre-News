import React, { useEffect, useState } from "react";
import Bar from "../bar/Bar";
import Slider from "../slider/Slider";
import NewsFeed from "../sources/NewsFeed";

function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [politicalView, setPoliticalView] = useState("center");
  const [acceptedCookies, setAcceptedCookies] = useState(localStorage.getItem('acceptedCookies') !== 'true' ? false : true);
  const [isLoadingAds, setIsLoadingAds] = useState(true);

  const handleSliderChange = (newPoliticalView) => {
    setPoliticalView(newPoliticalView);
    console.log("Slider value:", newPoliticalView);
  };

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem('acceptedCookies', 'true');
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoadingAds(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!isLoadingAds) {
      const script1 = document.createElement("script");
      script1.src = "//pl19852507.highrevenuegate.com/236ead5eae305c8f12eeec7320450834/invoke.js";
      script1.async = true;
      script1.setAttribute("data-cfasync", "false");
      document.body.appendChild(script1);

      // Remove the script elements when component unmounts
      return () => {
        document.body.removeChild(script1);
      };
    }
  }, [isLoadingAds]);

  return (
    <div>
      <Bar search={true} searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />

      <Slider onChange={handleSliderChange} />
      <NewsFeed searchQuery={searchQuery} politicalView={politicalView} />

      {!acceptedCookies && (
        <div className="cookie-consent-popup">
          <p>We use cookies to ensure you get the best experience on our website.</p>
          <button onClick={acceptCookies}>Accept</button>
        </div>
      )}
      {!isLoadingAds && <div id="container-236ead5eae305c8f12eeec7320450834"></div>}
    </div>
  );
}

export default News;
