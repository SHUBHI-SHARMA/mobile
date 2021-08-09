import React from "react";
import "./Dott12.css";

function Dott12(props) {
  const { vector2, className } = props;

  return (
    <div className={`dott-1-3 ${className || ""}`}>
      <div className="overlap-group-27">
        <img className="vector-216" src="/img/vector-23@2x.png" />
        <img className="vector-217" src={vector2} />
      </div>
    </div>
  );
}

export default Dott12;
