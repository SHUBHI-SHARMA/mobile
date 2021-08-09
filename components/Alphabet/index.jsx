import React from "react";
import "./Alphabet.css";

function Alphabet(props) {
  const { children, className } = props;

  return (
    <div className={`alphabet-7 ${className || ""}`}>
      <div className="alphabet-4 sfprodisplay-light-black-25px">{children}</div>
    </div>
  );
}

export default Alphabet;
