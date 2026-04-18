import "./socialProof.css";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Students Trained",
    icon: "fas fa-users",
    color: "#c084fc",
    bg: "linear-gradient(145deg, #0e0620 0%, #1a0835 100%)",
    border: "rgba(192, 132, 252, 0.2)",
  },
  {
    number: 4.9,
    suffix: "★",
    label: "Average Rating",
    icon: "fas fa-star",
    color: "#fbbf24",
    bg: "linear-gradient(145deg, #140e00 0%, #211600 100%)",
    border: "rgba(251, 191, 36, 0.2)",
  },
  {
    number: 11,
    suffix: "+",
    label: "Years of Excellence",
    icon: "fas fa-award",
    color: "#34d399",
    bg: "linear-gradient(145deg, #051710 0%, #0c2818 100%)",
    border: "rgba(52, 211, 153, 0.2)",
  },
  {
    number: 10,
    suffix: "+",
    label: "Courses Available",
    icon: "fas fa-graduation-cap",
    color: "#22d3ee",
    bg: "linear-gradient(145deg, #021416 0%, #052222 100%)",
    border: "rgba(34, 211, 238, 0.2)",
  },
];

const AnimatedNumber =({ value, suffix, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    value % 1 !== 0 ? v.toFixed(1) : Math.floor(v)
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, value]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
};

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="social-proof" ref={ref}>
      <div className="container">

        <div className="social-proof__headline">
          <motion.span
            className="social-proof__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            BY THE NUMBERS
          </motion.span>
          <motion.h2
            className="social-proof__title"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Proof, not promises.
          </motion.h2>
        </div>

        <div className="social-proof__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="social-proof__card"
              style={{
                "--sc": stat.color,
                background: stat.bg,
                borderColor: stat.border,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="social-proof__icon">
                <i className={stat.icon} />
              </div>

              <div className="social-proof__number">
                <AnimatedNumber
                  value={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>

              <div className="social-proof__label">{stat.label}</div>

              <div className="social-proof__glow" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SocialProof;
