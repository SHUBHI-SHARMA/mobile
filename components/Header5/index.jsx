import React from "react";
import Top from "../Top";
import ValueProposition2 from "../ValueProposition2";
import "./Header5.css";

function Header5(props) {
  const {
    x1518,
    x1519,
    x1550,
    x1564,
    x1536,
    componentLottieHttpsAssets8Lottiefi,
    topProps,
    valueProposition2Props,
  } = props;

  return (
    <div className="header-7">
      <Top
        text56={topProps.text56}
        text53={topProps.text53}
        divider={topProps.divider}
        text55={topProps.text55}
        navMenuProps={topProps.navMenuProps}
      />
      <div className="overlap-group4-21">
        <img className="x-54" src={x1518} />
        <img className="x-55" src={x1519} />
        <ValueProposition2
          text204={valueProposition2Props.text204}
          heyContentCreatorsSocialMediaInflue={valueProposition2Props.heyContentCreatorsSocialMediaInflue}
          getStarted={valueProposition2Props.getStarted}
          evaChevronRightOutline={valueProposition2Props.evaChevronRightOutline}
        />
        <div className="illustration-7">
          <img className="x-56" src={x1550} />
          <div className="flex-col-81">
            <img className="x-57" src={x1564} />
            <img className="x-58" src={x1536} />
          </div>
        </div>
        <img className="componentlottie-20p9ce3saqjson-8" src={componentLottieHttpsAssets8Lottiefi} />
      </div>
    </div>
  );
}

export default Header5;
