// import "./label.css";
// import React from "react";
// const Label = ({ children, htmlFor, ...props }) => {
//   return <label className="label" htmlFor={htmlFor} {...props}>{children} </label>;
// };
// export {Label};
import React from 'react';
import '../../styles/stylePages.scss'
const Label = ({htmlFor,Children, className}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={className?className:'field-label'} >{Children}</label>
    </>
  );
};

export default Label;