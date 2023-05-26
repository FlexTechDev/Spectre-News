import React from "react";
import { useState } from "react";
import Bar from "../home/Bar";
import Slider from "../slider/Slider";
import NewsFeed from "../sources/NewsFeed";

function Main()
{
  const [searchQuery, setSearchQuery] = useState("");
  const [politicalView, setPoliticalView] = useState("center");

  const handleSliderChange = (newPoliticalView) => {
    setPoliticalView(newPoliticalView);
    console.log("Slider value:", newPoliticalView);
  };

  return(
    <div>
      <Bar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <Slider onChange={handleSliderChange} />
      <NewsFeed searchQuery={searchQuery} politicalView={politicalView} />
    </div>
  );
}

export default Main;