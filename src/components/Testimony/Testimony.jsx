// imported CSS
import "./Testimony.css";

const Testimony = () => {
  return (
    <>
      <section className="testimony" id="testimony">
        <div className="container">
          <h2 className="section_title">What they say</h2>
          <span className="section_subtitle">Testimony</span>

          <main className="testimony_main">
            <div className="testimony_cards">
              <div className="testimony_card">
                <p></p>
                <div className="details">
                  <img src="" alt="" />
                  <div className="info">
                    <div className="name"></div>
                    <div className="position"></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Testimony;
