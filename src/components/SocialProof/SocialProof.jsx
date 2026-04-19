import "./socialProof.css";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Students Trained",
    sub: "and growing every batch",
    icon: "fas fa-users",
    color: "#e63946",
    pale: "#fff0f1",
    border: "rgba(230,57,70,0.18)",
  },
  {
    number: 4.9,
    suffix: "★",
    label: "Average Rating",
    sub: "based on 200+ reviews",
    icon: "fas fa-star",
    color: "#f59e0b",
    pale: "#fffbeb",
    border: "rgba(245,158,11,0.18)",
  },
  {
    number: 11,
    suffix: "+",
    label: "Years of Excellence",
    sub: "est. 2013, Gurgaon",
    icon: "fas fa-award",
    color: "#7c3aed",
    pale: "#f5f3ff",
    border: "rgba(124,58,237,0.18)",
  },
  {
    number: 7,
    suffix: "",
    label: "Course Tracks",
    sub: "data, AI, web & more",
    icon: "fas fa-graduation-cap",
    color: "#0d9488",
    pale: "#f0fdfa",
    border: "rgba(13,148,136,0.18)",
  },
];

const AnimatedNumber = ({ value, suffix, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    value % 1 !== 0 ? v.toFixed(1) : Math.floor(v)
  );
  useEffect(() => {
    if (!isInView) return;
    const c = animate(count, value, { duration: 2, ease: "easeOut" });
    return c.stop;
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="sp" ref={ref}>
      <div className="container">
        <div className="sp__grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="sp__card"
              style={{ "--sc": s.color, "--sp": s.pale, "--sb": s.border }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sp__icon-wrap">
                <i className={s.icon} />
              </div>

              <div className="sp__num">
                <AnimatedNumber value={s.number} suffix={s.suffix} isInView={isInView} />
              </div>

              <div className="sp__label">{s.label}</div>
              <div className="sp__sub">{s.sub}</div>

              <div className="sp__bar" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
