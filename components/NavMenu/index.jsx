import React from "react";
import "./NavMenu.css";

function NavMenu(props) {
  const { text50, text52, text51, place, className } = props;

  return (
    <div className={`nav-menu ${className || ""}`}>
      <div className="text-50 rubik-normal-white-16px">{text50}</div>
      <div className="text-52 rubik-normal-white-16px">{text52}</div>
      <div className="text-51 rubik-normal-white-16px">{text51}</div>
      <div className="place-1 rubik-normal-white-16px">{place}</div>
    </div>
  );
}

export default NavMenu;
