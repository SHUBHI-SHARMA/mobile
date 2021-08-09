import React from "react";
import "./Dott9.css";

function Dott9(props) {
  const { vector2, vector3, vector4, className } = props;

  return (
    <div className={`dott-9-1 ${className || ""}`}>
      <div className="overlap-group-19">
        <img className="vector-174" src="/img/vector-160@2x.png" />
        <img className="vector-175" src={vector2} />
        <div className="dott-2-6">
          <img className="vector-176" src={vector3} />
          <img className="vector-177" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Dott9;
