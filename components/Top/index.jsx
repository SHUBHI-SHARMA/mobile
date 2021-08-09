import React from "react";
import NavMenu from "../NavMenu";
import "./Top.css";

function Top(props) {
  const { text56, text53, divider, text55, navMenuProps } = props;

  return (
    <div className="top-1">
      <div className="text-102 inter-bold-white-28px">{text56}</div>
      <NavMenu
        text50={navMenuProps.text50}
        text52={navMenuProps.text52}
        text51={navMenuProps.text51}
        place={navMenuProps.place}
        className={navMenuProps.className}
      />
      <div className="sign-in">
        <div className="login-i10631720 body--small---medium">{text53}</div>
        <img className="divider" src={divider} />
        <div className="button-42">
          <div className="place-10 body--small---medium">{text55}</div>
        </div>
      </div>
    </div>
  );
}

export default Top;
