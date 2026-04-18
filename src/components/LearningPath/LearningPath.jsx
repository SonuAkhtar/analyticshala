import "./learningPath.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    phase: "Foundation",
    duration: "Weeks 1–3",
    icon: "fas fa-seedling",
    color: "#6366f1",
    title: "Build Your Base",
    items: [
      "Python Basics & Logic",
      "Excel for Data Analysis",
      "Statistics & Probability",
      "SQL Fundamentals",
    ],
  },
  {
    step: "02",
    phase: "Core Analytics",
    duration: "Weeks 4–7",
    icon: "fas fa-chart-line",
    color: "#06b6d4",
    title: "Analyse & Explore",
    items: [
      "Pandas & NumPy",
      "Data Cleaning & EDA",
      "Advanced SQL Queries",
      "Power BI Dashboards",
    ],
  },
  {
    step: "03",
    phase: "Advanced Skills",
    duration: "Weeks 8–11",
    icon: "fas fa-brain",
    color: "#a855f7",
    title: "Go Deeper",
    items: [
      "Machine Learning Algorithms",
      "Model Building & Evaluation",
      "Tableau & Visualization",
      "NLP & AI Concepts",
    ],
  },
  {
    step: "04",
    phase: "Career Ready",
    duration: "Weeks 12–13",
    icon: "fas fa-briefcase",
    color: "#10b981",
    title: "Land the Role",
    items: [
      "Capstone Project",
      "Portfolio Building",
      "Interview Simulations",
      "Placement Support",
    ],
  },
];

const LearningPath = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="learning-path" id="learning-path">
      <div className="container">
        <SectionHeader
          eyebrow="YOUR ROADMAP"
          title="Go from Zero to Job-Ready in 90 Days"
          subtitle="A structured, mentor-guided journey that takes you from absolute beginner to confident data professional - step by step."
        />

        <div className="learning-path__track" ref={ref}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="learning-path__step"
              style={{ "--step-color": s.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="learning-path__step-number">{s.step}</div>

              <div className="learning-path__step-header">
                <div className="learning-path__step-icon">
                  <i className={s.icon} />
                </div>
                <div className="learning-path__step-meta">
                  <span className="learning-path__phase">{s.phase}</span>
                  <span className="learning-path__duration">{s.duration}</span>
                </div>
              </div>

              <h3 className="learning-path__step-title">{s.title}</h3>

              <ul className="learning-path__items">
                {s.items.map((item, j) => (
                  <li key={j}>
                    <i className="fas fa-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="learning-path__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="learning-path__cta-content">
            <p>
              Ready to follow this roadmap? Book a <strong>free counselling call</strong> and
              we&apos;ll build your personalised learning plan.
            </p>
          </div>
          <a href="/#contact" className="learning-path__cta-btn">
            Book Free Counselling <i className="fas fa-arrow-right" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPath;
