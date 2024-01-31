import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./Project.css";
import underlineImage from "../assets/yellow-vector.svg";

function Project() {
  return (
    <div className="project content-padding">
      <div className="project-section-title title-text">
        <p>Project</p>
        <img src={underlineImage} alt="" srcSet="" />
      </div>
      <div className="project-section">
        {/* 1st element */}
        <div className="project-item">
          <img
            src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/10190751/Top-6-Project-Management-Trends-in-2021.png"
            alt=""
          />
          <h3>DevCom</h3>
          <p>
            Here, people can post about their projects, ask for help with coding
            issues, share tips and tricks, and engage in discussions related to
            software development. Whether you're a seasoned developer or just
            starting out, this is the perfect place to connect with like-minded
            individuals and expand your knowledge in the field. Feel free to ask
            any questions or share your own experiences – we're here to support
            each other!
          </p>
          <button>
            visit <BsArrowRight />
          </button>
        </div>

        {/* 2nd element */}
        <div className="project-item">
          <img
            src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/10190751/Top-6-Project-Management-Trends-in-2021.png"
            alt=""
          />
          <h3>My Service Provider </h3>
          <p>
            Create a dynamic service provider website using a tech stack
            comprising React for a seamless user interface, Node.js for robust
            backend functionality, and MongoDB for efficient data management.
            Enable users to effortlessly book services online while managing and
            visualizing comprehensive data through a user-friendly dashboard.
            Enhance user experience and streamline operations with this
            powerful, responsive platform.
          </p>
          <button>
            visit <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
