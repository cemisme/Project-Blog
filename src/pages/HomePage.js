import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../component/layout/Header";
import { useAuth } from "../context/context-config";
import { auth } from "../firebase-app/firebase-config";

const HomePage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  //   useEffect(() => {
  //     if (!userInfo.email) {
  //       navigate("/signup");
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  const handleSignOut = () => {
    signOut(auth);
    toast.success("Đã Đăng Xuất");
    navigate("/signin");
  };
  console.log();
  return (
    <Header></Header>
  );
};

export default HomePage;
