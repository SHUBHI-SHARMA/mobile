import React from "react";
import Text2 from "../Text2";
import "./Numbers.css";

function Numbers(props) {
  const { overlapGroup4, vector2, vector3, vector4, vector5, vector6, text2Props, text2Props2, text2Props3 } = props;

  return (
    <div className="numbers">
      <div className="x30-b">
        <div className="icon-2">
          <div className="icon-bar-chart">
            <div className="overlap-group2-12" style={{ backgroundImage: `url(${overlapGroup4})` }}>
              <img className="vector-190" src="/img/vector-4@2x.png" />
              <img className="vector-191" src={vector2} />
              <img className="vector-192" src={vector3} />
            </div>
          </div>
        </div>
        <Text2 x30B={text2Props.x30B} text2={text2Props.text2} />
      </div>
      <div className="numbers-item">
        <div className="icon">
          <div className="overlap-group2-10">
            <div className="base-5"></div>
            <div className="icon-person">
              <img className="vector-193" src={vector4} />
              <img className="vector-194" src={vector5} />
            </div>
          </div>
        </div>
        <Text2 x30B={text2Props2.x30B} text2={text2Props2.text2} className={text2Props2.className} />
      </div>
      <div className="numbers-item">
        <div className="icon">
          <div className="overlap-group2-10">
            <div className="base-5"></div>
            <div className="icon-earth">
              <img className="vector-195" src={vector6} />
            </div>
          </div>
        </div>
        <Text2 x30B={text2Props3.x30B} text2={text2Props3.text2} className={text2Props3.className} />
      </div>
    </div>
  );
}

export default Numbers;
