import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsHome from "../NewsHome/NewsHome";
import "./Home.scss";

const Home = () => {
  const { getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <div className="image-banner"></div>
      <div className="wrap">
        <NewsHome />
      </div>
    </div>
  );
};

export default Home;
