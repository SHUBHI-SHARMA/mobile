import React from "react";
import Group96 from "../Group96";
import "./Group102.css";

function Group102(props) {
  const { text39, className, group96Props } = props;

  return (
    <div className={`group-102 ${className || ""}`}>
      <Group96 src={group96Props.src} />
      <div className="text-37-1 inter-normal-aquamarine-16px">{text39}</div>
    </div>
  );
}

export default Group102;
