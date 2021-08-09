import React from "react";
import StatusBar from "../StatusBar";
import Register from "../Register";
import Component4 from "../Component4";
import Button6 from "../Button6";
import TabBar from "../TabBar";
import "./SearchResults.css";

function SearchResults(props) {
  const {
    allResults,
    rectangle2,
    rectangle21,
    rectangle22,
    rectangle23,
    rectangle24,
    rectangle25,
    rectangle26,
    rectangle27,
    rectangle28,
    rectangle29,
    rectangle210,
    rectangle211,
    rectangle212,
    rectangle213,
    rectangle214,
    statusBarProps,
    registerProps,
    component4Props,
    button6Props,
    tabBarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search-results screen">
        <StatusBar
          timeI0783067={statusBarProps.timeI0783067}
          cellularConnection={statusBarProps.cellularConnection}
          wifi={statusBarProps.wifi}
          battery={statusBarProps.battery}
          className={statusBarProps.className}
        />
        <Register className={registerProps.className}>{registerProps.children}</Register>
        <Component4>{component4Props.children}</Component4>
        <div className="all-results-1 valign-text-middle roboto-black-black-13px">{allResults}</div>
        <div className="flex-row-64">
          <img className="rectangle-2-7" src={rectangle2} />
          <img className="rectangle-2-8" src={rectangle21} />
          <img className="rectangle-2-8" src={rectangle22} />
        </div>
        <div className="flex-row-63">
          <img className="rectangle-2-7" src={rectangle23} />
          <img className="rectangle-2-8" src={rectangle24} />
          <img className="rectangle-2-8" src={rectangle25} />
        </div>
        <div className="flex-row-63">
          <img className="rectangle-2-7" src={rectangle26} />
          <img className="rectangle-2-8" src={rectangle27} />
          <img className="rectangle-2-8" src={rectangle28} />
        </div>
        <div className="flex-row-63">
          <img className="rectangle-2-7" src={rectangle29} />
          <img className="rectangle-2-8" src={rectangle210} />
          <img className="rectangle-2-8" src={rectangle211} />
        </div>
        <div className="flex-row-63">
          <img className="rectangle-2-7" src={rectangle212} />
          <img className="rectangle-2-8" src={rectangle213} />
          <img className="rectangle-2-8" src={rectangle214} />
        </div>
        <Button6 className={button6Props.className}>{button6Props.children}</Button6>
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

export default SearchResults;
