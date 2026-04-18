import "./courses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { coursesData } from "../../../appData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Courses = ({ setShowDownload }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="courses" id="courses">
      <div className="container">
        <SectionHeader
          eyebrow="PROGRAMS"
          title="Industry-Ready Programs"
          subtitle="Structured, job-focused curricula built by practitioners - not just educators."
        />

        <div className="courses__grid" ref={ref}>
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              className="courses__card"
              style={{ "--accent": course.accent }}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="courses__card-num">0{course.id}</span>

              <div className="courses__card-header">
                <div className="courses__card-chip">
                  <i className={course.icon} />
                  {course.category}
                </div>
                {course.badge && (
                  <span className="courses__card-badge">{course.badge}</span>
                )}
              </div>

              <div className="courses__card-body">
                <h3 className="courses__card-title">{course.title}</h3>
                <p className="courses__card-desc">{course.desc}</p>
              </div>

              <div className="courses__card-meta">
                <span className="courses__card-meta-pill">
                  <i className="fas fa-signal" />
                  {course.level}
                </span>
                <span className="courses__card-meta-pill">
                  <i className="fas fa-clock" />
                  {course.duration}
                </span>
              </div>

              <div className="courses__card-subjects">
                <span className="courses__card-subjects-label">
                  Topics Covered
                </span>
                <div className="courses__card-chips">
                  {course.chapters.map((ch, i) => (
                    <span key={i} className="courses__card-chip-tag">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              <div className="courses__card-actions">
                <a href="/#contact" className="courses__card-btn--primary">
                  Get Free Counselling <i className="fas fa-arrow-right" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="courses__footer">
          <Link to="/courses" className="courses__view-all">
            View All Courses <i className="fas fa-arrow-right" />
          </Link>
          <button
            className="courses__footer-brochure"
            onClick={() => setShowDownload(true)}
          >
            <i className="fas fa-download" /> Download Course Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
