import React from "react";
import "./BodyA.css";
import pp from "../assets/img-1.png";
function BodyA() {
  return (
    <div className="bodyA content-padding">
      <div className="bodyA-text">
        Hi, Welcome to my profile..
      </div>
      <div className="profile_pic">
        <img src={pp} alt="" />
      </div>
    </div>
  );
}

export default BodyA;
