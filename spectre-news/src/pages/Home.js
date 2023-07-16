import React, { useState, useEffect } from "react";
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("acceptedCookies");
    setAcceptedCookies(cookiesAccepted === "true");

    document.body.style.backgroundColor = '#231B26';

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      document.body.style.backgroundColor = null;
      unsubscribe();
    };
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  return (
    <div className="home-container" style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
      <Bar search={false} />
      <div className="content">
        <h1>Welcome to SpectreNews</h1>
        <p>
          Explore diverse perspectives on global issues. Navigate politics with clarity. Discover the truth. Let SpectreNews be <strong>YOUR</strong> guide.
        </p>
        {user ? (
          <Link to="/news" className="cta-button">
            Go to News <FiArrowRightCircle className="icon" />
          </Link>
        ) : (
          <Link to="/signup" className="cta-button">
            Get Started <FiArrowRightCircle className="icon" />
          </Link>
        )}
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
