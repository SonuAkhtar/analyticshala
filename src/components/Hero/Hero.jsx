import React from "react";
import TypewriteComponent from "typewriter-effect";

// imported Data
import { socialIconsData } from "../../../appData";

// imported CSS
import "./hero.css";

// imported icons
import callIcon from "/assets/hero/call.gif";
import downloadIcon from "/assets/hero/download.gif";
import heroImage from "/assets/hero/hero.png";
import SectionNumber from "../SectionNumber/SectionNumber";

const Hero = () => {
  return (
    <>
      <section className="hero_section" id="hero">
        <div className="container">
          <main className="hero_main">
            <div className="hero_social">
              {socialIconsData.map((item, i) => (
                <a key={i} href={item.href}>
                  <i className={item.class} />
                </a>
              ))}
            </div>

            <div className="hero_data">
              <h1 className="hero_title">
                Hi, It<span className="title_color">'</span>s Riyaz
              </h1>
              <h3 className="hero_subtitle">
                I am a
                <TypewriteComponent
                  options={{
                    strings: [
                      "Frontend Developer",
                      "UI/UX Designer",
                      "Logo Designer",
                    ],
                    delay: 40,
                    deleteSpeed: 15,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <div className="hero_buttons">
                <a href="#contact" className="button contact">
                  Contact Me
                  <img src={callIcon} alt="call" />
                </a>
                <a
                  href="/assets/Riyaz_Akhtar_Resume.pdf"
                  download
                  className="button cv"
                >
                  Download CV
                  <img src={downloadIcon} alt="download" />
                </a>
              </div>
            </div>
          </main>
        </div>

        <SectionNumber current="01" total="08" />
      </section>
    </>
  );
};

export default Hero;
