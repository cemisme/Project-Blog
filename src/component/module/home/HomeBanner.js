import React, { useState } from "react";
import "../../../pages/stylePages.scss";
import Button from "../../button/Button";
const HomeBanner = () => {
  const [posts, setPost]=useState()

  return (
    <div className="container-home">
      <div className="banner-wrap">
        <div className="content-banner">
          <h1 className="header-banner">Monkey Blogging</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </span>
          <Button to="/signup" className="button-banner">
            Get Started
          </Button>
        </div>
        <img className="image-banner" srcSet="../../banner.png" alt="hinhanh"></img>
      </div>
    </div>
  );
};

export default HomeBanner;
