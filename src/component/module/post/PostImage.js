import React from 'react';

const PostImage = ({className,url,alt}) => {
    return (
        <img
            className={className?className:"new-contentleftimg"}
            srcSet={url}
            alt={alt}
          ></img>
    );
};

export default PostImage;