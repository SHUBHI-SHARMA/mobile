import React from "react";
import StatusBar from "../StatusBar";
import Register from "../Register";
import Component2 from "../Component2";
import "./Search.css";

function Search(props) {
  const { statusBarProps, registerProps, component2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="search screen">
        <StatusBar
          timeI0783067={statusBarProps.timeI0783067}
          cellularConnection={statusBarProps.cellularConnection}
          wifi={statusBarProps.wifi}
          battery={statusBarProps.battery}
          className={statusBarProps.className}
        />
        <Register>{registerProps.children}</Register>
        <Component2>{component2Props.children}</Component2>
      </div>
    </div>
  );
}

export default Search;
