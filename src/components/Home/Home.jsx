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
      <div className="wrap">
        {/* <div className="image-logo"></div>
        <div className="image-banner"></div> */}
        <div className="text">
          {/* <p>Text...</p> */}
          {/* <hr width="100%" /> */}
          <ListNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
