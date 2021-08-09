import React from "react";
import "./X40ToolbarNew.css";

function X40ToolbarNew(props) {
  const { x40ToolbarNew, union } = props;

  return (
    <div className="x40-toolbar-new-2" style={{ backgroundImage: `url(${x40ToolbarNew})` }}>
      <img className="union-18" src={union} />
    </div>
  );
}

export default X40ToolbarNew;
