import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';

Modal.setAppElement('#root');

function Home() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    content: {
      color: 'white',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '1em',
      borderRadius: '10px',
      backgroundColor: '#333',
      fontFamily: 'Poppins, sans-serif',
    },
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("acceptedCookies");
    setAcceptedCookies(cookiesAccepted === "true");

    setTimeout(() => {
      setModalIsOpen(true);
    }, 500); 

    document.body.style.backgroundColor = '#231B26';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  const donationButton = `
  <a style="background: #800080 url(https://donorbox.org/images/white_logo.svg) no-repeat 45px;color: #fff;text-decoration: none;font-family: Verdana,sans-serif;display: inline-block;font-size: 16px;padding: 15px 45px;padding-left: 70px;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;" href="https://donorbox.org/spectrenews?default_interval=o">Donate</a>
  `;

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="home-container" style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
      <Bar search={false} />
      <div className="content">
        <h1>Welcome to SpectreNews</h1>
        <p>
          Explore diverse perspectives on global issues. Navigate politics with clarity. Discover the truth. Let SpectreNews be <strong>YOUR</strong> guide.
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
      <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Donation Modal"
    style={customStyles}
  >
    <h2 style={{ textAlign: 'center' }}>Help us keep SpectreNews running!</h2>
    <p style={{ textAlign: 'center' }}>Running a top-tier news site costs us a considerable amount of money! With your generous donation, you're not just helping us meet the financial demands of running this site; you're investing in the infrastructure that powers our operation and the innovations that keep us on the cutting edge. </p>
    <div style={{ display: 'flex', justifyContent: 'center' }}>{ReactHtmlParser(donationButton)}</div>
    <button className="no-thanks-button" onClick={closeModal} style={{ display: 'block', margin: '1em auto', padding: '0.5em 1em', background: 'purple', color: 'white', border: 'none', borderRadius: '5px' }}>No thanks, continue to SpectreNews</button>
  </Modal>
    </div>
  );
}
export default Home;
