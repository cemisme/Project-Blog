import React, { useRef } from "react";
import Input from "../../input";
import Label from "../../label";
import "../../../pages/stylePages.scss";

const PostAdd = () => {
  const ref = useRef();
  const ref1= useRef();
  
  function textAreaAdjust() {
    const a = ref1.current;
    a.style.height = "1px";
    a.style.height = 25 + a.scrollHeight + "px";
  }
  function textAreaAdjust1() {
    const a = ref.current;
    a.style.height = "1px";
    a.style.height = 1 + a.scrollHeight + "px";
  }
  return (
    <div className="container-home">
      <div className="wrap-addtop">
        <div className="addleft">
          <Label htmlFor={"Title"} Children={"Title"}></Label>
          <Input name={"Title"} placeholder={"Title"}></Input>
          <Label htmlFor={"Description"} Children={"Description"}></Label>
          <textarea
            placeholder="Description"
            ref={ref1}
            onKeyUp={textAreaAdjust}
            name="Description"
            className="textarea-add"
          ></textarea>
        </div>
        <div className="addright">
          <Label htmlFor={"Slug"} Children={"Slug"}></Label>
          <Input name={"Slug"} placeholder={"Slug"}></Input>
          <Label htmlFor={"Image"} Children={"Image"}></Label>
          <Input name={"Image"} type={"file"} className={"addinput"}></Input>
        </div>
      </div>
      <div className="addbot">
        <Label htmlFor={"Content"} Children={"Content"}></Label>
        <textarea
          placeholder="Enter your content..."
          ref={ref}
          onKeyUp={textAreaAdjust1}
          name="Description"
          className="textarea-content"
        ></textarea>
      </div>

      <div className="status-catelogy">
        <div className="status-wrap">
          <Label htmlFor={"Status"} Children={"Status"}></Label>
          <div className="status-add">
            <Input
              name={"Approved"}
              className={"status-add-checkbox"}
              type={"checkbox"}
            ></Input>
            <Label
              className={"status-addname"}
              htmlFor={"Approved"}
              Children={"Approved"}
            ></Label>
            <Input
              name={"Pending"}
              className={"status-add-checkbox"}
              type={"checkbox"}
            ></Input>
            <Label
              className={"status-addname"}
              htmlFor={"Pending"}
              Children={"Pending"}
            ></Label>
            <Input
              name={"Rejected"}
              className={"status-add-checkbox"}
              type={"checkbox"}
            ></Input>
            <Label
              className={"status-addname"}
              htmlFor={"Rejected"}
              Children={"Rejected"}
            ></Label>
          </div>
        </div>
        <div className="catelogy-add">
          <Label htmlFor={"Content"} Children={"Content"}></Label>
          <Input></Input>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
