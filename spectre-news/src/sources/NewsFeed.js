import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";
import ReactHtmlParser from 'html-react-parser';

const NewsFeed = ({ searchQuery, politicalView }) => {
  const [leftArticles, setLeftArticles] = useState([]);
  const [midLeftArticles, setMidLeftArticles] = useState([]);
  const [centerArticles, setCenterArticles] = useState([]);
  const [midRightArticles, setMidRightArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdblockerActive, setIsAdblockerActive] = useState(false);
  const [keyCounter, setKeyCounter] = useState(0);

  const rssFeedUrls = {
    'left': [
      "https://rss.app/feeds/uMynjxfieM4YYyOR.xml",
      "https://rss.app/feeds/IrR1trjeWth5flf3.xml",
      "https://rss.app/feeds/HwQ54e6Y1E4Lq0JR.xml",
      "https://rss.app/feeds/nlYoBC4pf0j1tvwm.xml",
      "https://rss.app/feeds/9hoVR8LmiMTw1Iuq.xml",
      "https://rss.app/feeds/WsBrDv9RwmtTo6rk.xml",
      "https://rss.app/feeds/hLMACAaZXHNlarCM.xml",
      "https://rss.app/feeds/ai2qIa6ptsuv3HpX.xml",
      "https://rss.app/feeds/8hG54V6SZVgtASGm.xml",
      "https://rss.app/feeds/jL7bEBczL95um3zT.xml",
      "https://rss.app/feeds/yCv6rlOC1tXpGnjJ.xml",
      "https://rss.app/feeds/yphrbrN4e7iEOLGb.xml",
      "https://rss.app/feeds/cSIKEOsVnEntOkbo.xml",
    ],
    'midleft': [
      "https://rss.app/feeds/xufHYpYXSDNK4LH0.xml",
     "https://rss.app/feeds/xlbxNFUcI9Z5miKW.xml",
      "https://rss.app/feeds/DBn2CE28jKaPQrcX.xml",
      "https://rss.app/feeds/MIDzDfgLlRYzlXEp.xml",
      "https://rss.app/feeds/OE4RpgXMhNFj8nN7.xml",
      "https://rss.app/feeds/jrOGcnhWXkRNLQ9D.xml",
      "https://rss.app/feeds/2LQgBodvVKM6Q8xN.xml",
      "https://rss.app/feeds/tj4IRVc7BvE6eN05.xml",
      "https://rss.app/feeds/0WxIigm8JqcBpKPG.xml",
      "https://rss.app/feeds/GBfUPahwpaiNQDum.xml",
      "https://rss.app/feeds/jsOIyTy2GUegdozz.xml",
      "https://rss.app/feeds/q852pLepzhnqjzHe.xml",
    ],
    'center': [
      "https://rss.app/feeds/PCtv5x4ZhZ86M4fx.xml",
      "https://rss.app/feeds/4saEdrwdlWPSzRQs.xml",
      "https://rss.app/feeds/ZHNLLb0R7PV8eJLO.xml",
      "https://rss.app/feeds/igrhPJAU5sfit0a4.xml",
      "https://rss.app/feeds/S70Xb47GWcXbS4zN.xml",
      "https://rss.app/feeds/IDnv0TpWiNASL0rq.xml",
      "https://rss.app/feeds/qO1DQHYV7mMjui95.xml",
      "https://rss.app/feeds/unPCxuflO9qJJ6hR.xml",
    ],

    'midright': [
      "https://rss.app/feeds/1YySpYbjLqRhY0Ai.xml",
      "https://rss.app/feeds/vDtomACkfPrX9Q1L.xml",
      "https://rss.app/feeds/jYwtHM5JKbi2nMFF.xml",
      "https://rss.app/feeds/qSdN8nl3A8xJ9Hfg.xml",
      "https://rss.app/feeds/dcwWyxHijOn4hEFx.xml",
      "https://rss.app/feeds/eAltMMib6y8juim7.xml",
      "https://rss.app/feeds/whe7pkZgMjwFcIG4.xml",
      "https://rss.app/feeds/9a2OreUJSbk6UZXO.xml",
    ],

    'right': [
      "https://rss.app/feeds/i9F3VBuUbWCKZffM.xml",
      "https://rss.app/feeds/5t4s1q1dBeNHWdiH.xml",
      "https://rss.app/feeds/2xZFLvUhZWXDcMHz.xml",
      "https://rss.app/feeds/p5nAgrpVjy50N642.xml",
      "https://rss.app/feeds/14JmoWDCYvrxUu3F.xml",
      "https://rss.app/feeds/VcyYpiTPmxw6Bo1z.xml",
      "https://rss.app/feeds/wWUxeYBaN4pPjeCs.xml",
      "https://rss.app/feeds/4QeJZenYqueRNSft.xml",
      "https://rss.app/feeds/4FTw0jY3aQpDhThY.xml",
      "https://rss.app/feeds/fYMZ4wDAkQheoQVt.xml",
      "https://rss.app/feeds/KKq2cccXzGoBNliv.xml",
      "https://rss.app/feeds/Qay8k9gPLgR0xRBU.xml",
      "https://rss.app/feeds/QYsSPqWFzoEU9PYn.xml",
    ]
  };

  useEffect(() => {
    fetchAllNews();
    checkForAdblocker();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchQuery, politicalView, leftArticles, midLeftArticles, centerArticles, midRightArticles, rightArticles]);

  const checkForAdblocker = () => {
    const test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    window.setTimeout(() => {
      if (test.offsetHeight === 0) {
        setIsAdblockerActive(true);
      }
      test.remove();
    }, 100);
  };

  const fetchAllNews = async () => {
    setIsLoading(true);
  
    try {
      const newLeftArticles = await fetchArticlesFromUrls(rssFeedUrls["left"]);
      const newMidLeftArticles = await fetchArticlesFromUrls(rssFeedUrls["midleft"]);
      const newCenterArticles = await fetchArticlesFromUrls(rssFeedUrls["center"]);
      const newMidRightArticles = await fetchArticlesFromUrls(rssFeedUrls["midright"]);
      const newRightArticles = await fetchArticlesFromUrls(rssFeedUrls["right"]);
  
      // Randomize the order of articles
      newLeftArticles.sort(() => Math.random() - 0.5);
      newMidLeftArticles.sort(() => Math.random() - 0.5);
      newCenterArticles.sort(() => Math.random() - 0.5);
      newMidRightArticles.sort(() => Math.random() - 0.5);
      newRightArticles.sort(() => Math.random() - 0.5);
  
      setLeftArticles(newLeftArticles);
      setMidLeftArticles(newMidLeftArticles);
      setCenterArticles(newCenterArticles);
      setMidRightArticles(newMidRightArticles);
      setRightArticles(newRightArticles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArticlesFromUrls = async (urls) => {
    const fetchPromises = urls.map(async (url) => {
      const response = await fetch(url);
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");

      const articles = Array.from(items).map((item) => {
        const titleElement = item.getElementsByTagName("title")[0];
        const descriptionElement = item.getElementsByTagName("description")[0];
        const linkElement = item.getElementsByTagName("link")[0];
        const thumbnailElement = item.getElementsByTagName("thumbnail")[0];

        const title = titleElement ? titleElement.textContent : "";
        const description = descriptionElement ? descriptionElement.textContent : "";
        const link = linkElement ? linkElement.textContent : "";
        const thumbnail = thumbnailElement ? thumbnailElement.getAttribute("url") : null;

        return { title, description, link, thumbnail };
      });

      return articles;
    });

    const allArticles = await Promise.all(fetchPromises);

    // Flatten the array of arrays into a single array
    return allArticles.flat();
  };

  const filterArticles = () => {
    let articles = [];
    if (politicalView === "left") {
      articles = [...leftArticles];
    } else if (politicalView === "midleft") {
      articles = [...midLeftArticles];
    } else if (politicalView === "center") {
      articles = [...centerArticles];
    } else if (politicalView === "midright") {
      articles = [...midRightArticles];
    } else if (politicalView === "right") {
      articles = [...rightArticles];
    }

    const filtered = articles.filter((article) => {
      const regex = new RegExp(searchQuery, "i");
      return regex.test(article.title) || regex.test(article.description);
    });

  filtered.sort(() => Math.random() - 0.5);

  setFilteredArticles(filtered);
};

  const handleImageLoad = () => {
    setKeyCounter((prevCounter) => prevCounter + 1);
  };

  if (isAdblockerActive) {
    return (
      <div className="adblocker-modal">
        <h1>Please disable your adblocker to access this site</h1>
        <p>We rely on ad revenue to keep our site running. Please support us by disabling your adblocker.</p>
      </div>
    );
  } else if (isLoading) {
    return <div className="loading-bar" />;
  } else if (filteredArticles.length > 0) {
    return (
      <div className="news-feed">
        <div className="news-feed-container">
          {filteredArticles.map((article, index) => (
            <Panel
              key={keyCounter + index}
              title={article.title}
              content={article.description}
              url={article.link}
              imageUrl={article.thumbnail}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>No Articles Found...</div>;
  }
};

export default NewsFeed;