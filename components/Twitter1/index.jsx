import React from "react";
import "./Twitter1.css";

function Twitter1(props) {
  const { src } = props;

  return (
    <div className="twitter-1">
      <img className="vector-226" src={src} />
    </div>
  );
}

export default Twitter1;
