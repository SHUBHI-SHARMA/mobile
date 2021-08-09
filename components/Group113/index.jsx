import React from "react";
import "./Group113.css";

function Group113(props) {
  const { price, totalAmount, className } = props;

  return (
    <div className={`group-113 ${className || ""}`}>
      <div className="price-11 valign-text-middle rubik-medium-white-14px">{price}</div>
      <div className="total-amount valign-text-middle rubik-normal-silver-10px">{totalAmount}</div>
    </div>
  );
}

export default Group113;
