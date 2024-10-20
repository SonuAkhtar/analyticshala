// imported CSS
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <main className="hero_main">
        <h1 className="hero_top">Analytics</h1>
        <h1 className="hero_center">that helps you</h1>
        <h1 className="hero_bottom">
          <span>Shape</span> your <span>Future</span>
        </h1>
      </main>
    </div>
  );
};

export default Hero;
