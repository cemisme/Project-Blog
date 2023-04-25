import React, { useEffect, useRef, useState } from "react";
import Input from "../../input";
import Label from "../../label";
import "../../../pages/stylePages.scss";
import { useFormik } from "formik";
import Button from "../../button/Button";
import slugify from "slugify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Toggle from "../../button/toggle/Toggle";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { FirebaseError } from "firebase/app";
import { Dropdown } from "../../dropdown";
import { useAuth } from "../../../context/context-config";
import { toast } from "react-toastify";
const PostAdd = ({ user }) => {
  console.log(user.uid);
  const [categories, setCategories] = useState([]);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  const validate = (values) => {
    const errors = {};
    if (!values.Title || !values.Description) {
      errors.Title = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      Title: "",
      Slug: "",
      Description: "",
      Image: "",
      Options: "Pending",
      Hot: "",
      Categories: "",
    },
    validate,
    onSubmit: async (values) => {
      const cloneValues = { ...values };
      cloneValues.Slug = slugify(cloneValues.Slug || cloneValues.Title);
      
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        image: image,
        userId: user.uid,
      });
      toast.success("Thêm tin thành công");
    },
  });
  const ref2 = useRef();
  const ref1 = useRef();
  const onChangeUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    formik.setFieldValue("Image", file.name);
    handleUploadImage(file);
  };
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress2 =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress2);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  function textAreaAdjust() {
    const a = ref1.current;
    a.style.height = "1px";
    a.style.height = 1 + a.scrollHeight + "px";
  }
  function textAreaAdjust1() {
    const a = ref.current;
    a.style.height = "1px";
    a.style.height = 1 + a.scrollHeight + "px";
  }
  const handleRemove = () => {
    const storage = getStorage();
    const desertRef = ref(storage, "images/" + formik.values.Image);
    deleteObject(desertRef)
      .then(() => {
        console.log("delete success");
        setImage("");
        setProgress(0);
        formik.setFieldValue("Image", "hihi");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", "1"));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);
  console.log(categories);
  return (
    <div className="container-home">
      <h1 className="addnewpost-title">Add new post</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="wrap-addtop">
          <div className="addleft">
            <Label htmlFor={"Title"} Children={"Title"}></Label>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="Title"
              type="text"
              placeholder="Title"
            ></Input>
            {formik.touched.Title && formik.errors.Title ? (
              <div className="error-text">{formik.errors.Title}</div>
            ) : null}
            <Label htmlFor={"Description"} Children={"Description"}></Label>
            <textarea
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Description"
              ref={ref1}
              onKeyUp={textAreaAdjust}
              name="Description"
              className="textarea-add"
            ></textarea>
          </div>
          <div className="addright">
            <Label htmlFor={"Slug"} Children={"Slug"}></Label>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name={"Slug"}
              placeholder={"Slug"}
            ></Input>
            <Label htmlFor={"Image"} Children={"Image"}></Label>
            <Input
              onBlur={formik.handleBlur}
              onChange={onChangeUploadImage}
              name={"Image"}
              type={"file"}
              className={"addinput"}
              image={image}
              progress={progress}
              handleRemove={handleRemove}
            ></Input>
          </div>
        </div>
        <div className="addbot">
          <Label htmlFor={"Content"} Children={"Content"}></Label>
          <textarea
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter your content..."
            ref={ref2}
            onKeyUp={textAreaAdjust1}
            name="Content"
            className="textarea-content"
          ></textarea>
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
          <div className="check-hotnew">
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name={"Hot"}
              className={"status-add-checkbox"}
              type={"checkbox"}
            ></Input>
            <Label
              className={"status-addname"}
              htmlFor={"Hot"}
              Children={"Hot New ?"}
            ></Label>
          </div>
        </div>
        <div className="wrap-categories">
          <Label Children={"Categories"}></Label>
          <div className="dropdown">
            <div className="dropbtn">
              {formik.values.Categories
                ? formik.values.Categories
                : "Categories"}
            </div>
            {categories.length > 0 &&
              categories.map((item) => (
                <div
                  onClick={() => {
                    formik.setFieldValue("Categories", item.name);
                  }}
                  class="dropdown-content"
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        <Button type={"submit"} className={"button-add"}>
          Add new post
        </Button>
      </form>
    </div>
  );
};

export default PostAdd;
