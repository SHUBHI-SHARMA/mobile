import React from "react";
import { Link } from "react-router-dom";
import "./Component2.css";

function Component2(props) {
  const { children } = props;

  return (
    <a href="javascript:ShowOverlay('search-keyboard-overlay', 'animate-appear');" className="align-self-flex-center">
      <div className="component-2 border-2px-black">
        <div className="text-308 valign-text-middle">{children}</div>
      </div>
    </a>
  );
}

export default Component2;
