import "./App.css";
import Bar from "./home/Bar";
import Slider from "./slider/Slider";
import NewsFeed from "./News Source/NewsFeed";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [politicalView, setPoliticalView] = useState("center");

  const handleSliderChange = (newPoliticalView) => {
    setPoliticalView(newPoliticalView);
    console.log("Slider value:", newPoliticalView);
  };

  return (
    <div className="App">
      <Bar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <Slider onChange={handleSliderChange} />
      <NewsFeed searchQuery={searchQuery} politicalView={politicalView} />
    </div>
  );
}

export default App;
