import React, { useEffect } from "react";
import BodyA from "../components/BodyA";
import Workdomain from "../components/Workdomain";
import Project from "../components/Project";
import Education from "../components/Education";

function Home() {
  return (
    <div>
      <BodyA />
      <Workdomain />
      <Project />
      <Education />
    </div>
  );
}

export default Home;
