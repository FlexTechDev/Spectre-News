import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const NewsFeed = ({ searchQuery, politicalView }) => {
  const [leftArticles, setLeftArticles] = useState([]);
  const [centerArticles, setCenterArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdblockerActive, setIsAdblockerActive] = useState(false);

  const rssFeedUrls = {
    'left': [
      "https://rss.app/feeds/7nMOcp5pjC3Hcjxa.xml",
      "https://rss.app/feeds/bDganfp2JvZdxZO7.xml",
      "https://rss.app/feeds/0tobFXrLav0eRe3Q.xml",
      "https://rss.app/feeds/Nw8urOYGdwfJ08TR.xml",
      "https://rss.app/feeds/3o357lO46urmdn8R.xml",
      "https://rss.app/feeds/n5LEOUqjuCZhyNKk.xml",
      "https://rss.app/feeds/Ia5OUXfGKQ7S53KA.xml",
      "https://rss.app/feeds/qtStwv6K6IkI3f00.xml",
      "https://rss.app/feeds/ANDz5X02cHKoyAQz.xml",
      "https://rss.app/feeds/93qspuoTABpTUjH0.xml",
      "https://rss.app/feeds/JdQhfe49DiMsPLG4.xml",
      "https://rss.app/feeds/PKmdh6DhIf0qdJxN.xml",
      "https://rss.app/feeds/oWmPdtBT9QXNcoLj.xml",
    ],
    'center': [
      "https://rss.app/feeds/z24zH70dRrax0Ayf.xml",
      "https://rss.app/feeds/1NeX7ZdBPXUE7zCS.xml",
      "https://rss.app/feeds/2cueGeZ541h4Sc8D.xml",
      "https://rss.app/feeds/SOv9CIiIsz4p0EzG.xml",
      "https://rss.app/feeds/lDeUdkRSieFtP6YH.xml",
      "https://rss.app/feeds/1MVo61L2KS78bFlL.xml",
      "https://rss.app/feeds/Qrt44dAjrpTALzMz.xml",
      "https://rss.app/feeds/UrEbYZvn37oClPMu.xml",
      "https://rss.app/feeds/Hyxr9JyGKvUMELS8.xml",
      "https://rss.app/feeds/wEN7DYBjUCvYDPrc.xml",
    ],
    'right': [
      "https://rss.app/feeds/UnnGaO909qsaLTA6.xml",
      "https://rss.app/feeds/W6f1XoTvAmQikXI2.xml",
      "https://rss.app/feeds/VZ63v04dcLLlDRp1.xml",
      "https://rss.app/feeds/YU9BQjdwmiaCvppU.xml",
      "https://rss.app/feeds/u5ehaUBD9OH9r05t.xml",
      "https://rss.app/feeds/YRwxpATv6aQgSxOI.xml",
      "https://rss.app/feeds/Urx9FHFBsa9ggpCd.xml",
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
    let articles = [];
    if (politicalView === "left") {
      articles = leftArticles;
    } else if (politicalView === "center") {
      articles = centerArticles;
    } else if (politicalView === "right") {
      articles = rightArticles;
    }

    const filtered = articles.filter((article) => {
      const regex = new RegExp(searchQuery, "i");
      return regex.test(article.title) || regex.test(article.description);
    });
    setFilteredArticles(filtered);
  }, [searchQuery, politicalView, leftArticles, centerArticles, rightArticles]);

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
      const newLeftArticles = shuffleArray(await fetchArticlesFromUrls(rssFeedUrls["left"]));
      const newCenterArticles = shuffleArray(await fetchArticlesFromUrls(rssFeedUrls["center"]));
      const newRightArticles = shuffleArray(await fetchArticlesFromUrls(rssFeedUrls["right"]));

      setLeftArticles(newLeftArticles);
      setCenterArticles(newCenterArticles);
      setRightArticles(newRightArticles);

      if (politicalView === "left") {
        setFilteredArticles(newLeftArticles);
      } else if (politicalView === "center") {
        setFilteredArticles(newCenterArticles);
      } else if (politicalView === "right") {
        setFilteredArticles(newRightArticles);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArticlesFromUrls = async (urls) => {
    const articles = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const response = await fetch(url);
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");

      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        
        const titleElement = item.getElementsByTagName("title")[0];
        const descriptionElement = item.getElementsByTagName("description")[0];
        const linkElement = item.getElementsByTagName("link")[0];
        const thumbnailElement = item.getElementsByTagName("thumbnail")[0];
        
        const title = titleElement ? titleElement.textContent : "";
        const description = descriptionElement ? descriptionElement.textContent : "";
        const link = linkElement ? linkElement.textContent : "";
        const thumbnail = thumbnailElement ? thumbnailElement.getAttribute("url") : null;

        articles.push({ title, description, link, thumbnail });
      }
    }

    return articles;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
              key={index}
              title={article.title}
              content={article.description}
              url={article.link}
              imageUrl={article.thumbnail}
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
