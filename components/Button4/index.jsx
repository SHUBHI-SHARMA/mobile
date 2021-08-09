import React from "react";
import "./Button4.css";

function Button4(props) {
  const { children, className } = props;

  return (
    <div className={`button-32 ${className || ""}`}>
      <div className="subscribe bodystandard---medium">{children}</div>
    </div>
  );
}

export default Button4;
