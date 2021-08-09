import React from "react";
import "./Icon.css";

function Icon(props) {
  const { src } = props;

  return (
    <div className="icon-13">
      <div className="overlap-group2-31">
        <div className="base-15"></div>
        <img className="icon-earth-2" src={src} />
      </div>
    </div>
  );
}

export default Icon;
