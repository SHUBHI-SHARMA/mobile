import React from "react";
import { Link } from "react-router-dom";
import "./Button6.css";

function Button6(props) {
  const { children, className } = props;

  return (
    <div className={`button-56 border-2px-black ${className || ""}`}>
      <div className="text-315 valign-text-middle roboto-black-black-13px">{children}</div>
    </div>
  );
}

export default Button6;
