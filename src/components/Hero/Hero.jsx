// imported CSS
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <main className="hero_main">
        <div className="hero_title">
          <span>Analytics</span>
          <span>that Helps You</span>
          <span className="shape">Shape Your Future</span>
        </div>
        <div className="hero_buttons">
          <a href="#contact">Contact Us</a>
          <a href="https://topmate.io/faizan_ansari007" target="_blank">
            Request a Demo
          </a>
        </div>

        <div className="hero_info">
          <p>
            <i class="fas fa-check" /> Free 2-Classes Trial
          </p>
          <p>
            <i class="fas fa-check" /> Free Career Counselling
          </p>
        </div>
      </main>
    </section>
  );
};

export default Hero;
