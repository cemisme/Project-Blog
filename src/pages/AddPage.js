import React from "react";
import Layout from "../component/layout/Layout";
import PostAdd from "../component/module/post/PostAdd";
import { useAuth } from "../context/context-config";
import FoundPage from "./FoundPage";
import Sidebar from "../component/module/dashboard/Sidebar";
const AddPage = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return <FoundPage></FoundPage>;
  return (
    <Layout user={userInfo}>
      <div className="addnewpage">
        <Sidebar></Sidebar>
        <PostAdd user={userInfo}></PostAdd>
      </div>
    </Layout>
  );
};

export default AddPage;
