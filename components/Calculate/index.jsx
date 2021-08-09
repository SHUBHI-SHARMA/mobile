import React from "react";
import "./Calculate.css";

function Calculate(props) {
  const {
    enterHashRate,
    text19,
    form,
    thS,
    form2,
    calculate,
    overlapGroup3,
    text16,
    spanText,
    spanText2,
    text17,
  } = props;

  return (
    <div className="calculate-1">
      <div className="enter-hash-rate-1" style={{ backgroundImage: `url(${enterHashRate})` }}>
        <div className="enter-your-hash-rate">
          <div className="text-17 bodylarge---regular">{text19}</div>
          <img className="form" src={form} />
        </div>
        <div className="ths">
          <div className="flex-row-5">
            <div className="ths-1 bodylarge---regular">{thS}</div>
            <div className="icon-arrow-down">
              <img className="vector-107" src="/img/vector-47@2x.png" />
            </div>
          </div>
          <img className="form-1" src={form2} />
        </div>
        <div className="button-10">
          <div className="calculate-2 bodystandard---medium">{calculate}</div>
        </div>
      </div>
      <div className="estimated-revenue">
        <div className="overlap-group3-7" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <div className="text-14 rubik-medium-royal-blue-16px">{text16}</div>
          <div className="text-16 rubik-bold-white-32px">
            <span className="span-1 rubik-bold-ebony-32px">{spanText}</span>
            <span className="span-1 rubik-bold-royal-blue-32px">{spanText2}</span>
          </div>
          <p className="text-15 rubik-normal-gray-16px">{text17}</p>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
