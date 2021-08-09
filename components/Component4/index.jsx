import React from "react";
import "./Component4.css";

function Component4(props) {
  const { children } = props;

  return (
    <div className="component-4 border-2px-black">
      <div className="dogs-i0861074 valign-text-middle roboto-normal-black-15px">{children}</div>
    </div>
  );
}

export default Component4;
