import React from "react";
import "./Button3.css";

function Button3(props) {
  const { children, className } = props;

  return (
    <div className={`button-26 ${className || ""}`}>
      <div className="start-trade bodystandard---medium">{children}</div>
    </div>
  );
}

export default Button3;
