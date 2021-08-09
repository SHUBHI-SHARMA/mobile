import React from "react";
import Button7 from "../Button7";
import Button6 from "../Button6";
import StatusBar from "../StatusBar";
import TabBar from "../TabBar";
import "./Profile.css";

function Profile(props) {
  const {
    ellipse,
    name,
    sanFranciscoCa,
    rectangle2,
    rectangle21,
    rectangle23,
    rectangle22,
    rectangle25,
    rectangle24,
    button7Props,
    button6Props,
    statusBarProps,
    button62Props,
    tabBarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile screen">
        <div className="overlap-group2-37">
          <div className="overlap-group-48">
            <div className="rectangle"></div>
            <img className="ellipse-6" src={ellipse} />
            <div className="name-10 valign-text-middle comfortaa-regular-normal-black-36px">{name}</div>
            <div className="san-francisco-ca valign-text-middle roboto-black-black-13px">{sanFranciscoCa}</div>
            <img className="rectangle-2-4" src={rectangle2} />
            <img className="rectangle-21-1" src={rectangle21} />
            <img className="rectangle-23-1" src={rectangle23} />
            <img className="rectangle-22-1" src={rectangle22} />
            <Button7>{button7Props.children}</Button7>
            <Button6 className={button6Props.className}>{button6Props.children}</Button6>
          </div>
          <img className="rectangle-25" src={rectangle25} />
          <img className="rectangle-24" src={rectangle24} />
          <StatusBar
            timeI0783067={statusBarProps.timeI0783067}
            cellularConnection={statusBarProps.cellularConnection}
            wifi={statusBarProps.wifi}
            battery={statusBarProps.battery}
          />
        </div>
        <Button6>{button62Props.children}</Button6>
        <TabBar
          union={tabBarProps.union}
          union2={tabBarProps.union2}
          union3={tabBarProps.union3}
          person={tabBarProps.person}
          className={tabBarProps.className}
          x40ToolbarNewProps={tabBarProps.x40ToolbarNewProps}
        />
      </div>
    </div>
  );
}

export default Profile;
