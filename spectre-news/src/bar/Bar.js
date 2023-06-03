import React, { useState, useEffect } from "react";
import "./Bar.css";
import { Link } from "react-router-dom";

const Bar = ({ search, searchQuery, onSearchQueryChange }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString(undefined, options);
      const formattedTime = date.toLocaleTimeString();
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    // Add the Adsense script
    const addAdsenseScript = () => {
      try {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3653401026918335";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      } catch (err) {
        console.error(err);
      }
    };

    addAdsenseScript();

    // Update date and time every second
    const timer = setInterval(() => {
      updateDateTime();
    }, 1000);

    // Clear the timer on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    onSearchQueryChange(searchQuery);
  };

  if (search) {
    return (
      <div className="bar-container">
        <div className="app-name">
          SpectreNews <span className="beta-tag">BETA</span>
        </div>
        <div className="navigation">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div className="dropdown">
            <a className="nav-link">About</a>
            <div className="dropdown-content">
              <p>
                SpectreNews is a news aggregator that filters news based on political bias using the power of OPENAI GPT-4 Technology. Use the slider to filter Right, Left, or Neutral, News media
              </p>
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
        <span className="date">{currentDate}</span>
        <span className="time">{currentTime}</span>
      </div>
    );
  } else {
    return (
      <div className="bar-container">
        <div className="app-name">
          SpectreNews <span className="beta-tag">BETA</span>
        </div>
        <div className="navigation">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div className="dropdown">
            <a className="nav-link">About</a>
            <div className="dropdown-content">
              <p>
                SpectreNews is a news aggregator that filters news based on political bias using a custom-made neural network. Use the slider to filter Right, Left, or Neutral news media.
              </p>
            </div>
          </div>
          <Link to="/news" className="nav-link">
            News
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <span className="date">{currentDate}</span>
        <span className="time">{currentTime}</span>
      </div>
    );
  }
};

export default Bar;
