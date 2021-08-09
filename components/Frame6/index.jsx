import React from "react";
import "./Frame6.css";

function Frame6(props) {
  const {
    componentLottieHttpsAssets3Lottiefi,
    features,
    text1092,
    text1102,
    text1142,
    componentLottieHttpsAssets9Lottiefi,
    componentLottieHttpsAssets2Lottiefi,
    text112,
    text1172,
    crossChainSupport,
    text115,
    componentLottieHttpsAssets2Lottiefi2,
    componentLottieHttpsAssets7Lottiefi,
    text113,
    text118,
    text111,
    text116,
    componentLottieHttpsAssets5Lottiefi,
    componentLottieHttpsAssets5Lottiefi2,
    helpSupport,
    text119,
    className,
  } = props;

  return (
    <div className={`frame-6-1 ${className || ""}`}>
      <div className="flex-col-13">
        <div className="flex-col-14">
          <div className="flex-col-15">
            <div className="flex-row-8">
              <img className="componentlottie-20ikaawl5vjson-2" src={componentLottieHttpsAssets3Lottiefi} />
              <div className="flex-col-16">
                <div className="features-8 heading--h1">{features}</div>
                <div className="text-107-1 heading--h3">{text1092}</div>
              </div>
            </div>
            <div className="overlap-group5-18">
              <div className="text-108-1 heading--h2">{text1102}</div>
              <div className="overlap-group4-11">
                <div className="text-112-1 titlelarge---medium">{text1142}</div>
                <img className="componentlottie-20w-x1ch-gjson-2" src={componentLottieHttpsAssets9Lottiefi} />
              </div>
            </div>
          </div>
          <div className="flex-row-9">
            <img className="componentlottie-30jspeqlszjson-2" src={componentLottieHttpsAssets2Lottiefi} />
            <div className="flex-col-17">
              <div className="text-110-1 heading--h2">{text112}</div>
              <div className="text-115-1 titlelarge---medium">{text1172}</div>
            </div>
          </div>
          <div className="overlap-group3-12">
            <div className="cross-chain-support-2 heading--h2">{crossChainSupport}</div>
            <div className="text-113-1 titlelarge---medium">{text115}</div>
            <img className="componentlottie-20j7-po1-ejson-2" src={componentLottieHttpsAssets2Lottiefi2} />
          </div>
        </div>
        <div className="flex-row-10">
          <img className="componentlottie-20ko8ud57vjson-2" src={componentLottieHttpsAssets7Lottiefi} />
          <div className="flex-col-18">
            <div className="text-111-1 heading--h2">{text113}</div>
            <div className="text-116-1 titlelarge---medium">{text118}</div>
          </div>
        </div>
        <div className="flex-row-11">
          <div className="flex-col-19">
            <div className="text-109-2 heading--h2">{text111}</div>
            <div className="text-114-1 titlelarge---medium">{text116}</div>
          </div>
          <img className="componentlottie-30dzassmiojson-2" src={componentLottieHttpsAssets5Lottiefi} />
        </div>
      </div>
      <div className="flex-row-12">
        <img className="componentlottie-307z3j6ycbjson-2" src={componentLottieHttpsAssets5Lottiefi2} />
        <div className="flex-col-20">
          <div className="help-support-2 heading--h2">{helpSupport}</div>
          <div className="text-117-1 titlelarge---medium">{text119}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame6;
