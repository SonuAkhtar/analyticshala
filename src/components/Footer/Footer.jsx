import { useState } from "react";
import { Link } from "react-router-dom";
import { socialIconsData } from "../../../appData";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState("idle"); // idle | success | error

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!nlEmail || !/^\S+@\S+\.\S+$/.test(nlEmail)) {
      setNlStatus("error");
      return;
    }
    // TODO: connect to EmailJS or Resend to save subscriber
    setNlStatus("success");
    setNlEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="footer__cta-inner">
          <div className="footer__cta-left">
            <span className="footer__cta-eyebrow">
              <i className="fas fa-rocket" /> Limited seats per batch
            </span>
            <h2 className="footer__cta-heading">
              Your Data Career
              <br />
              Starts Here.
            </h2>
            <p className="footer__cta-sub">
              Join 500+ professionals who turned their data curiosity into
              high-paying careers - with Analyticshala.
            </p>
            <div className="footer__cta-actions">
              <Link to="/courses" className="footer__cta-btn--primary">
                Explore Courses <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="footer__cta-right">
            <div className="footer__stat">
              <span className="footer__stat-num">94%</span>
              <span className="footer__stat-label">Placement Rate</span>
            </div>
            <div className="footer__stat-divider" />
            <div className="footer__stat">
              <span className="footer__stat-num">90</span>
              <span className="footer__stat-label">Days to Job Ready</span>
            </div>
            <div className="footer__stat-divider" />
            <div className="footer__stat">
              <span className="footer__stat-num">11+</span>
              <span className="footer__stat-label">Years Teaching</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__col footer__col--brand">
            <span className="footer__logo">AnalyticShala</span>
            <p className="footer__tagline">Where Data Careers Are Built.</p>
            <p className="footer__desc">
              We bridge the gap between learning and doing. Industry-led
              curriculum, real-world projects, and career support that stays
              with you long after graduation.
            </p>
            <div className="footer__social">
              {socialIconsData.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={item.class}
                >
                  <i className={item.class} />
                </a>
              ))}
              <a
                href="https://www.youtube.com/@analyticshala"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://wa.me/918882641988"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--whatsapp"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
            <span className="footer__est">Est. 2013 · Gurgaon, India</span>
          </div>

          <div className="footer__col bottom">
            <h4>Explore</h4>
            <Link to="/#hero">Home</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/#courses">Courses</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/#contact">Contact</Link>
          </div>

          <div className="footer__col bottom">
            <h4>Programs</h4>
            <Link to="/course-details?id=analytics">Data Analytics</Link>
            <Link to="/course-details?id=datascience">Data Science</Link>
            <Link to="/course-details?id=ai">AI & Machine Learning</Link>
            <Link to="/course-details?id=analytics">Power BI & Tableau</Link>
            <Link to="/course-details?id=sql">Python for Data</Link>
            <Link to="/workshops">Corporate Training</Link>
          </div>

          <div className="footer__col bottom">
            <h4>Get In Touch</h4>
            <a
              href="mailto:team@analyticshala.in"
              className="footer__contact-item"
            >
              <i className="fas fa-envelope" />
              team@analyticshala.in
            </a>
            <a href="tel:+918882641988" className="footer__contact-item">
              <i className="fas fa-phone" />
              +91-88826 41988
            </a>
            <a
              href="https://wa.me/918882641988"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item footer__contact-item--whatsapp"
            >
              <i className="fab fa-whatsapp" />
              Chat on WhatsApp
            </a>
            <span className="footer__contact-item">
              <i className="fas fa-map-marker-alt" />
              Gurgaon, India · Global Online
            </span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>© {currentYear} AnalyticShala. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer__bottom-dot" />
            <Link to="/terms-of-use">Terms of Use</Link>
            <span className="footer__bottom-dot" />
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
          <span className="footer__made">Made with ❤️ in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
