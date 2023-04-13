// import "./label.css";
// import React from "react";
// const Label = ({ children, htmlFor, ...props }) => {
//   return <label className="label" htmlFor={htmlFor} {...props}>{children} </label>;
// };
// export {Label};
import React from 'react';
import '../../pages/stylePages.scss'
const Label = ({htmlFor,Children}) => {
  return (
    <>
      <label htmlFor={htmlFor} className='field-label' >{Children}</label>
    </>
  );
};

export default Label;