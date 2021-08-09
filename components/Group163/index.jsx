import React from "react";
import ButtonRegister from "../ButtonRegister";
import ButtonRegister2 from "../ButtonRegister2";
import "./Group163.css";

function Group163(props) {
  const { className, buttonRegisterProps, buttonRegister2Props } = props;

  return (
    <div className={`group-163 ${className || ""}`}>
      <ButtonRegister>{buttonRegisterProps.children}</ButtonRegister>
      <ButtonRegister2>{buttonRegister2Props.children}</ButtonRegister2>
    </div>
  );
}

export default Group163;
