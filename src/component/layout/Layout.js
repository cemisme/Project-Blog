import React from "react";
import Header from "./Header";
import Sidebar from "../module/dashboard/Sidebar";

const Layout = ({ children, user }) => {
  return (
    <>
      <Header user={user}></Header>
      {children}
    </>
  );
};

export default Layout;
