import React from "react";
import About from "./about/page";
import Experience from "./workExperience/page";
import Extracurricular from "./extracurricular/page";
import Projects from "./projects/page";
import Misc from "./miscellaneous/page";
import Contact from "./contact/page";

const Index = () => {
  return (
    <main className="hidden lg:block">
      <div id="container">
        <div id="container2">
          <div className="box one">
            <About />
          </div>
          <div className="box two">
            <Experience />
          </div>
          <div className="box three">
            <Extracurricular />
          </div>
          <div className="box four">
            <Projects />
          </div>
          <div className="box five">
            <Misc />
          </div>
          <div className="box five">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
