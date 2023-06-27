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
      fontFamily: 'Poppins, sans-serif',  // Make sure you have imported 'Poppins' font in your project
    },
  };
  
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("acceptedCookies");
    setAcceptedCookies(cookiesAccepted === "true");

    // Open the donation modal after component mount
    setTimeout(() => {
      setModalIsOpen(true);
    }, 500);  // you can change this delay as per your need

    const scripts = [
      "//pl19852507.highrevenuegate.com/236ead5eae305c8f12eeec7320450834/invoke.js",
      `http${window.location.protocol === 'https:' ? 's' : ''}://www.profitabledisplaynetwork.com/dd6a46b8d85a28885f98f9b92fd6736a/invoke.js`,
      `http${window.location.protocol === 'https:' ? 's' : ''}://www.profitabledisplaynetwork.com/69c82b126df3d90aa8326437e8662cc6/invoke.js`,
    ].map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

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
        fontFamily: 'Poppins, sans-serif !important',  // added this
      },
    };

    // Set the body background color
    document.body.style.backgroundColor = '#231B26';

    // Remove the script elements when component unmounts
    return () => {
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });

      // Reset the body background color
      document.body.style.backgroundColor = null;
    };
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  const donationButton = `
  <form action="https://www.paypal.com/donate" method="post" target="_top">
  <input type="hidden" name="business" value="2H7PCQUULKCAQ" />
  <input type="hidden" name="no_recurring" value="0" />
  <input type="hidden" name="item_name" value="Please support our quality journalism and innovative infrastructure. Help us stay on the cutting edge! (Bob Stone=SpectreNews)" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  </form>
`;


  // Close the modal
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
        style={customStyles}  // updated this
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
