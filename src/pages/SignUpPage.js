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
  setDoc,
} from "firebase/firestore";
import Button from "../component/button/Button";
import { Field } from "../component/field";
import Input from "../component/input";
import Label from "../component/label";
import "./stylePages.scss";
import { useFormik } from "formik";
import { auth, db } from "../firebase-app/firebase-config";
import GetDocs from "../firebase-app/GetDocs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/context-config";
const colRef = collection(db, "user infor");
const SignUpPage = () => {
  const inforData = GetDocs();
  const validate = (values) => {
    const errors = {};
    if (!values.Fullname) {
      errors.Fullname = "Please enter your Fullname";
    } else if (values.Fullname.length > 20) {
      errors.Fullname = "20 characters or less";
    }
    if (!values.Email) {
      errors.Email = "Please enter your Email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Not a valid email";
    }
    inforData.forEach((item) => {
      if (item.Email === values.Email) {
        errors.Email = "Email already exists";
      }
    });
    if (!values.Password) {
      errors.Password = "Please enter your Password";
    } else if (values.Password.length < 7) {
      errors.Password = "Please enter more than 7 characters";
    }
    return errors;
  };
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  if (userInfo?.email) {
    navigate("/");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      Fullname: "",
      Email: "",
      Password: "",
    },
    validate,
    onSubmit: async (values) => {
      await createUserWithEmailAndPassword(
        auth,
        values.Email,
        values.Password,
        values.Fullname
      );
      formik.setSubmitting &&
        toast.success("Signup success", {
          pauseOnHover: false,
          delay: 0,
        });
      setDoc(doc(db, "user infor", auth.currentUser.uid), {
        Fullname: values.Fullname,
        Email: values.Email,
        Password: values.Password,
        createdAt: serverTimestamp(),
      });

      setTimeout(() => {
        formik.setSubmitting(false);
        navigate("/");
      }, 5000);
    },
  });
  return (
    <>
      <div className="container">
        <img className="logo-img" srcSet="/monkey.png" alt="hinhanh"></img>
        <h1 className="header-title">Monkey Blogging</h1>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Field>
            <Label htmlFor={"Fullname"} Children={"Fullname"}></Label>
            <Input
              onBlur={formik.handleBlur}
              name="Fullname"
              placeholder="Please enter your fullname"
              onChange={formik.handleChange}
              values={formik.values.Fullname}
            ></Input>
            {formik.touched.Fullname && formik.errors.Fullname ? (
              <div className="error-text">{formik.errors.Fullname}</div>
            ) : null}
          </Field>
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
            children={"SignUp"}
          ></Button>
          <div className="text-signup">
            Bạn đã có tài khoản ?{" "}
            <NavLink to="/signin">
              <span>Đăng nhập </span>
            </NavLink>
            ngay
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
