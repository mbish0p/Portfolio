import React from "react";
import { Link } from "react-router-dom";

//assets
import LostGif from "../../images/gif/lost.gif";
import stars from "../../images/hero/stars.png";

const DefaultPage = () => {
  return (
    <div className="default--container">
      <img src={stars} id="stars" alt="stars" className="img" />
      <div className="wrapper container">
        <div className="content">
          <h1 className="header--h1 number">Oops! 404</h1>
          <div className="description">
            <h2 className="header--h2 desc">This page could not be found</h2>
          </div>
        </div>
        <img alt="lost" className="default--gif" src={LostGif} />
      </div>
      <div className="container text-center">
        <Link to="/" className="btn--component mt-32 md:mt-40">
          Return to main page
        </Link>
      </div>
    </div>
  );
};

export default DefaultPage;
