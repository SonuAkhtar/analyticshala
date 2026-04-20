import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./aboutUs.css";

import Reveal from "../../components/Reveal/Reveal";
import { teamData } from "../../../appData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroStats = [
  { icon: "fas fa-calendar-alt", num: "11+", label: "Years of Excellence" },
  { icon: "fas fa-users", num: "500+", label: "Students Trained" },
  { icon: "fas fa-book-open", num: "10+", label: "Courses Offered" },
  { icon: "fas fa-star", num: "4.9★", label: "Average Rating" },
];

const focusAreas = [
  {
    icon: "fas fa-chart-bar",
    color: "#6366f1",
    title: "Data Analytics",
    desc: "Master Excel, SQL, Power BI, and Tableau to become the analyst every company needs. From raw data to actionable dashboards.",
    tags: ["SQL", "Power BI", "Tableau", "Excel"],
  },
  {
    icon: "fas fa-brain",
    color: "#a855f7",
    title: "Data Science & AI",
    desc: "Build predictive models, work with machine learning pipelines, and explore the world of AI - with Python at the core.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "NLP"],
  },
  {
    icon: "fas fa-briefcase",
    color: "#06b6d4",
    title: "Career Development",
    desc: "Resume building, mock interviews, LinkedIn audits, and warm introductions to hiring partners. We stay with you until you land.",
    tags: ["Resume", "Interview Prep", "Portfolio", "Placement"],
  },
];

const values = [
  {
    icon: "fas fa-graduation-cap",
    color: "#6366f1",
    title: "Student-First Always",
    desc: "Every course, resource, and support system is built around one goal - your success. Not just completion, but real transformation.",
  },
  {
    icon: "fas fa-industry",
    color: "#f97316",
    title: "Industry-Led Curriculum",
    desc: "Our trainers are active professionals. The curriculum is validated by hiring managers - not academics locked in classrooms.",
  },
  {
    icon: "fas fa-flask",
    color: "#a855f7",
    title: "Learn by Doing",
    desc: "No theory dumps. Real datasets, live capstone projects, and problems sourced directly from industry use cases.",
  },
  {
    icon: "fas fa-rocket",
    color: "#10b981",
    title: "Career-Focused Outcomes",
    desc: "Our job isn't done when the course ends. Resume reviews, interview simulations, and alumni network access - for life.",
  },
];

