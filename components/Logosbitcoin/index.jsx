import React from "react";
import "./Logosbitcoin.css";

function Logosbitcoin(props) {
  const { logosBitcoin, className } = props;

  return (
    <div className={`logosbitcoin-6-1 ${className || ""}`} style={{ backgroundImage: `url(${logosBitcoin})` }}>
      <img className="vector-218" src="/img/vector-36@2x.png" />
    </div>
  );
}

export default Logosbitcoin;
