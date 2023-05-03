import React from 'react';
import "../../../styles/stylePages.scss";

const PostCategory = ({children, className}) => {

    return (
        <div className={className?className:"button-fea"}>
          {children}  
        </div>
    );
};

export default PostCategory;