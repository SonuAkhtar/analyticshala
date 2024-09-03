import React from "react";

// imported CSS
import "./aboutMe.css";

// import image
import aboutImage from "/assets/about/about_pic.jpg";
import SectionNumber from "../SectionNumber/SectionNumber";

const AboutMe = () => {
  return (
    <>
      <section className="about even" id="about">
        <div className="container">
          <h2 className="section_title even">About Me</h2>
          <span className="section_subtitle even">Professionally</span>

          <main className="about_main">
            <div className="about_img">
              <img src={aboutImage} alt="about" />
            </div>

            <p className="about_description">
              Frontend Developer with high level of experience in Web designing,
              developement
            </p>

            <div className="about_info">
              <div className="about_info_card">
                <span className="about_info_number">6+</span>
                <span className="about_info-name">Years experience</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">20+</span>
                <span className="about_info-name">Completed projects</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">4</span>
                <span className="about_info-name">Companies worked with</span>
              </div>

              <div className="about_info_card">
                <span className="about_info_number">5+</span>
                <span className="about_info-name">Languages Known</span>
              </div>
            </div>
          </main>
        </div>

        <SectionNumber current="02" total="08" color="light" />
      </section>
    </>
  );
};

export default AboutMe;
