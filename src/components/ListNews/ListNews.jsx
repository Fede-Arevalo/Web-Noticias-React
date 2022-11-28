import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";
import News from "../News/News";

const ListNews = () => {
  const { getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="listNews">
      <div className="wrapListNews">
      <h1>List News</h1>
      <hr width="100%" />
        <News />
      </div>
    </div>
  );
};

export default ListNews;
