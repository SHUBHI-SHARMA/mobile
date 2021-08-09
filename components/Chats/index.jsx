import React from "react";
import { Link } from "react-router-dom";
import StatusBar from "../StatusBar";
import TabBar from "../TabBar";
import "./Chats.css";

function Chats(props) {
  const {
    overlapGroup,
    title,
    ellipse,
    name,
    text298,
    ellipse2,
    name2,
    text299,
    ellipse3,
    name3,
    text300,
    ellipse4,
    revShawn,
    text301,
    statusBarProps,
    tabBarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="chats screen">
        <div className="flex-col-83">
          <div className="flex-col-84">
            <div className="flex-col-85">
              <div className="overlap-group2-35">
                <div className="navigation-bar">
                  <div className="overlap-group-41" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <div className="title-5 sfprotext-normal-black-17px">{title}</div>
                  </div>
                </div>
                <StatusBar
                  timeI0783067={statusBarProps.timeI0783067}
                  cellularConnection={statusBarProps.cellularConnection}
                  wifi={statusBarProps.wifi}
                  battery={statusBarProps.battery}
                />
              </div>
              <Link to="/individual-chat">
                <div className="group-22">
                  <img className="ellipse" src={ellipse} />
                  <div className="flex-col-82">
                    <div className="name-4 roboto-bold-black-13px">{name}</div>
                    <p className="text-298 roboto-normal-black-13px">{text298}</p>
                  </div>
                </div>
              </Link>
              <div className="background-1"></div>
            </div>
            <div className="flex-row-57">
              <img className="ellipse" src={ellipse2} />
              <div className="flex-col-82">
                <div className="name-5 roboto-bold-black-13px">{name2}</div>
                <p className="text-298 roboto-normal-black-13px">{text299}</p>
              </div>
            </div>
            <div className="background"></div>
          </div>
          <div className="flex-row-57">
            <img className="ellipse" src={ellipse3} />
            <div className="flex-col-82">
              <div className="name-6 roboto-bold-black-13px">{name3}</div>
              <p className="text-298 roboto-normal-black-13px">{text300}</p>
            </div>
          </div>
          <div className="background"></div>
        </div>
        <div className="flex-row-57">
          <img className="ellipse" src={ellipse4} />
          <div className="flex-col-82">
            <div className="rev-shawn roboto-bold-black-13px">{revShawn}</div>
            <p className="text-298 roboto-normal-black-13px">{text301}</p>
          </div>
        </div>
        <div className="flex-col-86">
          <div className="background-2"></div>
          <TabBar
            union={tabBarProps.union}
            union2={tabBarProps.union2}
            union3={tabBarProps.union3}
            person={tabBarProps.person}
            x40ToolbarNewProps={tabBarProps.x40ToolbarNewProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Chats;
