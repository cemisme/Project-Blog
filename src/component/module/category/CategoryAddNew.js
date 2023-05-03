import React, { useEffect, useRef, useState } from "react";
import Input from "../../input";
import Label from "../../label";
import "../../../styles/stylePages.scss";
import { useFormik } from "formik";
import Button from "../../button/Button";
import slugify from "slugify";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CategoryAddNew = ({ user }) => {
  useEffect(() => {
    document.title = "MonkeyBlog-NewCategory";
  }, []);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Required";
    }

    if (!values.Content) {
      errors.Content = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      Name: "",
      Slug: "",
      Options: "Pending",
    },
    validate,
    onSubmit: async (values) => {
      const cloneValues = { ...values };
      cloneValues.Slug = slugify(cloneValues.Slug || cloneValues.Title, {
        lower: true,
      });
      const colRef = collection(db, "categories");
      try {
        await setDoc(colRef, {
          ...cloneValues,
          createdAt: serverTimestamp(),
        });
        formik.setSubmitting &&
          toast.success("Thêm tin thành công", {
            pauseOnHover: false,
            delay: 0,
          });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik);
  return (
    <div className="container-home">
      <h1 className="addnewpost-title">New category</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="wrap-addtop">
          <div className="addleft">
            <Label htmlFor={"Name"} Children={"Name"}></Label>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="Name"
              type="text"
              placeholder="Name"
            ></Input>
            {formik.touched.Name && formik.errors.Name ? (
              <div className="error-text">{formik.errors.Name}</div>
            ) : null}
          </div>
          <div className="addright">
            <Label htmlFor={"Slug"} Children={"Slug"}></Label>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name={"Slug"}
              placeholder={"Slug"}
            ></Input>
          </div>
        </div>

        <div className="status-catelogy">
          <div className="status-wrap">
            <Label htmlFor={"Status"} Children={"Status"}></Label>
            <div className="status-add">
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name={"Options"}
                className={"status-add-checkbox"}
                type={"radio"}
                values={"Approved"}
              ></Input>
              <Label
                className={"status-addname"}
                htmlFor={"Approved"}
                Children={"Approved"}
              ></Label>
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name={"Options"}
                className={"status-add-checkbox"}
                type={"radio"}
                values={"Pending"}
                checked={formik.values.Options === "Pending"}
              ></Input>
              <Label
                className={"status-addname"}
                htmlFor={"Pending"}
                Children={"Pending"}
              ></Label>
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                values={"Rejected"}
                name={"Options"}
                className={"status-add-checkbox"}
                type={"radio"}
              ></Input>
              <Label
                className={"status-addname"}
                htmlFor={"Rejected"}
                Children={"Rejected"}
              ></Label>
            </div>
          </div>
        </div>
        <Button
          type={"submit"}
          className={"button-add"}
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
        >
          Add new category
        </Button>
      </form>
    </div>
  );
};
export default CategoryAddNew;
