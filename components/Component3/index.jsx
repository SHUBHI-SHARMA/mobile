import React from "react";
import "./Component3.css";

function Component3(props) {
  const { ellipse, text311, text312, className } = props;

  return (
    <div className={`component-3-1 ${className || ""}`}>
      <img className="ellipse-5" src={ellipse} />
      <div className="flex-col-93">
        <div className="text-309 valign-text-middle roboto-bold-black-13px">{text311}</div>
        <div className="text-31-1 valign-text-middle roboto-normal-black-11px">{text312}</div>
      </div>
    </div>
  );
}

export default Component3;
