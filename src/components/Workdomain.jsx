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
import java from "../assets/java.svg";
import nodejs from "../assets/node.svg";
import express from "../assets/express.svg";
import tailwind from "../assets/tailwind-css.svg";

import git from "../assets/git.svg";
import github from "../assets/github.svg";
function Workdomain() {
  return (
    <div className="Workdomain content-padding">
      <div className="title-text">
        <p>Work Domain</p>
        <img src={underlineImage} alt="" srcset="" />
      </div>
      <div className="workdomain-main">
        {/*codes for front end */}
        <div className="workdomain-item ">
          <img src={frontendImg} className="center-img" alt="" srcset="" />
          <div className="center">
            <p>Frontend</p>
            <img
              className="background-img"
              src={background1}
              alt=""
              srcset=""
            />
            <div className="workdomain-icon">
              <img src={htmlImg} alt="HTML5" />
              <img src={cssImg} alt="CSS" />
              <img src={javascript} alt="JS" />
              <img src={react} alt="REACT.JS" />
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>

        {/*codes for back end */}
        <div className="workdomain-item ">
          <img src={backendImg} className=" center-img" alt="" srcset="" />
          <div className="center">
            <p>Backend</p>
            <img
              className="background-img"
              src={background1}
              alt=""
              srcset=""
            />
            <div className="workdomain-icon">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
                alt="NODE.JS"
              />
              <img
                src="https://www.svgrepo.com/show/330398/express.svg"
                alt="EXPRESS.JS"
              />
            </div>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
        {/*codes for  database */}
        <div className="workdomain-item ">
          <img src={databaseImg} className=" center-img" alt="" srcset="" />
          <div className="center">
            <p>Database</p>
            <img
              className="background-img"
              src={background1}
              alt=""
              srcset=""
            />
            <div className="workdomain-icon">
              <img
                src="https://www.svgrepo.com/show/373845/mongo.svg"
                alt="MONGODB"
              />
              <img src={imageHandler.javaImg} alt="" />
            </div>
            <ul>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        {/*codes for  database */}
        <div className="workdomain-item ">
          <img src={programingImg} className=" center-img" alt="" srcset="" />
          <div className="center">
            <p>Language</p>
            <img
              className="background-img"
              src={background1}
              alt=""
              srcset=""
            />
            <div className="workdomain-icon">
              <img
                src="https://www.svgrepo.com/show/452234/java.svg"
                alt="Java"
              />
              <img
                src="https://www.svgrepo.com/show/452045/js.svg"
                alt="Javascript"
                srcset=""
              />
              <img
                src="https://www.svgrepo.com/show/374146/typescript-official.svg"
                alt="typescript"
                srcset=""
              />
            </div>
            <ul>
              <li>Javascript</li>
              <li>Java</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        {/*codes for  database */}
        <div className="workdomain-item ">
          <img src={toolsImg} className=" center-img" alt="" srcset="" />
          <div className="center">
            <p>Tools</p>
            <img className="background-img" src={background1} alt="" />
            <div className="workdomain-icon">
              <img src={git} alt="git" />
              <img src={github} alt="Github" />

              <img
                src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                alt="postman"
              />
              <img
                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                alt="tailwind"
              />
            </div>
            <ul>
              <li> Git & Github</li>
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
