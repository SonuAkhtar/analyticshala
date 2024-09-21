import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./reveal.css";

const Reveal = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const reveal = gsap.to(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 80%",
      },
      color: "#222",
      duration: 1,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const useArrayRef = () => {
    const letterRef = useRef([]);
    letterRef.current = [];
    return [letterRef, (ref) => ref && letterRef.current.push(ref)];
  };
  const [letterRef, setLetterRef] = useArrayRef();

  const text =
    "This is a test text that can be used to show text reveal animation with gsap. This is a test text that can be used to show text reveal animation with gsap.";
  return (
    <div className="reveal_container">
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setLetterRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// const Reveal = () => {
//   useEffect(() => {
//     let mySplitText = new SplitText(".reveal", { type: "chars" });
//     let chars = mySplitText.chars;

//     gsap.from(chars, {
//       yPercent: 130,
//       stagger: 0.02,
//       ease: "back.out",
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".reveal",
//         start: "top 50%",
//         //markers: true,
//       },
//     });
//   }, []);

//   return (
//     <section className="reveal" id="reveal">
//       <div className="container">
//         <h2 className="section_title">Text</h2>
//         <span className="section_subtitle">Reveal</span>

//         <main className="reveal_main">
//           <h1 className="reveal">Some text</h1>
//         </main>
//       </div>
//     </section>
//   );
// };

export default Reveal;
