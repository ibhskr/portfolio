import React from "react";
import "./BodyA.css";
import mainImage from "../assets/img-1.png";
import { TypeAnimation } from "react-type-animation";
function BodyA() {
  return (
    <div className="bodyA content-padding">
      <div className="bodyA-text">
        <TypeAnimation 
          sequence={[
            "Hey there, glad you're here!",
            1000,
            "I'm a Full Stack Developer",
            1000,
            "Building Modern Web Applications",
            1000,
            "Creating User-Friendly Designs",
            1000,
            "Let's Transform Your Vision Into Reality",
            1000,
          ]}
          speed={20}
          style={{ fontSize: "2em", fontWeight: "bold" }}
          repeat={Infinity}
        />
      </div>
      <div className="profile_pic">
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
}

export default BodyA;
