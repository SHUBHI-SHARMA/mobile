import React from "react";
import "./StatusBar.css";

function StatusBar(props) {
  const { timeI0783067, cellularConnection, wifi, battery, className } = props;

  return (
    <div className={`status-bar ${className || ""}`}>
      <div className="time-i0783067 sfprotext-normal-black-15px">{timeI0783067}</div>
      <div className="connections">
        <div className="cellular-connection" style={{ backgroundImage: `url(${cellularConnection})` }}></div>
        <img className="wifi" src={wifi} />
        <img className="battery" src={battery} />
      </div>
    </div>
  );
}

export default StatusBar;
