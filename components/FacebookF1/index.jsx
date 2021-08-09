import React from "react";
import "./FacebookF1.css";

function FacebookF1(props) {
  const { src } = props;

  return (
    <div className="facebook-f-1">
      <img className="vector-220" src={src} />
    </div>
  );
}

export default FacebookF1;
