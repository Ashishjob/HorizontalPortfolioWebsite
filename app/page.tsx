import React from "react";
import About from "./about/page";
import Experience from "./workExperience/page";
import Extracurricular from "./extracurricular/page";
import Projects from "./projects/page";
import Misc from "./miscellaneous/page";
import Contact from "./contact/page";
import MobileAbout from "./mobileAbout/page";
import MobileExperience from "./mobileWorkExperience/page";
import MobileExtracurricular from "./mobileExtracurricular/page";
import MobileProjects from "./mobileProjects/page";
import MobileContact from "./mobileContact/page";

const Index = () => {
  return (
    <main>
      <div id="container" className="hidden lg:block">
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
          {/* <div className="box five">
            <Misc />
          </div> */}
          <div className="box five">
            <Contact />
          </div>
        </div>
      </div>
      <div id="mobilecontainer" className="lg:hidden bg-black min-h-screen">
        <div className="">
          <MobileAbout />
        </div>
        <div className="">
          <MobileExperience />
        </div>
        <div className="">
          <MobileExtracurricular />
        </div>
        <div className="">
          <MobileProjects />
        </div>
        <div className="">
          <MobileContact />
        </div>
      </div>
    </main>
  );
};

export default Index;
