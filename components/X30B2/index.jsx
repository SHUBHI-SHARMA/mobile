import React from "react";
import Text2 from "../Text2";
import "./X30B2.css";

function X30B2(props) {
  const { iconBarChart, text2Props } = props;

  return (
    <div className="x30-b-9">
      <div className="icon-8">
        <img className="icon-bar-chart-2" src={iconBarChart} />
      </div>
      <Text2 x30B={text2Props.x30B} text2={text2Props.text2} />
    </div>
  );
}

export default X30B2;
