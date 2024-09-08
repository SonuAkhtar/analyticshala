import { useEffect } from "react";
import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

import "./reveal.css";

const Reveal = () => {
  useEffect(() => {
    let mySplitText = new SplitText(".reveal", { type: "chars" });
    let chars = mySplitText.chars;

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".reveal",
        start: "top 50%",
        //markers: true,
      },
    });
  }, []);

  return (
    <section className="reveal" id="reveal">
      <div className="container">
        <h2 className="section_title">Text</h2>
        <span className="section_subtitle">Reveal</span>

        <main className="reveal_main">
          <h1 className="reveal">Some text</h1>
        </main>
      </div>
    </section>
  );
};

export default Reveal;
