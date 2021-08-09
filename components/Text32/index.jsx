import React from "react";
import Button3 from "../Button3";
import "./Text32.css";

function Text32(props) {
  const { investSmart, text47, className, button3Props } = props;

  return (
    <div className={`text-24 ${className || ""}`}>
      <div className="invest-smart-1 heading--h3">{investSmart}</div>
      <p className="text-45 rubik-normal-bon-jour-16px">{text47}</p>
      <Button3>{button3Props.children}</Button3>
    </div>
  );
}

export default Text32;
