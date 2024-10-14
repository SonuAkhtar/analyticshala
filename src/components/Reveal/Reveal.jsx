// import React Hooks
import { useRef } from "react";

// import Libraries
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import CSS
import "./reveal.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Reveal = () => {
  const triggerRef = useRef(null);
  const letterRef = useRef([]);

  useGSAP(() => {
    const reveal = gsap.to(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
      },
      color: "#222",
      duration: 1,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const useLettersArray = () => {
    letterRef.current = [];
    return (ref) => ref && letterRef.current.push(ref);
  };
  const setLetters = useLettersArray();

  const text =
    "Unlock your potential with our expert-led courses in data analytics, visualization, and web development! Whether you're a student looking to enhance your skills or a professional aiming to stay ahead in your career, we provide practical knowledge and hands-on experience.";
  return (
    <section className="reveal">
      <div className="container">
        <SectionHeader number="01" title="know" subtitle="About Us" />

        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal_text" key={index} ref={setLetters}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reveal;
