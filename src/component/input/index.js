
import React, { useState } from "react";
import "../../styles/stylePages.scss";
import IconEyeShow from "../icon/IconEyeShow";
import InconEyeHide from "../icon/InconEyeHide";
import "./input.css";

const Input = ({
  name,
  placeholder,
  type,
  onChange,
  values,
  onBlur,
  className,
  checked,
  image,
  progress,
  handleRemove,
}) => {
  const [togglePass, setTogglePass] = useState(true);

  if (name === "password") {
    return (
      <div className="control">
        <input
          onBlur={onBlur}
          value={values}
          onChange={onChange}
          className={!!className ? className : "field-input"}
          id={name}
          type={togglePass ? "password" : type}
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
  } else if (type === "file") {
    return (
      <>
        <label>
          <input
            className="hidden-input"
            checked={checked}
            onBlur={onBlur}
            value={values}
            onChange={onChange}
            id={name}
            type={"file"}
            name={name}
            placeholder={placeholder}
          ></input>
          {!image && (
            <img
              className="addinput2"
              srcSet="../../img-upload.png"
              alt=""
            ></img>
          )}

          {!image && (
            <div
              className="addinput3"
              style={{
                width: `${Math.ceil(progress)}%`,
              }}
            ></div>
          )}
        </label>
        {image && (
          <div className="addImage">
            <img className={className} src={image} alt=""></img>

            <svg
              onClick={handleRemove}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        )}
      </>
    );
  } else {
    return (
      <input
        checked={checked}
        onBlur={onBlur}
        value={values}
        onChange={onChange}
        className={!!className ? className : "field-input"}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    );
  }
};

export default Input;
