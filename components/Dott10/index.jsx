import React from "react";
import Dott9 from "../Dott9";
import "./Dott10.css";

function Dott10(props) {
  const { vector2, className, dott9Props } = props;

  return (
    <div className={`dott-10-1 ${className || ""}`}>
      <div className="overlap-group-20">
        <img className="vector-182" src="/img/vector-160@2x.png" />
        <img className="vector-183" src={vector2} />
        <Dott9
          vector2={dott9Props.vector2}
          vector3={dott9Props.vector3}
          vector4={dott9Props.vector4}
          className={dott9Props.className}
        />
      </div>
    </div>
  );
}

export default Dott10;
