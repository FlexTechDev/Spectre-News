import React, { useState, useEffect } from "react";
import "./Bar.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FiX, FiMenu } from "react-icons/fi";

const Bar = ({ search, searchQuery, onSearchQueryChange }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = date.toLocaleDateString(undefined, options);
      const formattedTime = date.toLocaleTimeString();
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    const timer = setInterval(() => {
      updateDateTime();
    }, 1000);

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

  return (
    <div className={`bar-container ${isMobileDevice ? "mobile" : ""}`}>
      <div className="app-name">
        SpectreNews <span className="beta-tag">BETA</span>
      </div>
      {isMobileDevice && (
        <button onClick={toggleNav} className="nav-toggle-button">
          {isNavVisible ? <FiX /> : <FiMenu />}
        </button>
      )}
      <div className={`navigation ${isMobileDevice ? "mobile" : ""} ${isNavVisible ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => isMobileDevice && toggleNav()}>
          Home
        </Link>
        <Link to="/news" className="nav-link" onClick={() => isMobileDevice && toggleNav()}>
          News
        </Link>
        <div className="dropdown">
          <a className="nav-link">About</a>
          <div className="dropdown-content">
            <p>
              SpectreNews is a news aggregator that filters news based on political bias. We use the official AllSides Media Bias Chart to categorize news sources and their content. Use the slider to filter Right, Left, or Central news media.
            </p>
          </div>
        </div>
        <Link to="/contact" className="nav-link" onClick={() => isMobileDevice && toggleNav()}>
          Contact
        </Link>
      </div>
      {search && (
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
      )}
      {!isMobileDevice && (
        <div>
          <span className="date">{currentDate}</span>
          <span className="time">{currentTime}</span>
        </div>
      )}
    </div>
  );
};

export default Bar;
