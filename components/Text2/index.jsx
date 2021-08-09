import React from "react";
import "./Text2.css";

function Text2(props) {
  const { x30B, text2, className } = props;

  return (
    <div className={`text-109-1 ${className || ""}`}>
      <div className="x30-b-2 heading--h2">{x30B}</div>
      <div className="text-104-1 rubik-normal-bon-jour-16px">{text2}</div>
    </div>
  );
}

export default Text2;
