import React from "react";
import "./BTC.css";

function BTC(props) {
  const { overlapGroup6, btc, bitcoin, className } = props;

  return (
    <div className={`btc-2 ${className || ""}`}>
      <div className="group-17-2">
        <div className="logosbitcoin-2">
          <div className="overlap-group6-5" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <img className="vector-126" src="/img/vector-70@2x.png" />
          </div>
        </div>
      </div>
      <div className="group-91">
        <div className="btc-3 inter-bold-white-20px">{btc}</div>
        <div className="bitcoin-1 inter-normal-concrete-16px">{bitcoin}</div>
      </div>
    </div>
  );
}

export default BTC;
