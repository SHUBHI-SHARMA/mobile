import React from "react";
import "./Frame2.css";

function Frame2(props) {
  const { group, group2, className } = props;

  return (
    <div className={`frame-2 ${className || ""}`}>
      <div className="run-1">
        <div className="overlap-group4-4">
          <img className="group" src={group} />
          <img className="group" src={group2} />
        </div>
      </div>
    </div>
  );
}

export default Frame2;
