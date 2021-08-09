import React from "react";
import Header7 from "../Header7";
import Frame2 from "../Frame2";
import Text from "../Text";
import Numbers from "../Numbers";
import Frame6 from "../Frame6";
import Calculate from "../Calculate";
import CheckHowMuchYouCanEarn from "../CheckHowMuchYouCanEarn";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    x106211,
    d,
    u,
    tradeSecurely,
    cryptocurrencies,
    headerProps,
    frame2Props,
    textProps,
    numbersProps,
    frame6Props,
    calculateProps,
    checkHowMuchYouCanEarnProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 animate-enter screen">
        <Header7
          i17123521518={headerProps.i17123521518}
          i17123521519={headerProps.i17123521519}
          topProps={headerProps.topProps}
          valuePropositionProps={headerProps.valuePropositionProps}
          illustrationProps={headerProps.illustrationProps}
        />
        <div className="overlap-group-23">
          <div className="why-crappo-1">
            <div className="overlap-group1-8">
              <img className="x-19" src={x106211} />
              <img className="d-1" src={d} />
              <img className="u-2" src={u} />
              <Frame2 group={frame2Props.group} group2={frame2Props.group2} className={frame2Props.className} />
              <Text text4={textProps.text4} text3={textProps.text3} buttonProps={textProps.buttonProps} />
            </div>
            <Numbers {...numbersProps} />
          </div>
          <Frame6 {...frame6Props} />
        </div>
        <div className="trade-securely-1" style={{ backgroundImage: `url(${tradeSecurely})` }}>
          <div className="overlap-group6-12">
            <div className="bg-1"></div>
            <img className="cryptocurrencies-1" src={cryptocurrencies} />
            <Calculate {...calculateProps} />
            <CheckHowMuchYouCanEarn
              text21={checkHowMuchYouCanEarnProps.text21}
              text20={checkHowMuchYouCanEarnProps.text20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
