import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./NewsHome.scss";

const NewsHome = () => {
  const { news } = useContext(GlobalContext);

  const newsSports = news.filter((newItem) => newItem.section === "sports");
  const newsItem = newsSports.map((newsItem, i) => {
    return (
      <div key={i}>
        <div className="NewsHome">
          <div className="wrapNewsHome">
            <h1>{newsItem.title}</h1>
            <a href={newsItem.url} target="blank">
              <img src={newsItem.multimedia[1].url} alt="img" />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <>{newsItem}</>;
};

export default NewsHome;
