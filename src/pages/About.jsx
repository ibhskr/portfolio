import React from "react";
import "./About.css"; // Assuming you'll style this page in a separate CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Bhaskar Roy</h1>
      <section className="about-section">
        <h2>Introduction</h2>
        <p>
          Hello, I'm Bhaskar Roy, a passionate web developer from Coochbehar,
          West Bengal, India. Currently, I'm in my final year Student of CSE
          Department and have gained experience in both frontend and backend
          development.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React.js, Node.js, Express.js</li>
          <li>MongoDB, REST API development</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>MUI (Material UI), Git - GitHub, Postman</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Projects</h2>
        <p>I have worked on a variety of projects, including:</p>
        <ul>
          <li>XClone</li>
          <li>FindMyHotel</li>
          <li>GitHub Profile Explorer</li>
          <li>calculate-time-date NPM package</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Education & Experience</h2>
        <p>
          Along with my BTech studies, I have a Diploma in Mechanical
          Engineering.
        </p>
      </section>

      <section className="about-section">
        <h2>Future Goals</h2>
        <p>
          I aspire to build technology solutions that can simplify and improve
          everyday life. Whether it's through intuitive web applications,
          automation tools, or innovative platforms, my goal is to create
          meaningful products that make people's lives easier and more
          efficient. I believe that technology should serve humanity by solving
          real-world problems and enhancing the user experience.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact</h2>
        <p>You can reach me at:</p>
        <ul>
          <li>Email: i.bhskry@gmail.com</li>
          <li>Phone: +91 8389997439</li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/ibhskr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ibhskr
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ibhskr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/ibhskr/
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
