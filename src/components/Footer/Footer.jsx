import React from "react";

// imported Data
import { socialIconsData } from "../../../appData";

// imported CSS
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_info">
          <a href="#">
            <h1 className="footer_title">AnalyticShala</h1>
          </a>
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

      <hr />

      <div className="footer_bottom">
        <div className="copyright">
          <span>&#169;</span> All rights reserved 2024, Analyticshala
        </div>

        <div className="terms">Terms of Servies</div>

        <div className="privacy">Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
