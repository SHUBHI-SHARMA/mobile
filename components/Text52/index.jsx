import React from "react";
import "./Text52.css";

function Text52(props) {
  const { text41, text40, startTrade, className } = props;

  return (
    <div className={`text-38 ${className || ""}`}>
      <div className="text-39 heading--h3">{text41}</div>
      <p className="text-38-1 rubik-normal-bon-jour-16px">{text40}</p>
      <div className="button-31">
        <div className="start-trade-3 bodystandard---medium">{startTrade}</div>
      </div>
    </div>
  );
}

export default Text52;
