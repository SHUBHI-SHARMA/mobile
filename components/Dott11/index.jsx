import React from "react";
import Dott9 from "../Dott9";
import Dott10 from "../Dott10";
import "./Dott11.css";

function Dott11(props) {
  const { vector2, className, dott9Props, dott9Props2 } = props;

  return (
    <div className={`dott-11 ${className || ""}`}>
      <div className="overlap-group1-7">
        <img className="vector-186" src="/img/vector-160@2x.png" />
        <img className="vector-187" src={vector2} />
        <Dott9
          vector2={dott9Props.vector2}
          vector3={dott9Props.vector3}
          vector4={dott9Props.vector4}
          className={dott9Props.className}
        />
        <Dott10 vector2={dott9Props2.vector2} className={dott9Props2.className} dott9Props={dott9Props2.dott9Props} />
      </div>
    </div>
  );
}

export default Dott11;
