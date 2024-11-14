import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { BsJustify, BsXLg } from "react-icons/bs";

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  function toggle() {
    setNavbarOpen(!isNavbarOpen);
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>
            <NavLink to="/">Bhaskar Roy</NavLink>
          </h3>
        </div>
        {/* For larger screens */}
        <div className="navbar_pc">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact me</NavLink>
            </li>
          </ul>
        </div>
        {/* For smaller screens */}
        <div onClick={toggle} className="navbar_sm">
          {isNavbarOpen ? <BsXLg /> : <BsJustify />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          isNavbarOpen ? "nav-show navbar_sm_menu" : "nav-hide navbar_sm_menu"
        }
      >
        <nav>
          <a href="#home-id" onClick={toggle}>
            Home
          </a>
          <a href="#project-id" onClick={toggle}>
            Project
          </a>
          <a href="#blog-id" onClick={toggle}>
            Blog
          </a>
          <a href="#about-id" onClick={toggle}>
            About
          </a>
          <a href="#contact-id" onClick={toggle}>
            Contact me
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
