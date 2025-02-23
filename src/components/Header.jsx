import React from "react";
import { Link } from "react-router-dom";
import homePageIcon from "../assets/DurumNew-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="to-homepage-icon-container">
        <div className="to-homepage-button">
          <Link to="/" className="homepage-link">
            <img
              className="to-homepage-icon"
              src={homePageIcon}
              alt="Durum Herald logo of a brown blade of durum wheat grass"
            />

            <h1 className="site-name-text">Durum Herald</h1>
          </Link>
        </div>
      </div>
      <div className="dropdown-bar">
        <div className="dropdown">
          <button className="dropbtn">
            <Link to="/Articles">All Articles</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
