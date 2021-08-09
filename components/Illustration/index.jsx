import React from "react";
import "./Illustration.css";

function Illustration(props) {
  const {
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
    vector18,
    vector19,
    vector20,
    vector21,
    vector22,
    vector23,
    vector24,
    vector25,
    vector26,
    vector27,
    vector28,
    vector29,
    vector30,
    vector31,
    group,
    vector32,
    vector33,
    vector34,
    vector35,
    vector36,
    vector37,
    vector38,
    className,
  } = props;

  return (
    <div className={`illustration ${className || ""}`}>
      <div className="x-3">
        <div className="overlap-group7-2">
          <div className="group-3">
            <div className="overlap-group-1">
              <img className="vector-14" src="/img/vector-43@2x.png" />
              <img className="vector-15" src={vector2} />
              <img className="vector-16" src={vector3} />
              <img className="vector-16" src={vector4} />
            </div>
          </div>
          <img className="vector-23" src={vector5} />
          <img className="vector-24" src={vector6} />
          <img className="vector-25" src={vector7} />
          <img className="vector-26" src={vector8} />
          <img className="vector-27" src={vector9} />
          <img className="vector-28" src={vector10} />
          <img className="vector-29" src={vector11} />
        </div>
      </div>
      <div className="flex-col-10">
        <div className="x-4">
          <img className="vector-30" src={vector12} />
          <div className="overlap-group3-5">
            <div className="group-4">
              <div className="overlap-group-1">
                <img className="vector-14" src={vector13} />
                <img className="vector-15" src={vector14} />
                <img className="vector-16" src={vector15} />
                <img className="vector-16" src={vector16} />
              </div>
            </div>
            <img className="vector-31" src={vector17} />
            <img className="vector-32" src={vector18} />
            <img className="vector-33" src={vector19} />
            <img className="vector-34" src={vector20} />
            <img className="vector-35" src={vector21} />
            <img className="vector-36" src={vector22} />
            <img className="vector-37" src={vector23} />
            <img className="vector-38" src={vector24} />
            <img className="vector-39" src={vector25} />
            <img className="vector-40" src={vector26} />
            <img className="vector-41" src={vector27} />
            <img className="vector-42" src={vector28} />
          </div>
        </div>
        <div className="x-5">
          <div className="overlap-group6-2">
            <div className="group-5">
              <div className="overlap-group3-6">
                <img className="vector-14" src={vector29} />
                <img className="vector-43" src={vector30} />
                <img className="vector-16" src={vector31} />
                <div className="group-8" style={{ backgroundImage: `url(${group})` }}></div>
              </div>
            </div>
            <img className="vector-44" src={vector32} />
            <img className="vector-45" src={vector33} />
            <img className="vector-46" src={vector34} />
            <img className="vector-47" src={vector35} />
            <img className="vector-48" src={vector36} />
            <img className="vector-49" src={vector37} />
            <img className="vector-50" src={vector38} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
