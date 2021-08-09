import React from "react";
import "./Alphabet2.css";

function Alphabet2(props) {
  const { children, className } = props;

  return (
    <div className={`alphabet-8-1 ${className || ""}`}>
      <div className="alphabet-9 sfprodisplay-light-black-25px">{children}</div>
    </div>
  );
}

export default Alphabet2;
