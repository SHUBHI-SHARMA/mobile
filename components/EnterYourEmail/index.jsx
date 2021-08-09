import React from "react";
import "./EnterYourEmail.css";

function EnterYourEmail(props) {
  const { enterYourEmail, form } = props;

  return (
    <div className="enter-your-email-2">
      <div className="enter-your-email-3 rubik-normal-white-16px">{enterYourEmail}</div>
      <img className="form-6" src={form} />
    </div>
  );
}

export default EnterYourEmail;
