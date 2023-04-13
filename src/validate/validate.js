import React from "react";

const validation = (values, inforData) => {
    const errors = {};
    if (!values.Fullname) {
      errors.Fullname = "Required";
    } else if (values.Fullname.length > 20) {
      errors.Fullname = "20 characters or less";
    }
    if (!values.Email) {
      errors.Email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Not a valid email";
    }
    inforData.forEach((item) => {
      if (item.Email === values.Email) {
        errors.Email = "Email already exists";
      }
    });
    if (!values.Password) {
      errors.Password = "Required";
    } else if (values.Password.length < 8) {
      errors.Password = "Please enter more than 9 characters";
    }
    return errors;
  };

export default validation;
