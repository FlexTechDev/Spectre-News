import React from "react";
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Particles } from "react-tsparticles";
import particlesConfig from "../effects/ParticlesConfig";

function Home() {
  return (
    <div className="home-container">
      <Bar search={false} />
      <div className="content">
        <h1>Welcome to SpectreNews</h1>
        <p>
          SpectreNews is your go-to source for the latest and greatest news from around the world. Our team of dedicated developers has worked tirelessly to bring you the most important stories and insightful analysis, helping to filter the left, right, and neutral political biases for <strong>YOU</strong>.
        </p>
        <Link to="/news" className="cta-button">
          Get Started <FiArrowRightCircle className="icon" />
        </Link>
        <div className="particles-container">
          <Particles options={particlesConfig} />
        </div>
      </div>
    </div>
  );
}

export default Home;
