import React from "react";
import "./scrollCards.css";

import { scrollCardsData } from "../../../appData";

const ScrollCards = () => {
  return (
    <div className="scrollCards_container">
      <h1 className="scrollCards_title">WHY CHOOSE US?</h1>
      <div className="scrollCards">
        {scrollCardsData.map((card) => (
          <div
            key={card.id}
            className="scrollCard_item"
            style={{
              top: `${(card.id + 1) * 5}vh`,
              background: `${card.bgColor}`,
            }}
          >
            <div className="card_body">
              <h1 className="card_number">0{card.id}</h1>
              <h2 className="card_title">{card.title}</h2>
              <p>{card.info}</p>
              <button className="card_btn">View Courses</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCards;
