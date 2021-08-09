import React from "react";
import X30B2 from "../X30B2";
import Text2 from "../Text2";
import Icon from "../Icon";
import "./Numbers2.css";

function Numbers2(props) {
  const { iconPerson, x30B2Props, text2Props, iconProps, text2Props2 } = props;

  return (
    <div className="numbers-2">
      <X30B2 iconBarChart={x30B2Props.iconBarChart} text2Props={x30B2Props.text2Props} />
      <div className="numbers-item-2">
        <div className="icon-4">
          <div className="overlap-group2-27">
            <div className="base-11"></div>
            <img className="icon-person-2" src={iconPerson} />
          </div>
        </div>
        <Text2 x30B={text2Props.x30B} text2={text2Props.text2} className={text2Props.className} />
      </div>
      <div className="numbers-item-2">
        <Icon src={iconProps.src} />
        <Text2 x30B={text2Props2.x30B} text2={text2Props2.text2} className={text2Props2.className} />
      </div>
    </div>
  );
}

export default Numbers2;
