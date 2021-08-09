import React from "react";
import Component from "../Component";
import "./PhotoOpenoverlay.css";

function PhotoOpenoverlay(props) {
  const { photoOpenOverlay, overlapGroup, union, className, componentProps } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className={`photo-open-overlay-1 screen ${className || ""}`}
        style={{ backgroundImage: `url(${photoOpenOverlay})` }}
      >
        <div className="overlap-group-45" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Component
            ellipse={componentProps.ellipse}
            text304={componentProps.text304}
            text305={componentProps.text305}
            className={componentProps.className}
          />
          <img className="union-24" src={union} />
        </div>
      </div>
    </div>
  );
}

export default PhotoOpenoverlay;
