import React from "react";
import Text from "../Text";
import Numbers2 from "../Numbers2";
import Header4 from "../Header4";
import Frame4 from "../Frame4";
import Frame6 from "../Frame6";
import TradeSecurely from "../TradeSecurely";
import "./Mobile2.css";

function Mobile2(props) {
  const {
    x1743,
    d,
    u,
    frame2,
    x11289,
    textProps,
    numbers2Props,
    header4Props,
    frame4Props,
    frame6Props,
    tradeSecurelyProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-1 smart-layers-pointers animate-enter3 screen" show-on-scroll>
        <div className="overlap-group-39">
          <div className="why-crappo-5">
            <div className="overlap-group1-23">
              <img className="x-46" src={x1743} />
              <img className="d-5" src={d} />
              <img className="u-6" src={u} />
              <img className="frame-2-5" src={frame2} />
              <Text
                text4={textProps.text4}
                text3={textProps.text3}
                className={textProps.className}
                buttonProps={textProps.buttonProps}
              />
            </div>
            <Numbers2
              iconPerson={numbers2Props.iconPerson}
              x30B2Props={numbers2Props.x30B2Props}
              text2Props={numbers2Props.text2Props}
              iconProps={numbers2Props.iconProps}
              text2Props2={numbers2Props.text2Props2}
            />
          </div>
          <img className="x-47" src={x11289} />
          <Header4
            x1518={header4Props.x1518}
            x1519={header4Props.x1519}
            componentLottieHttpsAssets8Lottiefi={header4Props.componentLottieHttpsAssets8Lottiefi}
            topProps={header4Props.topProps}
            valueProposition2Props={header4Props.valueProposition2Props}
            illustration2Props={header4Props.illustration2Props}
          />
          <Frame4
            features={frame4Props.features}
            componentLottieHttpsAssets2Lottiefi={frame4Props.componentLottieHttpsAssets2Lottiefi}
            text130={frame4Props.text130}
          />
          <Frame6 {...frame6Props} />
        </div>
        <TradeSecurely
          tradeSecurely={tradeSecurelyProps.tradeSecurely}
          cryptocurrencies={tradeSecurelyProps.cryptocurrencies}
          calculate={tradeSecurelyProps.calculate}
          className={tradeSecurelyProps.className}
          checkHowMuchYouCanEarnProps={tradeSecurelyProps.checkHowMuchYouCanEarnProps}
        />
      </div>
    </div>
  );
}

export default Mobile2;
