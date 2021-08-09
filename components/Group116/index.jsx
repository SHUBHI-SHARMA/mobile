import React from "react";
import "./Group116.css";

function Group116(props) {
  const { price, low, className } = props;

  return (
    <div className={`group-116 ${className || ""}`}>
      <div className="price-15 valign-text-middle rubik-medium-white-14px">{price}</div>
      <div className="low valign-text-middle rubik-normal-silver-10px">{low}</div>
    </div>
  );
}

export default Group116;
