import React from "react";
import { NavLink } from "react-router-dom";
import { LoadingSpinner } from "../../loading";
import "../../pages/stylePages.scss";

const Button = ({
  children,
  type,
  disabled,
  loading,
  onClick,
  className,
  to,
}) => {
  const child = !!loading ? <LoadingSpinner></LoadingSpinner> : children;

  return (
    <button
      type={type}
      className={!!className ? className : "button-signup"}
      disabled={disabled}
    >
      {child}
    </button>
  );
};
export default Button;
