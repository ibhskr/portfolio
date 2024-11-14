import React from "react";
import "./Education.css";
import underlineImage from "../assets/yellow-vector.svg";
import StaggerText from "react-stagger-text";
function Education() {
  return (
    <div className="education content-padding">
      <div className="title-text">
        <StaggerText
          staggerType="letter"
          staggerDuration={1}
          startDelay={0.06}
          // startDelay={500}
        >
          Education
        </StaggerText>
        <img src={underlineImage} alt="" srcset="" />
      </div>
      <div className="educationsection ">
        <div className="ed-item ">
          <p className="ed-tag">High School</p>
          <div>
            <h3>Baneswar Khabsa High School</h3>
            <p>12th with PCM</p>
            <p>Academic Year: 2016 - 2018</p>
          </div>
        </div>
        <div className="ed-item ">
          <p className="ed-tag">Diploma</p>
          <h3>Jalpaiguri Polytechnic Institute</h3>
          <p>Diploma in Mechanical Engineering</p>
          <p>Academic Year: 2018 - 2021</p>
        </div>
        <div className="ed-item ">
          <p className="ed-tag">B.Tech</p>
          <h3>CoochBehar Govt. Engineering College</h3>
          <p>Computer Science and Engineering</p>
          <p>Academic Year: 2022 - 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
