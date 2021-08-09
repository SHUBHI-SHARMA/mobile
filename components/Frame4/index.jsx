import React from "react";
import "./Frame4.css";

function Frame4(props) {
  const { features, componentLottieHttpsAssets2Lottiefi, text130, className } = props;

  return (
    <div className={`frame-4 ${className || ""}`}>
      <div className="features-15 heading--h1">{features}</div>
      <div className="flex-row-43">
        <img className="componentlottie-20j7-po1-ejson-9" src={componentLottieHttpsAssets2Lottiefi} />
        <div className="text-128-1 heading--h3">{text130}</div>
      </div>
      <div className="flex-row-44">
        <div className="rectangle-99"></div>
        <div className="rectangle-100"></div>
        <div className="rectangle-101"></div>
      </div>
    </div>
  );
}

export default Frame4;
