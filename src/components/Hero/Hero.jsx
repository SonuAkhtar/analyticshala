import "./hero.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Marq from "../Marq/Marq";
import { heroMarqData } from "../../../appData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const skillBars = [
  { label: "Python & SQL", pct: 88, cssVar: "--skill-color-1" },
  { label: "Data Analytics", pct: 92, cssVar: "--skill-color-2" },
  { label: "Machine Learning", pct: 76, cssVar: "--skill-color-3" },
  { label: "Data Visualization", pct: 84, cssVar: "--skill-color-4" },
];

const avatarInitials = ["RS", "PK", "AM", "NJ", "DM"];

const mobileStats = [
  { num: "94%", label: "Placement Rate" },
  { num: "500+", label: "Alumni" },
  { num: "4.9★", label: "Rating" },
];

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <main className="hero__main">
        <div className="hero__left">
          <motion.div
            className="hero__badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <i className="fas fa-graduation-cap" />
            India&apos;s fastest growing data analytics community
          </motion.div>

          <div className="hero__title">
            <motion.h1
              className="hero__headline"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <span className="hero__headline-top">Turn Data Into</span>
              <span className="hero__headline-bottom">Your Dream Career.</span>
            </motion.h1>

            <motion.p
              className="hero__typewriter"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Master&nbsp;
              <span className="hero__typewriter-highlight">
                <Typewriter
                  options={{
                    strings: [
                      "Data Analytics",
                      "Python & SQL",
                      "Machine Learning",
                      "Power BI & Tableau",
                      "AI Engineering",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 35,
                  }}
                />
              </span>
              &nbsp;and land your first data role in 90 days.
            </motion.p>
          </div>

          <motion.div
            className="hero__social-strip"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
          >
            <div className="hero__avatars">
              {avatarInitials.map((init, i) => (
                <span key={i} className="hero__avatar">
                  {init}
                </span>
              ))}
            </div>
            <p className="hero__social-text">
              <strong>500+</strong> students already enrolled&nbsp;
              <span className="hero__social-stars">★★★★★</span>
              <span>4.9</span>
            </p>
          </motion.div>

          <motion.div
            className="hero__urgency"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.8}
          >
            <span className="hero__urgency-dot" />
            Next batch starts <strong>May 5, 2026</strong> · Only 12 seats left
          </motion.div>

          <motion.div
            className="hero__buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link to="/courses" className="hero__btn--primary">
              Explore Courses <i className="fas fa-arrow-right" />
            </Link>
            <Link to="/workshops" className="hero__btn--ghost">
              <i className="fas fa-play-circle" /> Visit Workshops
            </Link>
          </motion.div>

          <motion.div
            className="hero__trust"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3.5}
          >
            <span>
              <i className="fas fa-check-circle" /> 2 Free Trial Classes
            </span>
            <span>
              <i className="fas fa-check-circle" /> 1:1 Career Mentorship
            </span>
            <span>
              <i className="fas fa-check-circle" /> Job Placement Support
            </span>
          </motion.div>

          <motion.div
            className="hero__mobile-stats"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {mobileStats.map((s) => (
              <div key={s.label} className="hero__mobile-stat">
                <span className="hero__mobile-stat-num">{s.num}</span>
                <span className="hero__mobile-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="hero__dashboard" {...floatAnim}>
            <div className="hero__dashboard-header">
              <div className="hero__dashboard-dot hero__dashboard-dot--green" />
              <div className="hero__dashboard-dot hero__dashboard-dot--yellow" />
              <div className="hero__dashboard-dot hero__dashboard-dot--red" />
              <span className="hero__dashboard-title">
                Career Progress Tracker
              </span>
            </div>

            <div className="hero__dashboard-stats">
              <div className="hero__stat">
                <span className="hero__stat-num">94%</span>
                <span className="hero__stat-label">Placement Rate</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-num">90</span>
                <span className="hero__stat-label">Days to Job Ready</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-num">4.9★</span>
                <span className="hero__stat-label">Student Rating</span>
              </div>
            </div>

            <div className="hero__skills">
              <p className="hero__skills-label">Skills You&apos;ll Master</p>
              {skillBars.map((s, i) => (
                <div key={i} className="hero__skill-bar">
                  <div className="hero__skill-bar-info">
                    <span>{s.label}</span>
                    <span style={{ color: `var(${s.cssVar})` }}>{s.pct}%</span>
                  </div>
                  <div className="hero__skill-bar-track">
                    <motion.div
                      className="hero__skill-bar-fill"
                      style={{ background: `var(${s.cssVar})` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.8 + i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero__pill hero__pill--1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <i className="fas fa-briefcase" /> Hiring Partners
          </motion.div>

          <motion.div
            className="hero__pill hero__pill--2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <i className="fas fa-users" /> 500+ Alumni
          </motion.div>

          <motion.div
            className="hero__pill hero__pill--3"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }}
          >
            <i className="fas fa-certificate" /> Certified Courses
          </motion.div>
        </motion.div>

        <Marq data={heroMarqData} />
      </main>
    </section>
  );
};

export default Hero;
