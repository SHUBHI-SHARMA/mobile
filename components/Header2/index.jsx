import React from "react";
import Top from "../Top";
import ValueProposition from "../ValueProposition";
import Illustration from "../Illustration";
import "./Header2.css";

function Header2(props) {
  const {
    x1518,
    x1519,
    componentLottieHttpsAssets8Lottiefi,
    topProps,
    valuePropositionProps,
    illustrationProps,
  } = props;

  return (
    <div className="header-2">
      <Top
        text56={topProps.text56}
        text53={topProps.text53}
        divider={topProps.divider}
        text55={topProps.text55}
        navMenuProps={topProps.navMenuProps}
      />
      <div className="overlap-group3-15">
        <img className="x-24" src={x1518} />
        <img className="x-25" src={x1519} />
        <ValueProposition
          text51={valuePropositionProps.text51}
          heyContentCreatorsSocialMediaInflue={valuePropositionProps.heyContentCreatorsSocialMediaInflue}
          getStarted={valuePropositionProps.getStarted}
          arrowRightProps={valuePropositionProps.arrowRightProps}
        />
        <Illustration {...illustrationProps} />
        <img className="componentlottie-20p9ce3saqjson-3" src={componentLottieHttpsAssets8Lottiefi} />
      </div>
    </div>
  );
}

export default Header2;
