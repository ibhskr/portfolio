import React from "react";
import Navbar from "./components/navbar";
import BodyA from "./components/BodyA";
import Workdomain from "./components/Workdomain";
import Project from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <BodyA/>
      <Workdomain/>
      <Project/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
