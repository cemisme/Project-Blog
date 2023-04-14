import React from "react";
import Header from "./Header";

const Layout = ({ children, user }) => {
  return (
    <>
      <Header user={user}></Header>
      {children}
    </>
  );
};

export default Layout;
