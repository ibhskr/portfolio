import React from "react";
import xClone from "../assets/xClone.png";
import findMyHotel from "../assets/findMyHotel.png";
import underlineImage from "../assets/yellow-vector.svg";
import gitHubExp from "../assets/gitHubExp.png";
import StaggerText from "react-stagger-text";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
function Project() {
  return (
    <div className="project-section">
      <div className="title-text">
        <p>
          <StaggerText
            staggerType="letter"
            staggerDuration={1}
            startDelay={0.06}
            // startDelay={500}
          >
            Project
          </StaggerText>
        </p>
        <img src={underlineImage} alt="" srcset="" />
      </div>
      <div className="project">
        <div className="project-item">
          <img src={xClone} alt="" srcset="" />
          <p>
            • Developed a full-stack clone of{" "}
            <span className="highlight">X (formerly Twitter)</span> using
            React.js, Node.js, and MongoDB, featuring real-time updates and a
            user-friendly interface. Implemented backend services and a
            responsive front end to handle dynamic content and user interactions
            efficiently.{" "}
          </p>

          <a
            href="https://github.com/ibhskr/xclone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub />
              Visit
            </button>
          </a>
        </div>
        <div className="project-item">
          <img src={findMyHotel} alt="" />
          <p>
            • Developed <span className="highlight">FindMyHotel</span>, a web
            application for managing hotel bookings with features to add,
            delete, and search hotels. Utilized REST API for the backend, styled
            with Tailwind CSS, and incorporated some MUI components for a
            polished user interface.
          </p>
          <a
            href="https://github.com/ibhskr/findMyHotel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub />
              Visit
            </button>
          </a>
        </div>
        <div className="project-item">
          <img src={gitHubExp} alt="" />
          <p>
            • Developed{" "}
            <span className="highlight">GitHub Profile Explorer</span>, This
            application enables users to search for GitHub profiles and view
            detailed information, such as repositories, followers, and
            contributions. It features an intuitive and responsive user
            interface designed for a seamless experience. The app provides easy
            access to publicly available GitHub data without requiring users to
            log in, making it a convenient tool for developers, recruiters, or
            anyone exploring GitHub profiles.
          </p>
          <a
            href="https://github-search-beryl-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaInternetExplorer />
              Visit
            </button>
          </a>
        </div>
        <div className="project-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1920px-Npm-logo.svg.png"
            alt=""
          />
          <p>
            • Developed{" "}
            <span className="highlight">Time And Date Calculate Package</span>,
            This is a simple JavaScript based package that takes a date string
            and returns how much time has passed since that date in a
            human-readable format, such as "2 hours ago", "3 days ago", etc. You
            can use it in any web development project to display time
            differences dynamically.
          </p>
          <a
            href="https://www.npmjs.com/package/calculate-time-date"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaNpm size="30px" />
              Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
