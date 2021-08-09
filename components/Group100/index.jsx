import React from "react";
import Group96 from "../Group96";
import "./Group100.css";

function Group100(props) {
  const { text38, className, group96Props } = props;

  return (
    <div className={`group-100 ${className || ""}`}>
      <Group96 src={group96Props.src} />
      <div className="text-36-1 inter-normal-aquamarine-16px">{text38}</div>
    </div>
  );
}

export default Group100;
