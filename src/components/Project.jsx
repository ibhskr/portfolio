import React from "react";
import xClone from "../assets/xClone.png";
import findMyHotel from "../assets/findMyHotel.png";
import underlineImage from "../assets/yellow-vector.svg";
import "./Project.css";
function Project() {
  return (
    <div className="project-section">
      <div className="title-text">
      <p>Project</p>
      <img src={underlineImage} alt="" srcset="" />
      </div>
      <div className="project">
        <div className="project-item">
          <img src={xClone} alt="" srcset="" />
          <p>
            • Developed a full-stack clone of X (formerly Twitter) using
            React.js, Node.js, and MongoDB, featuring real-time updates and a
            user-friendly interface. Implemented backend services and a
            responsive front end to handle dynamic content and user interactions
            efficiently.{" "}
          </p>

          <button>Visit</button>
        </div>
        <div className="project-item">
          <img src={findMyHotel} alt="" />
          <p>
            • Developed FindMyHotel, a web application for managing hotel
            bookings with features to add, delete, and search hotels. Utilized
            REST API for the backend, styled with Tailwind CSS, and incorporated
            some MUI components for a polished user interface.
          </p>
          <button>Visit</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
