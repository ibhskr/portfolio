import React, { useState } from "react";
import "./navbar.css";
import { BsJustify, BsXLg } from "react-icons/bs";
import PopNavbar from "./popup_navbar";

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

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
        <div onClick={() => setNavbarOpen(!isNavbarOpen)} className="navbar_sm">
          {isNavbarOpen ? <BsXLg /> : <BsJustify />}
        </div>
      </div>
      <div>
        {isNavbarOpen && <PopNavbar />}
      </div>
    </>
  );
}

export default Navbar;
