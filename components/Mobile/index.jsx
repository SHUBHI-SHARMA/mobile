import React from "react";
import WhyCRAPPO from "../WhyCRAPPO";
import Header2 from "../Header2";
import Frame4 from "../Frame4";
import Frame6 from "../Frame6";
import Calculate from "../Calculate";
import CheckHowMuchYouCanEarn from "../CheckHowMuchYouCanEarn";
import "./Mobile.css";

function Mobile(props) {
  const {
    x11289,
    tradeSecurely,
    cryptocurrencies,
    whyCRAPPOProps,
    header2Props,
    frame4Props,
    frame6Props,
    calculateProps,
    checkHowMuchYouCanEarnProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile smart-layers-pointers animate-enter1 screen" show-on-scroll>
        <div className="overlap-group-24">
          <WhyCRAPPO
            x1712560={whyCRAPPOProps.x1712560}
            d={whyCRAPPOProps.d}
            u={whyCRAPPOProps.u}
            frame2Props={whyCRAPPOProps.frame2Props}
            textProps={whyCRAPPOProps.textProps}
            numbersProps={whyCRAPPOProps.numbersProps}
          />
          <img className="x-22" src={x11289} />
          <Header2
            x1518={header2Props.x1518}
            x1519={header2Props.x1519}
            componentLottieHttpsAssets8Lottiefi={header2Props.componentLottieHttpsAssets8Lottiefi}
            topProps={header2Props.topProps}
            valuePropositionProps={header2Props.valuePropositionProps}
            illustrationProps={header2Props.illustrationProps}
          />
          <Frame4
            features={frame4Props.features}
            componentLottieHttpsAssets2Lottiefi={frame4Props.componentLottieHttpsAssets2Lottiefi}
            text130={frame4Props.text130}
          />
          <Frame6 {...frame6Props} />
        </div>
        <div className="trade-securely-2" style={{ backgroundImage: `url(${tradeSecurely})` }}>
          <div className="overlap-group8-8">
            <div className="bg-2"></div>
            <Calculate {...calculateProps} />
            <CheckHowMuchYouCanEarn
              text21={checkHowMuchYouCanEarnProps.text21}
              text20={checkHowMuchYouCanEarnProps.text20}
            />
          </div>
          <img className="cryptocurrencies-2" src={cryptocurrencies} />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
