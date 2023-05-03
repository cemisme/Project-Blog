import React from "react";
import Layout from "../component/layout/Layout";
import { useAuth } from "../context/context-config";
import FoundPage from "./FoundPage";
import Sidebar from "../component/module/dashboard/Sidebar";
import "../styles/stylePages.scss";
import CategoryAddNew from "../component/module/category/CategoryAddNew";
const CategoriPage = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return <FoundPage></FoundPage>;
  return (
    <Layout user={userInfo}>
      <div className="addnewpage">
      <Sidebar></Sidebar>
       <CategoryAddNew user={userInfo}></CategoryAddNew>
      </div>
    </Layout>
  );
};

export default CategoriPage;
