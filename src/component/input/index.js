// import React from "react";
// import "./input.css";
// import { useController } from "react-hook-form";
// const Input = ({ id, control, ...props }) => {
//   const { field } = useController({
//     control,
//     defaultValue: "",
//     name: id,
//   });
//   if (id === "fullname") {
//     return (
//       <input
//         {...field}
//         {...control.register(id, { required: true })}
//         id={id}
//         className={props.className}
//         type={props.type}
//         placeholder={props.placeholder}
//       ></input>
//     );
//   } else if (id === "email") {
//     return (
//       <input
//         {...field}
//         {...control.register(id, {
//           required: true,
//           pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         })}
//         id={id}
//         className={props.className}
//         type={props.type}
//         placeholder={props.placeholder}
//       ></input>
//     );
//   } else if (id === "password") {
//     return (
//       <input
//         {...field}
//         {...control.register(id, { required: true, minLength: 6 })}
//         id={id}
//         className={props.className}
//         type={props.type}
//         placeholder={props.placeholder}
//       ></input>
//     );
//   }
//   else if(id==='confirmpassword')
//   {
//     return (
//         <input
//           {...field}
//           {...control.register(id, { required: true})}
//           id={id}
//           className={props.className}
//           type={props.type}
//           placeholder={props.placeholder}
//         ></input>
//       );
//   }
// };
// export default Input;
import React, { useState } from "react";
import "../../pages/stylePages.scss";
import IconEyeShow from "../icon/IconEyeShow";
import InconEyeHide from "../icon/InconEyeHide";
import "./input.css";

const Input = ({ name, placeholder, type, onChange, values, onBlur }) => {
  const [togglePass, setTogglePass] = useState(true);

  if (name === "password") {
    return (
      <div className="control">
        <input
          onBlur={onBlur}
          value={values}
          onChange={onChange}
          className="field-input"
          id={name}
          type={togglePass ? "password" : "text"}
          name={name}
          placeholder={placeholder}
        ></input>
        {!togglePass && (
          <InconEyeHide onClick={() => setTogglePass(true)}></InconEyeHide>
        )}
        {togglePass && (
          <IconEyeShow onClick={() => setTogglePass(false)}></IconEyeShow>
        )}
      </div>
    );
  } else {
    return (
      <input
        onBlur={onBlur}
        value={values}
        onChange={onChange}
        className="field-input"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    );
  }
};

export default Input;
