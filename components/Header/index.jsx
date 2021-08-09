import React from "react";
import NavMenu from "../NavMenu";
import Illustration from "../Illustration";
import "./Header.css";

function Header(props) {
  const { text53, i17123521518, i17123521519, navMenuProps, illustrationProps } = props;

  return (
    <div className="header">
      <div className="top">
        <div className="text-53 inter-bold-white-28px">{text53}</div>
        <NavMenu
          text50={navMenuProps.text50}
          text52={navMenuProps.text52}
          text51={navMenuProps.text51}
          place={navMenuProps.place}
        />
      </div>
      <div className="overlap-group5-2">
        <img className="x-1" src={i17123521518} />
        <img className="x-2" src={i17123521519} />
        <Illustration {...illustrationProps} />
        <div className="componentlottie-20p9ce3saqjson">
          <img width="100%" height="100%" src="https://sarvvid-ai.com/wp-content/uploads/2021/08/first.gif" />
        </div>
      </div>
    </div>
  );
}

export default Header;
