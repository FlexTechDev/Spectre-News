// Home.js

import React, { useState, useEffect } from "react";
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import useLockBodyScroll from "../pages/useLockBodyScroll"; // Path to useLockBodyScroll.js

function Home() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useLockBodyScroll(["/"]);  // Add other paths if needed

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("acceptedCookies");
    setAcceptedCookies(cookiesAccepted === "true");

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  return (
    <div className="home-container" style={{ overflow: 'hidden', height: '100vh' }}>
      <Bar search={false} />
      <div className="content">
        <h1>Welcome to SpectreNews</h1>
        <p>
          Unleash the power to explore diverse perspectives on global issues. Navigate politics with clarity. Discover the truth. Let SpectreNews be <strong>YOUR</strong> guide.
        </p>
        <Link to="/news" className="cta-button">
          Get Started <FiArrowRightCircle className="icon" />
        </Link>
      </div>
      {!acceptedCookies && (
        <div className="cookie-consent-popup">
          <p>We use cookies to ensure you get the best experience on our website.</p>
          <button onClick={acceptCookies}>Accept</button>
        </div>
      )}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
