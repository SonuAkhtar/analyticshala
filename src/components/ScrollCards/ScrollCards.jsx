// import CSS
import "./scrollCards.css";

// import appData
import { scrollCardsData } from "../../../appData";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const ScrollCards = () => {
  return (
    <section className="scrollCards">
      <div className="container">
        <SectionHeader
          number="03"
          title="Why to Choose"
          subtitle="Analyticshala"
        />

        <div className="scrollCards">
          {scrollCardsData.map((card) => (
            <div
              key={card.id}
              className="scrollCard_item"
              style={{
                top: `${(card.id + 1) * 10}vh`,
              }}
            >
              <div className="card_body">
                <div className="card_number_title">
                  <h1 className="card_number">0{card.id}</h1>
                  <h2 className="card_title">{card.title}</h2>
                </div>
                <p>{card.info}</p>
                <button className="card_btn">View Courses</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
