import React from "react";
import "./Alphabet3.css";

function Alphabet3(props) {
  const { children, className } = props;

  return (
    <div className={`alphabet-17 ${className || ""}`}>
      <div className="alphabet-15 sfprodisplay-light-black-25px">{children}</div>
    </div>
  );
}

export default Alphabet3;
