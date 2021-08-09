import React from "react";
import "./QuickLink.css";

function QuickLink(props) {
  const { services, address, className } = props;

  return (
    <div className={`quick-link ${className || ""}`}>
      <div className="services heading--h3">{services}</div>
      <p className="address rubik-normal-concrete-16px">{address}</p>
    </div>
  );
}

export default QuickLink;
