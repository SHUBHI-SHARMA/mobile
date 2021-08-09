import React from "react";
import "./CheckHowMuchYouCanEarn.css";

function CheckHowMuchYouCanEarn(props) {
  const { text21, text20 } = props;

  return (
    <div className="check-how-much-you-can-earn">
      <div className="text-19 heading--h2">{text21}</div>
      <div className="text-18 bodystandard---regular">{text20}</div>
    </div>
  );
}

export default CheckHowMuchYouCanEarn;
