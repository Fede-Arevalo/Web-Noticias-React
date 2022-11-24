import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

const ListNews = () => {
  const { news } = useContext(GlobalContext);

  const newsItem = news.map((newsItem) => {
    return (
      <div>
        <p>{newsItem.section}</p>
        <h1>{newsItem.title}</h1>
        <p>{newsItem.abstract}</p>
        <img src={newsItem.multimedia} alt="img" />
        <p>
          {newsItem.byline} | {newsItem.published_date}
        </p>
      </div>
    );
  });
  return (
    <div className="listNews">
      <div className="wrapListNews">
        <h1>Top Stories</h1>
        <div>{newsItem}</div>
      </div>
    </div>
  );
};

export default ListNews;
