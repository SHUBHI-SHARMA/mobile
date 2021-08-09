import React from "react";
import "./Dott2.css";

function Dott2(props) {
  const { vector2, className } = props;

  return (
    <div className={`dott-2-3 ${className || ""}`}>
      <div className="overlap-group8-2">
        <img className="vector-112" src="/img/vector-11@2x.png" />
        <img className="vector-113" src={vector2} />
      </div>
    </div>
  );
}

export default Dott2;
