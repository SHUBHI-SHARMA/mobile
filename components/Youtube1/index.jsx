import React from "react";
import "./Youtube1.css";

function Youtube1(props) {
  const { src, className } = props;

  return (
    <div className={`youtube-1 ${className || ""}`}>
      <img className="vector-224" src={src} />
    </div>
  );
}

export default Youtube1;
