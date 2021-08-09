import React from "react";
import "./CardBounceRate.css";

function CardBounceRate(props) {
  const { increaseInTrade, text46, sellOption } = props;

  return (
    <div className="card-bounce-rate">
      <div className="overlap-group6-3">
        <div className="increase-in-trade inter-semi-bold-white-20px">{increaseInTrade}</div>
        <div className="group-69">
          <div className="text-44 inter-bold-white-24px">{text46}</div>
          <div className="arrow-up">
            <img className="vector-120" src="/img/vector-17@2x.png" />
          </div>
        </div>
        <div className="sell-option inter-normal-concrete-16px">{sellOption}</div>
      </div>
    </div>
  );
}

export default CardBounceRate;
