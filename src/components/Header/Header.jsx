import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "#contact" } });
    }
  };

  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <nav className="header__nav">
          <Link className="header__logo" to="/">
            <span className="header__logo-mark">A</span>
            <span className="header__logo-text">nalytic<em>Shala</em></span>
          </Link>

          <div className="header__nav-items">
            <NavLink to="/aboutUs" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/courses" className={navLinkClass}>
              Courses
            </NavLink>
            <NavLink to="/workshops" className={navLinkClass}>
              Workshops
            </NavLink>
            <NavLink to="/testimony" className={navLinkClass}>
              Testimony
            </NavLink>
            <a href="/#contact" onClick={handleContact}>Contact</a>
          </div>

          <div className="header__nav-right">
            <button
              className="header__theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <i className="fas fa-moon" />
              ) : (
                <i className="fas fa-sun" />
              )}
            </button>

            <Link to="/workshops" className="header__cta">
              Enroll Now
              <i className="fas fa-arrow-right" />
            </Link>

            <div
              className={`header__hamburger ${menuClick ? "header__hamburger--active" : ""}`}
              onClick={() => setMenuClick(!menuClick)}
            >
              <div className="header__hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MenuMobile expand={menuClick} setExpand={setMenuClick} />
    </>
  );
};

export default Header;
