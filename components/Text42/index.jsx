import React from "react";
import Button3 from "../Button3";
import "./Text42.css";

function Text42(props) {
  const { detailedStatistics, text44, className, button3Props } = props;

  return (
    <div className={`text-36 ${className || ""}`}>
      <div className="detailed-statistics-1 heading--h3">{detailedStatistics}</div>
      <p className="text-42 rubik-normal-bon-jour-16px">{text44}</p>
      <Button3 className={button3Props.className}>{button3Props.children}</Button3>
    </div>
  );
}

export default Text42;
