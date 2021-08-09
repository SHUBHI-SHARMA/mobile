import React from "react";
import StatusBar from "../StatusBar";
import TabBar from "../TabBar";
import "./IndividualChat.css";

function IndividualChat(props) {
  const {
    overlapGroup3,
    title,
    chevron,
    label,
    ellipse,
    overlapGroup1,
    text304,
    overlapGroup2,
    text306,
    ellipse2,
    ellipse3,
    overlapGroup,
    text305,
    statusBarProps,
    tabBarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="individual-chat screen">
        <div className="overlap-group5-30">
          <div className="navigation-bar-1">
            <div className="overlap-group3-29" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="title-6 sfprotext-normal-black-17px">{title}</div>
              <a href="javascript:history.back()">
                <div className="left-action">
                  <img className="chevron" src={chevron} />
                  <div className="label">{label}</div>
                </div>
              </a>
            </div>
          </div>
          <StatusBar
            timeI0783067={statusBarProps.timeI0783067}
            cellularConnection={statusBarProps.cellularConnection}
            wifi={statusBarProps.wifi}
            battery={statusBarProps.battery}
          />
        </div>
        <div className="flex-row-59">
          <img className="ellipse-3" src={ellipse} />
          <div className="overlap-group1-27" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <p className="text-30-1 roboto-normal-black-13px">{text304}</p>
          </div>
        </div>
        <div className="flex-row-58">
          <div className="overlap-group2-36" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <p className="text-30-1 roboto-normal-black-13px">{text306}</p>
          </div>
          <img className="ellipse-4" src={ellipse2} />
        </div>
        <div className="flex-row-58">
          <img className="ellipse-3" src={ellipse3} />
          <div className="overlap-group-47" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <p className="text-305 roboto-normal-black-13px">{text305}</p>
          </div>
        </div>
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

export default IndividualChat;
