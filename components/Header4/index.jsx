import React from "react";
import Top from "../Top";
import ValueProposition2 from "../ValueProposition2";
import Illustration2 from "../Illustration2";
import "./Header4.css";

function Header4(props) {
  const {
    x1518,
    x1519,
    componentLottieHttpsAssets8Lottiefi,
    topProps,
    valueProposition2Props,
    illustration2Props,
  } = props;

  return (
    <div className="header-5">
      <Top
        text56={topProps.text56}
        text53={topProps.text53}
        divider={topProps.divider}
        text55={topProps.text55}
        navMenuProps={topProps.navMenuProps}
      />
      <div className="overlap-group3-27">
        <img className="x-50" src={x1518} />
        <img className="x-51" src={x1519} />
        <ValueProposition2
          text204={valueProposition2Props.text204}
          heyContentCreatorsSocialMediaInflue={valueProposition2Props.heyContentCreatorsSocialMediaInflue}
          getStarted={valueProposition2Props.getStarted}
          evaChevronRightOutline={valueProposition2Props.evaChevronRightOutline}
        />
        <Illustration2
          i10631550={illustration2Props.i10631550}
          i10631564={illustration2Props.i10631564}
          i10631536={illustration2Props.i10631536}
        />
        <img className="componentlottie-20p9ce3saqjson-6" src={componentLottieHttpsAssets8Lottiefi} />
      </div>
    </div>
  );
}

export default Header4;
