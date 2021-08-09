import React from "react";
import "./LTC.css";

function LTC(props) {
  const { overlapGroup6, ltc, litecoin } = props;

  return (
    <div className="ltc-1">
      <div className="group-38">
        <div className="overlap-group6-7" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <img className="shape" src="/img/shape-1@2x.png" />
        </div>
      </div>
      <div className="group-94">
        <div className="ltc-2 inter-bold-white-20px">{ltc}</div>
        <div className="litecoin inter-normal-concrete-16px">{litecoin}</div>
      </div>
    </div>
  );
}

export default LTC;
