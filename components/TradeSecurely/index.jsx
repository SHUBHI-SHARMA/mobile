import React from "react";
import CheckHowMuchYouCanEarn from "../CheckHowMuchYouCanEarn";
import "./TradeSecurely.css";

function TradeSecurely(props) {
  const { tradeSecurely, cryptocurrencies, calculate, className, checkHowMuchYouCanEarnProps } = props;

  return (
    <div className={`trade-securely-3 ${className || ""}`} style={{ backgroundImage: `url(${tradeSecurely})` }}>
      <div className="overlap-group5-28">
        <div className="bg-3"></div>
        <img className="cryptocurrencies-3" src={cryptocurrencies} />
        <img className="calculate-9" src={calculate} />
        <CheckHowMuchYouCanEarn
          text21={checkHowMuchYouCanEarnProps.text21}
          text20={checkHowMuchYouCanEarnProps.text20}
        />
      </div>
    </div>
  );
}

export default TradeSecurely;
