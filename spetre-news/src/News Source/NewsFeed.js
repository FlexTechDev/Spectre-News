import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const newsSources = {
  left: [
    'cnn', 'the-guardian-uk', 'independent', 'msnbc', 'nbc-news', 'abc-news', 'cbs-news', 'huffington-post',
    'the-washington-post', 'the-new-york-times', 'npr', 'politico',
  ],
  center: [
    'associated-press', 'reuters', 'bbc-news', 'usa-today', 'bloomberg', 'time', 'the-hill', 'the-wall-street-journal',
  ],
  right: [
    'fox-news', 'the-telegraph', 'breitbart-news', 'national-review', 'the-washington-times', 'the-american-conservative', 'the-daily-wire',
  ],
};

const NewsFeed = ({ searchQuery, politicalView }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery, politicalView]);

  const fetchNews = async (query) => {
    const sources = newsSources[politicalView].join(',');
    const apiKey = "bacc3120c2a84a9c86df691fb8e7bcfc";
    const url = query
      ? `https://newsapi.org/v2/everything?q=${query}&sources=${sources}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
  };

  return (
    <div className="news-feed">
      <div className="news-feed-container">
        {articles.map((article, index) => (
          <Panel
            key={index}
            title={article.title}
            content={article.description}
            url={article.url}
            imageUrl={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
