import React from "react";
import Top from "../Top";
import ValueProposition2 from "../ValueProposition2";
import Illustration2 from "../Illustration2";
import "./Header3.css";

function Header3(props) {
  const { i10631518, i10631519, topProps, valueProposition2Props, illustration2Props } = props;

  return (
    <div className="header-3">
      <Top
        text56={topProps.text56}
        text53={topProps.text53}
        divider={topProps.divider}
        text55={topProps.text55}
        navMenuProps={topProps.navMenuProps}
      />
      <div className="overlap-group1-21">
        <img className="x-30" src={i10631518} />
        <img className="x-31" src={i10631519} />
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
        <div className="componentlottie-20p9ce3saqjson-4">
          <video
            src="https://lottiefiles.com/46051-trying-to-touch-bitcoin"
            loop
            autoplay="autoplay"
            playsinline
            muted
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Header3;
