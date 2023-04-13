import React from "react";
import { NavLink } from "react-router-dom";
import "./foundPageStyle.scss";
const FoundPage = () => {
  return (
    <div className="logo-found">
      <NavLink to="/">
        <img srcSet="/monkey.png" alt="hinhanh"></img>
      </NavLink>
      <h1 className="title">404 <NavLink className="returnHome" to="/">Return</NavLink> Home Page Now</h1>
    </div>
  );
};

export default FoundPage;
