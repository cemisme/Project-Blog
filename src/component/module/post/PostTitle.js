import React from "react";
import "../../../styles/stylePages.scss";

const PostTitle = ({ children, className }) => {
  return <div className={className ? className : "title-item"}>{children}</div>;
};

export default PostTitle;
