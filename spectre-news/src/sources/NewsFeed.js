import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const NewsFeed = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

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
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchQuery]);

  const fetchAllNews = async () => {
    const newArticles = await fetchArticlesFromUrls(rssFeedUrls);
    setArticles(newArticles);
    setFilteredArticles(newArticles);
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
        const title = item.getElementsByTagName("title")[0].textContent;
        const description = item.getElementsByTagName("description")[0].textContent;
        const link = item.getElementsByTagName("link")[0].textContent;
        const thumbnail =
          item.getElementsByTagName("thumbnail")[0]?.getAttribute("url") || null;

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

  if (filteredArticles.length > 0) {
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
    return <div>No articles found.</div>;
  }
};

export default NewsFeed;
