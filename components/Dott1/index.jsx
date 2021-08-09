import React from "react";
import "./Dott1.css";

function Dott1(props) {
  const { vector2, className } = props;

  return (
    <div className={`dott-1-1 ${className || ""}`}>
      <div className="overlap-group-4">
        <img className="vector-110" src="/img/vector-53@2x.png" />
        <img className="vector-111" src={vector2} />
      </div>
    </div>
  );
}

export default Dott1;
