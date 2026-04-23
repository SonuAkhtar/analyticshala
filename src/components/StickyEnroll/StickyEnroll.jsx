import { useState, useEffect } from "react";
import "./stickyEnroll.css";
import { Link } from "react-router-dom";

const StickyEnroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`sticky-enroll${visible ? " sticky-enroll--visible" : ""}`}>
      <span className="sticky-enroll__urgency">
        <i className="fas fa-fire" /> Limited seats left!
      </span>
      <button className="sticky-enroll__cta" onClick={handleClick}>
        <i className="fas fa-graduation-cap" />
        <Link to="/courses">Enroll Now</Link>
      </button>
    </div>
  );
};

export default StickyEnroll;
