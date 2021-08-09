import React from "react";
import "./Group141.css";

function Group141(props) {
  const { price, price2, price3, price4, className } = props;

  return (
    <div className={`group-141 ${className || ""}`}>
      <div className="price-9 valign-text-middle rubik-medium-white-10px">{price}</div>
      <div className="price-7 valign-text-middle rubik-medium-white-10px">{price2}</div>
      <div className="price-7 valign-text-middle rubik-medium-white-10px">{price3}</div>
      <div className="price-7 valign-text-middle rubik-medium-white-10px">{price4}</div>
    </div>
  );
}

export default Group141;
