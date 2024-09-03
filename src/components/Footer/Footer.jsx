import React from "react";

// imported Data
import { socialIconsData } from "../../../appData";

// imported CSS
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_info">
            <a href="#">
              <h1 className="footer_title">Riyaz</h1>
            </a>
            <span className="footer_subtitle">Software Developer</span>
          </div>

          <div className="footer_links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#works">Work</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#hobbies">Hobbies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer_social">
            {socialIconsData.map((item, i) => (
              <a key={i} href={item.href}>
                <i className={item.class} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
