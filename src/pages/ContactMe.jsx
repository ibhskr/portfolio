import React from "react";
import "./ContactMe.css"; // Assuming you'll style this page in a separate CSS file

function ContactMe() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out to me
          through the contact form below or via the provided contact
          information.
        </p>
        <br />
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

export default ContactMe;
