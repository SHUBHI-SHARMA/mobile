import React from "react";
import "./Group115.css";

function Group115(props) {
  const { price, high, className } = props;

  return (
    <div className={`group-115 ${className || ""}`}>
      <div className="price-13 valign-text-middle rubik-medium-white-14px">{price}</div>
      <div className="high valign-text-middle rubik-normal-silver-10px">{high}</div>
    </div>
  );
}

export default Group115;
