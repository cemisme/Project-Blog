import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../component/layout/Header";
import { useAuth } from "../context/context-config";
import { auth, db } from "../firebase-app/firebase-config";
import Layout from "../component/layout/Layout";
import HomeBanner from "../component/module/home/HomeBanner";
import HomeFreature from "../component/module/home/HomeFreature";
import HomeNew from "../component/module/home/HomeNew";

const HomePage = () => {
  // const [posts, setPosts] = useState([]);
  const { userInfo } = useAuth();
  // useEffect(() => {
  //   onSnapshot(colRef, (snapshot) => {
  //     let posts = [];
  //     snapshot.docs.forEach((doc) => {
  //       posts.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //     setPosts(posts);
  //   });
  // }, []);
  // const { posts, userInfo } = useAuth();
  // const userName = posts.map((item) => {
  //   if (item.Email === userInfo.email) {
  //     return item.Fullname;
  //   }
  // });
  const navigate = useNavigate();
  console.log(userInfo);
  if (!userInfo?.email) {
    navigate("/signin");
  }
  // const handleSignOut = () => {
  //   toast.success("Đã Đăng Xuất");
  //   navigate("/signin");
  //   signOut(auth);
  // navigate("/signin");
  // };

  return (
    <>
      <Layout user={userInfo}>
        <HomeBanner></HomeBanner>
        <HomeFreature></HomeFreature>
        <HomeNew></HomeNew>
      </Layout>
      {/* <Header user={userInfo} userName={userName}></Header> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
    </>
  );
};

export default HomePage;
