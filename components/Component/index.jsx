import React from "react";
import "./Component.css";

function Component(props) {
  const { ellipse, text304, text305, className } = props;

  return (
    <div className={`component ${className || ""}`}>
      <img className="ellipse-1" src={ellipse} />
      <div className="flex-col-87">
        <div className="text-302 valign-text-middle roboto-bold-white-13px">{text304}</div>
        <div className="text-303 valign-text-middle roboto-normal-white-11px">{text305}</div>
      </div>
    </div>
  );
}

export default Component;
