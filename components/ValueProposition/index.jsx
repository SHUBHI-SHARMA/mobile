import React from "react";
import ArrowRight from "../ArrowRight";
import "./ValueProposition.css";

function ValueProposition(props) {
  const { text51, heyContentCreatorsSocialMediaInflue, getStarted, arrowRightProps } = props;

  return (
    <div className="value-proposition">
      <div className="text-99 heading--h1">{text51}</div>
      <img className="hey-content-cre-with-your-work" src={heyContentCreatorsSocialMediaInflue} />
      <div className="button-49">
        <img className="get-started-1" src={getStarted} />
        <ArrowRight src={arrowRightProps.src} className={arrowRightProps.className} />
      </div>
    </div>
  );
}

export default ValueProposition;
