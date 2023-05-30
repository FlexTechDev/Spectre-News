import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const NewsFeed = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdblockerActive, setIsAdblockerActive] = useState(false);

  const rssFeedUrls = [
    "https://rss.app/feeds/YFUKDMqqEL9IsSdx.xml",
    "https://rss.app/feeds/g5D1Jukuh6x0HY09.xml",
    "https://rss.app/feeds/AAOrQcja3YPWEOL3.xml",
    "https://rss.app/feeds/2LUbXnzXwEQDeXTM.xml",
    "https://rss.app/feeds/odQcynLfNwjWo6d9.xml",
    "https://rss.app/feeds/zrisE6uWsHq5Ttfj.xml",
    "https://rss.app/feeds/tSyutGeASpJNXO83.xml",
    "https://rss.app/feeds/6HiiYwL7kNP6g9z8.xml",
    "https://rss.app/feeds/VS29fiEndn5PE5pT.xml",
    "https://rss.app/feeds/gKQF4Nlvvos2dNUR.xml",
    "https://rss.app/feeds/7rqz3OmdrpVeYzwp.xml",
    "https://rss.app/feeds/1fR4LiVDtsBImveZ.xml",
    "https://rss.app/feeds/77SpeVCFWfQfnRiu.xml",
    "https://rss.app/feeds/KliQyySDpT5GRmRA.xml",
    "https://rss.app/feeds/JxBNaoZVo5ZBJR8D.xml",
    "https://rss.app/feeds/8k6sZXE78JVfs0jj.xml",
    "https://rss.app/feeds/8nk7GQ6xg6Fz7D96.xml",
  ];

  useEffect(() => {
    fetchAllNews();
    checkForAdblocker();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchQuery]);

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
      const newArticles = await fetchArticlesFromUrls(rssFeedUrls);
      setArticles(newArticles);
      setFilteredArticles(newArticles);
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

  const filterArticles = () => {
    const filtered = articles.filter((article) => {
      const regex = new RegExp(searchQuery, "i");
      return regex.test(article.title) || regex.test(article.description);
    });
    setFilteredArticles(filtered);
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
    return <div>Generating Articles...</div>;
  }
};

export default NewsFeed;
