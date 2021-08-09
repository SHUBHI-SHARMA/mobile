import React from "react";
import { Link } from "react-router-dom";
import StatusBar from "../StatusBar";
import Register from "../Register";
import Component3 from "../Component3";
import Button6 from "../Button6";
import TabBar from "../TabBar";
import "./DiscoveroverflowBehavior.css";

function DiscoveroverflowBehavior(props) {
  const {
    whatsNewToday,
    rectangle28,
    rectangle29,
    rectangle210,
    rectangle211,
    browseAll,
    rectangle2,
    rectangle22,
    rectangle24,
    rectangle26,
    rectangle292,
    rectangle21,
    rectangle23,
    rectangle25,
    rectangle27,
    rectangle2102,
    statusBarProps,
    registerProps,
    component3Props,
    component32Props,
    component33Props,
    component34Props,
    button6Props,
    tabBarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="discover-overflow-behavior screen">
        <div className="flex-col-89">
          <StatusBar
            timeI0783067={statusBarProps.timeI0783067}
            cellularConnection={statusBarProps.cellularConnection}
            wifi={statusBarProps.wifi}
            battery={statusBarProps.battery}
            className={statusBarProps.className}
          />
          <Register className={registerProps.className}>{registerProps.children}</Register>
          <div className="whats-new-today valign-text-middle roboto-black-black-13px">{whatsNewToday}</div>
          <a
            href="javascript:ShowOverlay('photo-open-overlay-1', 'animate-appear');"
            className="align-self-flex-center"
          >
            <div className="frame">
              <div className="flex-col-90">
                <img className="rectangle-2" src={rectangle28} />
                <Component3
                  ellipse={component3Props.ellipse}
                  text311={component3Props.text311}
                  text312={component3Props.text312}
                />
              </div>
              <div className="flex-col-88">
                <img className="rectangle-2" src={rectangle29} />
                <Component3
                  ellipse={component32Props.ellipse}
                  text311={component32Props.text311}
                  text312={component32Props.text312}
                  className={component32Props.className}
                />
              </div>
              <div className="flex-col-88">
                <img className="rectangle-2" src={rectangle210} />
                <Component3
                  ellipse={component33Props.ellipse}
                  text311={component33Props.text311}
                  text312={component33Props.text312}
                  className={component33Props.className}
                />
              </div>
              <div className="flex-col-88">
                <img className="rectangle-2" src={rectangle211} />
                <Component3
                  ellipse={component34Props.ellipse}
                  text311={component34Props.text311}
                  text312={component34Props.text312}
                  className={component34Props.className}
                />
              </div>
            </div>
          </a>
        </div>
        <div className="flex-row-60">
          <div className="flex-col-91">
            <div className="browse-all valign-text-middle roboto-black-black-13px">{browseAll}</div>
            <img className="rectangle-2-3" src={rectangle2} />
            <img className="rectangle-22" src={rectangle22} />
            <img className="rectangle-2-1" src={rectangle24} />
            <img className="rectangle-2-2" src={rectangle26} />
            <img className="rectangle-2-2" src={rectangle292} />
          </div>
          <div className="flex-col-92">
            <img className="rectangle-21" src={rectangle21} />
            <a href="javascript:ShowOverlay('photo-open-overlay', 'animate-appear');">
              <img className="rectangle-23" src={rectangle23} />
            </a>
            <img className="rectangle-2-1" src={rectangle25} />
            <img className="rectangle-2-2" src={rectangle27} />
            <img className="rectangle-2-1" src={rectangle2102} />
          </div>
        </div>
        <Button6>{button6Props.children}</Button6>
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

export default DiscoveroverflowBehavior;
