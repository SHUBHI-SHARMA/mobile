import React from "react";
import "./ButtonRegister2.css";

function ButtonRegister2(props) {
  const { children, className } = props;

  return (
    <div className={`button-register-3 ${className || ""}`}>
      <div className="sell rubik-medium-white-12px">{children}</div>
    </div>
  );
}

export default ButtonRegister2;
