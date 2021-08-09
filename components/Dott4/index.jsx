import React from "react";
import "./Dott4.css";

function Dott4(props) {
  const { vector2, vector3, vector4, className } = props;

  return (
    <div className={`dott-4-2 ${className || ""}`}>
      <div className="overlap-group-31">
        <img className="vector-244" src="/img/vector-13@2x.png" />
        <img className="vector-245" src={vector2} />
        <div className="dott-2-11">
          <img className="vector-246" src={vector3} />
          <img className="vector-247" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Dott4;
