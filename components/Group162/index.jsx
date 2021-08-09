import React from "react";
import "./Group162.css";

function Group162(props) {
  const { x3825Btc, volume24H, className } = props;

  return (
    <div className={`group-162 ${className || ""}`}>
      <div className="x3825-btc valign-text-middle rubik-normal-white-12px">{x3825Btc}</div>
      <div className="volume-24h-1 valign-text-middle rubik-normal-silver-8px">{volume24H}</div>
    </div>
  );
}

export default Group162;
