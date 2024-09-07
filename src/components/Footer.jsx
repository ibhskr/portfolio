import React from "react";
import "./Footer.css";
import { IoPersonSharp } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className=" footer content-padding ">
      <div className="footer-item">
        <h3>Contact</h3>
        <ul>
          <li>
            <IoPersonSharp />
            <p>Bhaskar Roy</p>
          </li>
          <li>
            <GoLocation />
            <p>West Bengal, India</p>
          </li>
          <li>
            <FaPhone />
            <a href="tel:+918389997439">+91 8389997439</a>
            
          </li>
          <li>
            <MdAlternateEmail />
            <a href="mailto:i.bhskry@gmail.com">bhskr.wb@gmail.com</a>
           
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h3>Social Media</h3>
        <ul>
          <li>
            <FaLinkedin />
            <a href="http://www.linkedin.com/in/ibhskr">LinkedIn</a>
          </li>
          <li>
            <FaGithub />
            <a href="https://github.com/ibhskr">Github</a>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="footer-item">
        <h3>Quick Access</h3>
        <ul>
          <li><IoMdDownload/>Resume Download</li>
          <li><IoCodeSlashOutline/>Project</li>
        </ul>
      </div>
   
    </div>
  );
}

export default Footer;
