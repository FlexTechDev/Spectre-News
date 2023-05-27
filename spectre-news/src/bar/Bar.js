import React from "react";
import "./Bar.css";
import { Link } from "react-router-dom";

const Bar = ({search, searchQuery, onSearchQueryChange }) => {
  const handleSearchIconClick = () => {
    performSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    onSearchQueryChange(searchQuery);
  };

  if(search){
  return (
    <div className="bar-container">
      <div className="app-name"> {/* Add onClick handler here */}
        SpectreNews <span className="beta-tag">ALPHA</span> {/* Added BETA tag here */}
      </div>
      <div className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <div className="dropdown">
      <a className="nav-link">About</a>
        <div className="dropdown-content">
          <p>SpectreNews is a news aggregator that filters news based on political bias using the power of OPENAI GPT-4 Technology. Use the slider to filter Right, Left, or Neutral, News media</p>
        </div>
      </div>
      <Link to="/news" className="nav-link">
        News
      </Link>  
      <Link to="/contact" className="nav-link">
        Contact
      </Link>  
      </div>
      <div className="bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for topics..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
  }
  else{
    return (
      <div className="bar-container">
        <div className="app-name"> {/* Add onClick handler here */}
          SpectreNews <span className="beta-tag">ALPHA</span> {/* Added BETA tag here */}
        </div>
        <div className="navigation">
        <Link to="/" className="nav-link">Home</Link>
        <div className="dropdown">
        <a className="nav-link">About</a>
          <div className="dropdown-content">
            SpectreNews is a news aggregator that filters news based on political bias using a custom made neural network. Use the slider to filter Right, Left, or Neutral, News media
          </div>
        </div>
        <Link to="/news" className="nav-link">
          News
        </Link>  
        <Link to="/contact" className="nav-link">
          Contact
        </Link>  
        </div>
      </div>
    );
  }
};

export default Bar;
