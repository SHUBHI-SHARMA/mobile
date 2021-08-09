import React from "react";
import "./ArrowRight.css";

function ArrowRight(props) {
  const { src, className } = props;

  return (
    <div className={`arrow-right ${className || ""}`}>
      <div className="evachevron-right-outline">
        <img className="vector-171" src={src} />
      </div>
    </div>
  );
}

export default ArrowRight;
