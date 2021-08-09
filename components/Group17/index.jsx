import React from "react";
import "./Group17.css";

function Group17(props) {
  const { logosBitcoin, className } = props;

  return (
    <div className={`group-17 ${className || ""}`}>
      <div className="logosbitcoin" style={{ backgroundImage: `url(${logosBitcoin})` }}>
        <img className="vector-118" src="/img/vector-76@2x.png" />
      </div>
    </div>
  );
}

export default Group17;
