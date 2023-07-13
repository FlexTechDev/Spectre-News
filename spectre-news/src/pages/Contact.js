import React from "react";
import { Helmet } from 'react-helmet';
import Bar from "../bar/Bar";
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <Bar search={false} />

      <div className="panel-teschner">
        <h2>Michael Teschner</h2>
        <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews.</p>
        <p>Reach me at: mteschner24@gmail.com</p>
      </div>

      <div className="panel-safar">
        <h2>Michael Safar</h2>
        <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews.</p>
        <p>Reach me at: michaelsafar024@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
