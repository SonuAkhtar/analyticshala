import { NavLink } from "react-router-dom";
import "./menuMobile.css";

const navLinks = [
  { name: "About Us",  to: "/aboutUs",    num: "01" },
  { name: "Courses",   to: "/courses",    num: "02" },
  { name: "Workshops", to: "/workshops",  num: "03" },
  { name: "Testimony", to: "/testimony",  num: "04" },
  { name: "Contact",   href: "/#contact", num: "05" },
];

const MenuMobile = ({ expand, setExpand }) => {
  return (
    <>
      <div
        className={`mob-nav__overlay ${expand ? "mob-nav__overlay--active" : ""}`}
        onClick={() => setExpand(false)}
      />

      <div className={`mob-nav ${expand ? "mob-nav--open" : ""}`}>
        {/* Header row */}
        <div className="mob-nav__header">
          <span className="mob-nav__logo">AnalyticShala</span>
          <button
            className="mob-nav__close"
            onClick={() => setExpand(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mob-nav__links">
          {navLinks.map((link, i) =>
            link.to ? (
              <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) =>
                  `mob-nav__link${isActive ? " mob-nav__link--active" : ""}`
                }
                onClick={() => setExpand(false)}
                style={{ "--delay": `${i * 0.06 + 0.08}s` }}
              >
                <span className="mob-nav__num">{link.num}</span>
                <span className="mob-nav__name">{link.name}</span>
                <i className="fas fa-arrow-right mob-nav__arrow" />
              </NavLink>
            ) : (
              <a
                key={i}
                href={link.href}
                className="mob-nav__link"
                onClick={() => setExpand(false)}
                style={{ "--delay": `${i * 0.06 + 0.08}s` }}
              >
                <span className="mob-nav__num">{link.num}</span>
                <span className="mob-nav__name">{link.name}</span>
                <i className="fas fa-arrow-right mob-nav__arrow" />
              </a>
            )
          )}
        </nav>

        {/* Footer CTA */}
        <div className="mob-nav__footer">
          <NavLink
            to="/workshops"
            className="mob-nav__cta"
            onClick={() => setExpand(false)}
          >
            Enroll Now <i className="fas fa-arrow-right" />
          </NavLink>
          <p className="mob-nav__tagline">India's most hands-on data education</p>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
