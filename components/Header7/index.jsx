import React from "react";
import Top from "../Top";
import ValueProposition from "../ValueProposition";
import Illustration from "../Illustration";
import "./Header7.css";

function Header7(props) {
  const { i17123521518, i17123521519, topProps, valuePropositionProps, illustrationProps } = props;

  return (
    <div className="header-1">
      <Top
        text56={topProps.text56}
        text53={topProps.text53}
        divider={topProps.divider}
        text55={topProps.text55}
        navMenuProps={topProps.navMenuProps}
      />
      <div className="overlap-group1-9">
        <img className="x-20" src={i17123521518} />
        <img className="x-21" src={i17123521519} />
        <ValueProposition
          text51={valuePropositionProps.text51}
          heyContentCreatorsSocialMediaInflue={valuePropositionProps.heyContentCreatorsSocialMediaInflue}
          getStarted={valuePropositionProps.getStarted}
          arrowRightProps={valuePropositionProps.arrowRightProps}
        />
        <Illustration {...illustrationProps} />
        <div className="componentlottie-20p9ce3saqjson-2">
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

export default Header7;
