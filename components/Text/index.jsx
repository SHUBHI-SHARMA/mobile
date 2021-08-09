import React from "react";
import Button from "../Button";
import "./Text.css";

function Text(props) {
  const { text4, text3, className, buttonProps } = props;

  return (
    <div className={`text-103 ${className || ""}`}>
      <div className="text-106 heading--h1">{text4}</div>
      <p className="text-105 rubik-medium-bon-jour-16px">{text3}</p>
      <Button className={buttonProps.className}>{buttonProps.children}</Button>
    </div>
  );
}

export default Text;
