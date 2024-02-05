import React from "react";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          
        />
      </div>
      <p className="ErrorPage-text1">Look like you're lost</p>

      <p className="ErrorPage-text2">the page you are looking <span className="notAvailable">it's not available!</span></p>
      
    </div>
  );
}

export default ErrorPage;
