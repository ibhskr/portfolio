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
          <NavLink to="/" onClick={toggle}>
            Home
          </NavLink>
          <NavLink to="/project" onClick={toggle}>
            Project
          </NavLink>
          <NavLink to="/blog" onClick={toggle}>
            Blog
          </NavLink>
          <NavLink to="/about" onClick={toggle}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={toggle}>
            Contact Me
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
