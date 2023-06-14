import React, { useState, useEffect } from "react";
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const backgroundVideo = process.env.PUBLIC_URL + '/Moving (1) (1).mp4';

function Home() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('acceptedCookies');
    setAcceptedCookies(cookiesAccepted === 'true');
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem('acceptedCookies', 'true');
  };

  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Bar search={false} />
      <div className="content">
        <h1>Welcome to SpectreNews</h1>
        <p>
        Take charge of the political narrative with our cutting-edge platform. Use our unique slider feature to effortlessly filter biases and explore diverse perspectives on pressing issues. Customize your news feed for a well-rounded understanding, while preserving your individuality. SpectreNews puts the reins in your hands, empowering you to navigate politics with confidence and clarity, all tailored for <strong>YOU</strong>.
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
    </div>
  );
}

export default Home;
