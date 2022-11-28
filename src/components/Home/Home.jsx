import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ListNews from "../ListNews/ListNews";
import "./Home.scss";

const Home = () => {
  const { getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div className="home">
      <div className="image-banner"></div>
      <div className="wrap">
        <ListNews />
      </div>
    </div>
  );
};

export default Home;
