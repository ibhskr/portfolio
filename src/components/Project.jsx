import React from "react";
import xClone from "../assets/xClone.png";
import findMyHotel from "../assets/findMyHotel.png";
import underlineImage from "../assets/yellow-vector.svg";
import StaggerText from "react-stagger-text";
import "./Project.css";
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
            href="https://github.com/ibhskr/x_clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visit</button>
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
            <button>Visit</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
