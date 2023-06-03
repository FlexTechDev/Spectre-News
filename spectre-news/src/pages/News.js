import React from "react";
import { useState } from "react";
import Bar from "../bar/Bar";
import Slider from "../slider/Slider";
import NewsFeed from "../sources/NewsFeed";

function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [politicalView, setPoliticalView] = useState("center");

  const handleSliderChange = (newPoliticalView) => {
    setPoliticalView(newPoliticalView);
    console.log("Slider value:", newPoliticalView);
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
    </div>
  );
}

export default News;
