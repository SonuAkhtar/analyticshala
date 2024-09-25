import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./gallery.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Gallery = () => {
  useGSAP(() => {
    let timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "40% 40%",
        end: "100% 40%",
        scrub: 2,
        pin: true,
      },
    });

    timeLine
      .to(
        ".top",
        {
          top: "-50%",
        },
        "header"
      )
      .to(
        ".bottom",
        {
          bottom: "-50%",
        },
        "header"
      )
      .to(
        ".top-h",
        {
          top: "130%",
        },
        "header"
      )
      .to(
        ".bottom-h",
        {
          bottom: "-30%",
        },
        "header"
      )
      .to(".content", {
        top: "0",
      });
  });

  return (
    <div className="gallery_container">
      <main className="main">
        <div className="top">
          <h1 className="top-h">COURSES</h1>
        </div>
        <div className="center">
          <div className="content">
            <div className="h2">This is the inner section</div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="bottom-h">COURSES</h1>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
