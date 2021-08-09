import React from "react";
import Frame2 from "../Frame2";
import Text from "../Text";
import Numbers from "../Numbers";
import "./WhyCRAPPO.css";

function WhyCRAPPO(props) {
  const { x1712560, d, u, frame2Props, textProps, numbersProps } = props;

  return (
    <div className="why-crappo-2">
      <div className="overlap-group1-10">
        <img className="x-23" src={x1712560} />
        <img className="d-2" src={d} />
        <img className="u-3" src={u} />
        <Frame2 group={frame2Props.group} group2={frame2Props.group2} />
        <Text
          text4={textProps.text4}
          text3={textProps.text3}
          className={textProps.className}
          buttonProps={textProps.buttonProps}
        />
      </div>
      <Numbers {...numbersProps} />
    </div>
  );
}

export default WhyCRAPPO;
