import React from "react";
import EnterYourEmail from "../EnterYourEmail";
import Button4 from "../Button4";
import "./StartMining.css";

function StartMining(props) {
  const { startMining, x172722, x172723, startMiningNow, text49, className, enterYourEmailProps, button4Props } = props;

  return (
    <div className={`start-mining ${className || ""}`} style={{ backgroundImage: `url(${startMining})` }}>
      <div className="overlap-group39">
        <img className="x-12" src={x172722} />
        <img className="x-13" src={x172723} />
        <div className="start-mining-now" style={{ backgroundImage: `url(${startMiningNow})` }}>
          <div className="text-47-1 heading--h3">{text49}</div>
          <div className="enter-your-email">
            <EnterYourEmail enterYourEmail={enterYourEmailProps.enterYourEmail} form={enterYourEmailProps.form} />
            <Button4>{button4Props.children}</Button4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartMining;
