import React from "react";
import "./Group1162.css";

function Group1162(props) {
  const { spanText, spanText2, trends } = props;

  return (
    <div className="group-116-2">
      <div className="group-115-2">
        <div className="group-96-2">
          <div className="overlap-group5-8">
            <div className="ellipse-44-2"></div>
            <div className="ant-designcaret-up-outlined-2">
              <img className="vector-124" src="/img/vector-14@2x.png" />
            </div>
          </div>
        </div>
        <div className="text-41 valign-text-middle rubik-medium-white-14px-2">
          <span>
            <span className="span-4 rubik-medium-cyan--aqua-14px">{spanText}</span>
            <span className="span-4 rubik-normal-white-14px">{spanText2}</span>
          </span>
        </div>
      </div>
      <div className="trends valign-text-middle rubik-normal-silver-10px">{trends}</div>
    </div>
  );
}

export default Group1162;
