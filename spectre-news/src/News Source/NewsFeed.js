import React, { useState, useEffect } from "react";
import Panel from "../panels/Panel";
import "./NewsFeed.css";

const newsSources = {
  left: [
    'cnn', 'the-guardian-uk', 'independent', 'msnbc', 'nbc-news', 'abc-news', 'cbs-news', 'huffington-post',
    'the-washington-post', 'the-new-york-times', 'npr', 'politico', 'mother-jones', 'daily-kos', 'the-nation',
    'slate', 'salon', 'thinkprogress', 'the-intercept', 'buzzfeed-news', 'the-atlantic', 'vice-news',
    'talking-points-memo', 'current-affairs', 'vox', 'mediamatters', 'democracy-now', 'alternet', 'truthout',
    'common-dreams', 'the-raw-story', 'the-progressive', 'newsweek', 'la-times', 'the-daily-beast',
    'the-verge', 'new-republic', 'jacobin', 'the-new-yorker', 'the-young-turks', 'propublica',
  ],
  center: [
    'associated-press', 'reuters', 'bbc-news', 'usa-today', 'bloomberg', 'time', 'the-hill', 'the-wall-street-journal',
    'al-jazeera-english', 'business-insider', 'the-economist', 'politifact', 'axios', 'national-public-radio', 'factcheck.org',
    'cnbc', 'newsy', 'pbs', 'foreign-policy', 'the-financial-times', 'c-span', 'fortune', 'marketwatch', 'quartz',
    'the-diplomat', 'the-conversation', 'the-texas-tribune', 'the-philadelphia-inquirer', 'chicago-sun-times',
    'the-detroit-news', 'the-oregonian', 'the-seattle-times', 'the-denver-post', 'san-francisco-chronicle',
    'los-angeles-daily-news', 'the-dallas-morning-news', 'the-boston-globe', 'the-arizona-republic', 'the-sacramento-bee',
  ],
  right: [
    'fox-news', 'the-telegraph', 'breitbart-news', 'national-review', 'the-washington-times', 'the-american-conservative', 
    'the-daily-wire', 'the-federalist', 'the-daily-mail', 'the-spectator', 'reason', 'the-washington-examiner', 'newsmax',
    'the-new-york-post', 'the-sun', 'the-times-of-india', 'real-clear-politics', 'the-weekly-standard', 'townhall',
    'free-beacon', 'the-american-spectator', 'the-national-interest', 'the-jerusalem-post', 'drudge-report',
    'the-daily-caller', 'the-daily-express', 'the-daily-star', 'the-daily-telegraph', 'the-express-tribune', 
    'the-globe-and-mail', 'the-jerusalem-report', 'the-sunday-times', 'the-times', 'world-net-daily', 
  ],
};

const NewsFeed = ({ searchQuery, politicalView }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery, politicalView]);

  const fetchNews = async (query) => {
    const sources = newsSources[politicalView].join(',');
    const apiKey = "3460767cfc654583affc5a5826b45e3d";
    const url = query
      ? `https://newsapi.org/v2/everything?q=${query}&sources=${sources}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
  };

  if(articles)
  {
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
  }
};

export default NewsFeed;
