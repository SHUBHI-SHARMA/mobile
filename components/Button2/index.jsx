import React from "react";
import "./Button2.css";

function Button2(props) {
  const { children, className } = props;

  return (
    <div className={`button-13 ${className || ""}`}>
      <div className="know-more bodystandard---medium">{children}</div>
    </div>
  );
}

export default Button2;
