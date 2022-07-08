import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Project from "../sections/Project";

function Content() {
  return (
    <main>
      <AboutMe />
      <Experience />
      <Project />
      <Skills />
      <Education />
    </main>
  );
}

export default Content;
