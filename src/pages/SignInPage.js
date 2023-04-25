import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import Button from "../component/button/Button";
import { Field } from "../component/field";
import Input from "../component/input";
import Label from "../component/label";
import "./stylePages.scss";
import { useFormik } from "formik";
import { auth, db } from "../firebase-app/firebase-config";
import GetDocs from "../firebase-app/GetDocs";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/context-config";


const SignInPage = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.Email) {
      errors.Email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Not a valid email";
    }
    if (!values.Password) {
      errors.Password = "Required";
    }

    return errors;
  };
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  if (userInfo?.email) {
    navigate("/");
  }
  
  
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validate,
    onSubmit: async (values) => {
      
      if (!formik.isValid) return;
      try {
        await signInWithEmailAndPassword(auth, values.Email, values.Password);
        formik.setSubmitting &&
          toast.success("Signin success", {
            pauseOnHover: false,
            delay: 0,
          });
        setTimeout(() => {
          formik.setSubmitting(false);
          navigate("/");
        }, 6000);
      } catch (error) {
        if (error.message.includes("wrong-password") || (error.message.includes("user-not-found")))
          toast.error("Tài Khoản hoặc mật khẩu sai", {
            pauseOnHover: false,
            delay: 0,
          });
      }
    },
  });

  return (
    <>
      <div className="container">
        <img className="logo-img" srcSet="/monkey.png" alt="hinhanh"></img>
        <h1 className="header-title">Monkey Blogging</h1>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Field>
            <Label htmlFor={"Email"} Children={"Email"}></Label>
            <Input
              onBlur={formik.handleBlur}
              name="Email"
              type="email"
              placeholder="Please enter your email"
              onChange={formik.handleChange}
              values={formik.values.Email}
            ></Input>
            {formik.touched.Email && formik.errors.Email ? (
              <div className="error-text">{formik.errors.Email}</div>
            ) : null}
          </Field>
          <Field>
            <Label htmlFor={"Password"} Children={"Password"}></Label>
            <Input
              onBlur={formik.handleBlur}
              name="Password"
              type="password"
              placeholder="Please enter your password"
              onChange={formik.handleChange}
              values={formik.values.Password}
            ></Input>
            {formik.touched.Password && formik.errors.Password ? (
              <div className="error-text">{formik.errors.Password}</div>
            ) : null}
          </Field>

          <Button
            type="submit"
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            children={"SignIn"}
          ></Button>
          <div className="text-signup">
            Bạn chưa có tài khoản ?{" "}
            <NavLink to="/signup">
              <span>Đăng kí </span>
            </NavLink>
            ngay
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
