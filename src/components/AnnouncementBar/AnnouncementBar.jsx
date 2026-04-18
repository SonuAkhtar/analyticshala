import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./announcementBar.css";

const STORAGE_KEY = "analyticshala_ann_dismissed_v1";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="ann-bar" role="banner">
      <div className="ann-bar__inner">
        <span className="ann-bar__badge">
          <i className="fas fa-bolt" /> New
        </span>
        <p className="ann-bar__text">
          <strong>RAG Systems course is live</strong> - Early bird seats filling
          fast.{" "}
          <Link to="/course-details?id=rag" className="ann-bar__link">
            Grab ₹999 off →
          </Link>
        </p>
      </div>
      <button
        className="ann-bar__close"
        onClick={dismiss}
        aria-label="Dismiss announcement"
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
