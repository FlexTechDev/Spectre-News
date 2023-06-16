import React from "react";
import Bar from "../bar/Bar";
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <Bar search={false} />

      {/* AdSense Code */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3653401026918335"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3653401026918335"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

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