const milestones = [
  {
    year: "2013",
    event: "Founded in Gurgaon",
    detail:
      "Started with a single weekend batch and a mission to democratise data education across India.",
  },
  {
    year: "2017",
    event: "100 Students Milestone",
    detail:
      "Grew into a structured learning community with dedicated trainers and well-defined course tracks.",
  },
  {
    year: "2020",
    event: "Went Fully Online",
    detail:
      "Expanded globally - our programmes now reach students across India, the Middle East, and beyond.",
  },
  {
    year: "2022",
    event: "AI & GenAI Tracks Added",
    detail:
      "Launched cutting-edge AI, Machine Learning, and Generative AI programmes aligned with real hiring demand.",
  },
  {
    year: "2024",
    event: "500+ Alumni Network",
    detail:
      "Over 500 graduates placed at top companies, with a placement rate that stands at 94% and growing.",
  },
];

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="about">
      <section className="about__hero">
        <div className="about__orb about__orb--1" />
        <div className="about__orb about__orb--2" />

        <div className="container about__hero-content">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-info-circle" /> Our Story
          </motion.span>

          <motion.h1 className="about__hero-heading" {...fadeUp(0.08)}>
            Empowering India&apos;s
            <br />
            <span className="about__gradient-text">Data Professionals</span>
            <br />
            Since 2013.
          </motion.h1>

          <motion.p className="about__hero-sub" {...fadeUp(0.16)}>
            We are a Gurgaon based data education company on a mission to bridge
            the gap between ambition and opportunity - one data career at a
            time.
          </motion.p>

          <motion.div className="about__hero-actions" {...fadeUp(0.24)}>
            <Link to="/courses" className="about__btn--primary">
              Explore Courses <i className="fas fa-arrow-right" />
            </Link>
            <Link to="/#contact" className="about__btn--ghost">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <div className="about__stats">
          <div className="container about__stats-inner">
            {heroStats.map((s, i) => (
              <motion.div
                key={i}
                className="about__stat"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__mission" id="reveal">
        <div className="container">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-bullseye" /> Our Mission
          </motion.span>
          <motion.h2 className="about__section-title" {...fadeUp(0.08)}>
            What We Stand For
          </motion.h2>
          <motion.p className="about__section-sub" {...fadeUp(0.12)}>
            Scroll through our mission - watch it come to life.
          </motion.p>

          <motion.div
            className="about__reveal-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Reveal />
          </motion.div>
        </div>
      </section>

      <section className="about__focus">
        <div className="container">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-th-large" /> What We Teach
          </motion.span>
          <motion.h2 className="about__section-title" {...fadeUp(0.08)}>
            Three Pillars of Our Curriculum
          </motion.h2>
          <motion.p className="about__section-sub" {...fadeUp(0.14)}>
            Every programme at Analyticshala is built around these three areas -
            designed together to make you fully job-ready.
          </motion.p>

          <motion.div
            className="about__focus-grid"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                className="about__focus-card"
                style={{ "--fc": area.color }}
                variants={staggerItem}
              >
                <div className="about__focus-icon">
                  <i className={area.icon} />
                </div>
                {i === 2 ? (
                  <div className="about__focus-body">
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                    <div className="about__focus-tags">
                      {area.tags.map((t, j) => (
                        <span key={j}>{t}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                    <div className="about__focus-tags">
                      {area.tags.map((t, j) => (
                        <span key={j}>{t}</span>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-heart" /> Our Values
          </motion.span>
          <motion.h2 className="about__section-title" {...fadeUp(0.08)}>
            The Principles That Drive Us
          </motion.h2>
          <motion.p className="about__section-sub" {...fadeUp(0.14)}>
            These aren&apos;t just words on a wall. They shape every decision we
            make, every course we build, and every student we support.
          </motion.p>

          <motion.div
            className="about__values-grid"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="about__values-card"
                style={{ "--vc": v.color }}
                variants={staggerItem}
              >
                <div className="about__values-icon">
                  <i className={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about__journey">
        <div className="container">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-map-marked-alt" /> Our Journey
          </motion.span>
          <motion.h2 className="about__section-title" {...fadeUp(0.08)}>
            11 Years. One Mission.
          </motion.h2>
          <motion.p className="about__section-sub" {...fadeUp(0.14)}>
            From a single weekend batch to a 500+ strong alumni network -
            here&apos;s how we got here.
          </motion.p>

          <div className="about__timeline">
            <div className="about__timeline-track" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`about__milestone ${i % 2 === 0 ? "about__milestone--left" : "about__milestone--right"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about__milestone-card">
                  <span className="about__milestone-year">{m.year}</span>
                  <h4>{m.event}</h4>
                  <p>{m.detail}</p>
                </div>
                <div className="about__milestone-dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__team" id="team">
        <div className="container">
          <motion.span className="about__eyebrow" {...fadeUp(0)}>
            <i className="fas fa-users" /> The Team
          </motion.span>
          <motion.h2 className="about__section-title" {...fadeUp(0.08)}>
            Meet the People Behind Analyticshala
          </motion.h2>
          <motion.p className="about__section-sub" {...fadeUp(0.14)}>
            Industry veterans, domain experts, and passionate mentors - united
            by a single goal: your career success.
          </motion.p>

          <motion.div
            className="about__team-grid"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {teamData.map((member) => (
              <motion.div
                key={member.id}
                className="about__team-card"
                variants={staggerItem}
              >
                <div className="about__team-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about__team-photo"
                  />
                  <div className="about__team-overlay">
                    <div className="about__team-socials">
                      {member.social.map((link, j) => (
                        <a
                          key={j}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about__team-social-btn"
                        >
                          <i className={link.iconClass} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="about__team-info">
                  <h4 className="about__team-name">{member.name}</h4>
                  <span className="about__team-role">{member.position}</span>
                  {member.college && (
                    <span className="about__team-badge">
                      <i className="fas fa-award" /> {member.college}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
