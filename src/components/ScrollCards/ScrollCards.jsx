import "./scrollCards.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { scrollCardsData } from "../../../appData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardMeta = [
  { icon: "fas fa-chalkboard-teacher", color: "#4ade80", dark: true },
  { icon: "fas fa-play-circle",        color: "#22d3ee", dark: false },
  { icon: "fas fa-user-tie",           color: "#c084fc", dark: false },
  { icon: "fas fa-infinity",           color: "#fb923c", dark: false },
  { icon: "fas fa-project-diagram",    color: "#818cf8", dark: true },
];

const ScrollCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="scroll-cards">
      <div className="container">
        <SectionHeader
          eyebrow="WHY US"
          title="Why 500+ Students Chose Analyticshala"
          subtitle="We're not just another online course. Here's what makes us the go-to choice for data careers in India."
        />

        <div className="scroll-cards__bento" ref={ref}>
          {scrollCardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className={`scroll-cards__card${cardMeta[index].dark ? " scroll-cards__card--dark" : ""}`}
              style={{ "--cc": cardMeta[index].color }}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="scroll-cards__card-icon">
                <i className={cardMeta[index].icon} />
              </div>
              <div className="scroll-cards__card-number">0{card.id}</div>
              <h3 className="scroll-cards__card-title">{card.title}</h3>
              <p className="scroll-cards__card-desc">{card.info}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScrollCards;
