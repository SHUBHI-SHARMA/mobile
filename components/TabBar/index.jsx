import React from "react";
import { Link } from "react-router-dom";
import X40ToolbarNew from "../X40ToolbarNew";
import "./TabBar.css";

function TabBar(props) {
  const { union, union2, union3, person, className, x40ToolbarNewProps } = props;

  return (
    <div className={`tab-bar ${className || ""}`}>
      <div className="overlap-group1-25">
        <div className="background-3">
          <Link to="/discover-overflow-behavior">
            <div className="x40-toolbar-new">
              <img className="union" src={union} />
            </div>
          </Link>
          <Link to="/search">
            <div className="x40-toolbar-search">
              <img className="union-1" src={union2} />
            </div>
          </Link>
          <X40ToolbarNew x40ToolbarNew={x40ToolbarNewProps.x40ToolbarNew} union={x40ToolbarNewProps.union} />
          <Link to="/chats">
            <div className="x40-toolbar-comment">
              <img className="union-2" src={union3} />
            </div>
          </Link>
          <Link to="/profile">
            <div className="x40-toolbar-bell">
              <img className="person" src={person} />
            </div>
          </Link>
        </div>
        <div className="shape-4"></div>
      </div>
    </div>
  );
}

export default TabBar;
