import React from "react";
import "./Instagram1.css";

function Instagram1(props) {
  const { src } = props;

  return (
    <div className="instagram-1">
      <img className="vector-222" src={src} />
    </div>
  );
}

export default Instagram1;
