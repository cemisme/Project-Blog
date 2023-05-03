import React from 'react';
import "../../../styles/stylePages.scss";

const PostMeta = ({className, date, author}) => {
    return (
        <div className={className?className:"date-author"}>
        <div className="date">{date}</div>
        <div className="author">{author}</div>{" "}
      </div>
    );
};

export default PostMeta;