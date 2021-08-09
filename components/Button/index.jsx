import React from "react";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  return (
    <div className={`button-1 ${className || ""}`}>
      <div className="learn-more-1 bodystandard---medium">{children}</div>
    </div>
  );
}

export default Button;
