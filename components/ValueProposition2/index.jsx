import React from "react";
import "./ValueProposition2.css";

function ValueProposition2(props) {
  const { text204, heyContentCreatorsSocialMediaInflue, getStarted, evaChevronRightOutline } = props;

  return (
    <div className="value-proposition-2">
      <div className="text-202 heading--h1">{text204}</div>
      <img className="hey-content-cre-with-your-work-2" src={heyContentCreatorsSocialMediaInflue} />
      <div className="button-51">
        <img className="get-started-3" src={getStarted} />
        <div className="arrow-right-3">
          <img className="evachevron-right-outline-3" src={evaChevronRightOutline} />
        </div>
      </div>
    </div>
  );
}

export default ValueProposition2;
