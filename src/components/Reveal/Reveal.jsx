// import React Hooks
import { useEffect, useRef } from "react";

// import Libraries
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import CSS
import "./reveal.css";

const Reveal = () => {
  const triggerRef = useRef(null);
  const letterRef = useRef([]);

  useGSAP(() => {
    const reveal = gsap.to(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 50%",
        end: "80% 50%",
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
    "This is a test text that can be used to show text reveal animation with gsap. This is a test text that can be used to show text reveal animation with gsap.";
  return (
    <div className="reveal_container">
      <div className="reveal_wrapper">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal_text" key={index} ref={setLetters}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reveal;
