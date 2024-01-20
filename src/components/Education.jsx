import React from "react";
import "./Education.css";
function Education() {
  return (
    <div className="education content-padding">
      <p className="title-text">Education</p>
      <div className="educationsection ">
        <div className="ed-item ed-item-1">
          <img src="https://www.svgrepo.com/show/402648/school.svg" alt="" />
          <span>
            <p>Baneswar Khabsa High School</p>
            <p>12th with PCM</p>
            <p>Academic Year: 2016 - 2018</p>
          </span>
        </div>
        <div className="ed-item ed-item-2">
          <img
            src="https://www.svgrepo.com/show/402648/school.svg"
            alt=""
            
          />
          <span>
            <p>Jalpaiguri Polytechnic Institute</p>
            <p>Diploma in Mechanical Engineering</p>
            <p>Academic Year: 2018 - 2021</p>
          </span>
        </div>
        <div className="ed-item ed-item-3">
          <img
            src="https://www.svgrepo.com/show/402648/school.svg"
            alt=""
            
          />
          <span>
            <p>CoochBehar Govt. Engineering College</p>
            <p>Computer Science and Engineering</p>
            <p>Academic Year: 2022 - 2025</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
