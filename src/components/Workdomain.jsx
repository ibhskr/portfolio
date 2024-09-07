import React from "react";
import "./Workdomain.css";
import underlineImage from "../assets/yellow-vector.svg";
import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import databaseImg from "../assets/database.png";
import programingImg from "../assets/coding.png";
import toolsImg from "../assets/tools.png";
import background1 from "../assets/background-1.png";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";

import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import tailwind from "../assets/tailwind-css.svg";
import java from "../assets/java.svg";
function Workdomain() {
  return (
    <div className="workdomain content-padding">
      <div className="title-text">
        <p>Work Domain</p>
        <img src={underlineImage} alt="underline" />
      </div>
      <div className="workdomain-main">
        {/* Frontend Section */}
        <div className="workdomain-item">
          <img src={frontendImg} className="center-img" alt="frontend" />
          <div className="center">
            <p>Frontend</p>
            <img
              className="background-img"
              src={background1}
              alt="background"
            />
            <div className="workdomain-icon">
              <img src={htmlImg} alt="HTML5" />
              <img src={cssImg} alt="CSS" />
              <img src={javascript} alt="JS" />
              <img src={react} alt="React" />
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>

        {/* Backend Section */}
        <div className="workdomain-item">
          <img src={backendImg} className="center-img" alt="backend" />
          <div className="center">
            <p>Backend</p>
            <img
              className="background-img"
              src={background1}
              alt="background"
            />
            <div className="workdomain-icon">
              <img src={nodejs} alt="Node.js" />
              <img src={express} alt="Express.js" />
            </div>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>

        {/* Database Section */}
        <div className="workdomain-item">
          <img src={databaseImg} className="center-img" alt="database" />
          <div className="center">
            <p>Database</p>
            <img
              className="background-img"
              src={background1}
              alt="background"
            />
            <div className="workdomain-icon">
              <img src={mongodb} alt="MongoDB" />
            </div>
            <ul>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        {/* Programming Language Section */}
        <div className="workdomain-item">
          <img src={programingImg} className="center-img" alt="programming" />
          <div className="center">
            <p>Languages</p>
            <img
              className="background-img"
              src={background1}
              alt="background"
            />
            <div className="workdomain-icon">
              <img src={java} alt="Core Java" />
              <img src={javascript} alt="JS" />
              {/* <img
                src="https://www.svgrepo.com/show/374146/typescript-official.svg"
                alt="TypeScript"
              /> */}
            </div>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              {/* <li>TypeScript</li> */}
            </ul>
          </div>
        </div>

        {/* Tools Section */}
        <div className="workdomain-item">
          <img src={toolsImg} className="center-img" alt="tools" />
          <div className="center">
            <p>Tools</p>
            <img
              className="background-img"
              src={background1}
              alt="background"
            />
            <div className="workdomain-icon">
              <img src={git} alt="Git" />
              <img src={github} alt="GitHub" />
              <img
                src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                alt="Postman"
              />
              <img src={tailwind} alt="tailwind" />
            </div>
            <ul>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workdomain;
