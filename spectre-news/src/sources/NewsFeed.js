import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const NewsFeed = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const rssFeedUrls = [
    "https://rss.app/feeds/YFUKDMqqEL9IsSdx.xml",
    "https://rss.app/feeds/g5D1Jukuh6x0HY09.xml",
    "https://rss.app/feeds/AAOrQcja3YPWEOL3.xml",
    "https://rss.app/feeds/2LUbXnzXwEQDeXTM.xml",
    "https://rss.app/feeds/xw69IzWVci1myNLz.xml",
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
  ];

  useEffect(() => {
    fetchAllNews(searchQuery);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchQuery]);

  const fetchAllNews = async (query) => {
    const startIndex = page * rssFeedUrls.length;

    const newArticles = await fetchArticlesFromUrls(rssFeedUrls, startIndex);
    setArticles([...articles, ...newArticles]);
    setPage(page + 1);
  };

  const fetchArticlesFromUrls = async (urls, startIndex) => {
    const articles = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const response = await fetch(url);
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");

      for (let j = startIndex; j < items.length; j++) {
        const item = items[j];
        const title = item.getElementsByTagName("title")[0].textContent;
        const description = item.getElementsByTagName("description")[0].textContent;
        const link = item.getElementsByTagName("link")[0].textContent;
        const thumbnail = item.getElementsByTagName("thumbnail")[0]?.getAttribute("url") || null;

        articles.push({ title, description, link, thumbnail });
      }
    }

    return articles;
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + windowHeight >= documentHeight) {
      fetchAllNews(searchQuery);
    }
  };

  if (articles.length > 0) {
    return (
      <div className="news-feed">
        <div className="news-feed-container">
          {articles.map((article, index) => (
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
    return <div>Loading...</div>;
  }
};

export default NewsFeed;
