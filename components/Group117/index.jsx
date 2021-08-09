import React from "react";
import "./Group117.css";

function Group117(props) {
  const { price, text42, lastPrice, className } = props;

  return (
    <div className={`group-117 ${className || ""}`}>
      <div className="overlap-group5-6">
        <div className="price-5 valign-text-middle rubik-normal-white-12px">{price}</div>
        <div className="text-40 valign-text-middle rubik-normal-cyan--aqua-10px">{text42}</div>
      </div>
      <div className="last-price valign-text-middle rubik-normal-silver-8px">{lastPrice}</div>
    </div>
  );
}

export default Group117;
