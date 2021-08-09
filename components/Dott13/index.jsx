import React from "react";
import "./Dott13.css";

function Dott13(props) {
  const { vector2, className } = props;

  return (
    <div className={`dott-1-5 ${className || ""}`}>
      <div className="overlap-group-30">
        <img className="vector-242" src="/img/vector-5@2x.png" />
        <img className="vector-243" src={vector2} />
      </div>
    </div>
  );
}

export default Dott13;
