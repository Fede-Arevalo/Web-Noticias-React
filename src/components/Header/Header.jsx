import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// import Logo from "../Header/logo-white.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <span>TOP CAR NEWS ™</span>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/listNews">News</Link>
            <Link to="/form">Form</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
