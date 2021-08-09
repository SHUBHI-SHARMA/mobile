import React from "react";
import "./Register.css";

function Register(props) {
  const { children, className } = props;

  return (
    <div className={`register ${className || ""}`}>
      <div className="search-i0679070 valign-text-middle comfortaa-regular-normal-black-36px">{children}</div>
    </div>
  );
}

export default Register;
