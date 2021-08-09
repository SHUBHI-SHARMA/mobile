import React from "react";
import "./ButtonRegister.css";

function ButtonRegister(props) {
  const { children } = props;

  return (
    <div className="button-register">
      <div className="buy rubik-medium-white-12px">{children}</div>
    </div>
  );
}

export default ButtonRegister;
