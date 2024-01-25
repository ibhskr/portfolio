import React, { useState } from "react";
import "./navbar.css";
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
          <h3>Bhaskar Roy</h3>
        </div>
        <div className="navbar_pc">
          <ul>
            <li>Home</li>
            <li>Project</li>
            <li>Blog</li>
            <li>About me</li>
            <li>Contact me</li>
          </ul>
        </div>
        <div onClick={toggle} className="navbar_sm">
          {isNavbarOpen ? <BsXLg /> : <BsJustify />}
        </div>
      </div>
      <div className={isNavbarOpen ? "nav-show navbar_sm_menu" : "nav-hide navbar_sm_menu"}>
        <nav >
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">Blog</a>
          <a href="#">About me</a>
          <a href="#">Contact me</a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
