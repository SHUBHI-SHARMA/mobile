import React from "react";
import Header3 from "../Header3";
import Text from "../Text";
import Numbers2 from "../Numbers2";
import Frame6 from "../Frame6";
import TradeSecurely from "../TradeSecurely";
import "./Desktop12.css";

function Desktop12(props) {
  const { x106211, d, u, frame2, header3Props, textProps, numbers2Props, frame6Props, tradeSecurelyProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1-1 animate-enter2 screen">
        <Header3
          i10631518={header3Props.i10631518}
          i10631519={header3Props.i10631519}
          topProps={header3Props.topProps}
          valueProposition2Props={header3Props.valueProposition2Props}
          illustration2Props={header3Props.illustration2Props}
        />
        <div className="overlap-group-37">
          <div className="why-crappo-3">
            <div className="overlap-group1-19">
              <img className="x-28" src={x106211} />
              <img className="d-3" src={d} />
              <img className="u-4" src={u} />
              <img className="frame-2-3" src={frame2} />
              <Text text4={textProps.text4} text3={textProps.text3} buttonProps={textProps.buttonProps} />
            </div>
            <Numbers2
              iconPerson={numbers2Props.iconPerson}
              x30B2Props={numbers2Props.x30B2Props}
              text2Props={numbers2Props.text2Props}
              iconProps={numbers2Props.iconProps}
              text2Props2={numbers2Props.text2Props2}
            />
          </div>
          <Frame6 {...frame6Props} />
        </div>
        <TradeSecurely
          tradeSecurely={tradeSecurelyProps.tradeSecurely}
          cryptocurrencies={tradeSecurelyProps.cryptocurrencies}
          calculate={tradeSecurelyProps.calculate}
          checkHowMuchYouCanEarnProps={tradeSecurelyProps.checkHowMuchYouCanEarnProps}
        />
      </div>
    </div>
  );
}

export default Desktop12;
