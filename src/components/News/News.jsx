import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./News.scss";

const News = () => {
  const { news } = useContext(GlobalContext);

  const newsSports = news.filter((newItem) => newItem.section === "sports");
  const newsItem = newsSports.map((newsItem, i) => {
    const date = newsItem.published_date.slice(0, 10);
    return (
      <div key={i}>
        <div className="News">
          <div className="wrapNews">
            <h1>{newsItem.title}</h1>
            <img src={newsItem.multimedia[1].url} alt="img" />
            <p>{newsItem.abstract}</p>
            <h6>
              {date} | {newsItem.byline} | {newsItem.section}
            </h6>
          </div>
        </div>
      </div>
    );
  });
  return <>{newsItem}</>;
};

export default News;
