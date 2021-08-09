import React from "react";
import "./Button5.css";

function Button5(props) {
  const { children, className } = props;

  return (
    <div className={`button-33 ${className || ""}`}>
      <div className="click-to-join bodystandard---medium">{children}</div>
    </div>
  );
}

export default Button5;
