import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/stylePages.scss";
import Button from "../button/Button";
const Header = () => {
  return (
    <>
      <div className="container-home">
        <div className="wrapper-header">
          <div className="header-left">
            <NavLink to="/">
              <img
                className="logo-home"
                srcSet="/monkey.png"
                alt="hinhanh"
              ></img>
            </NavLink>
            <div className="navigate-header">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Blog</NavLink>
              <NavLink to="/">Contact</NavLink>
            </div>
          </div>
          <div className="header-right">
            <input placeholder="Search post..."></input>
            <div className="search-icon">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ariaHidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
            <Button to={"/signup"}  className={"button-signuphome"}>SignUp</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;