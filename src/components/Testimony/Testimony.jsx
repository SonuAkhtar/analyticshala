import React, { useState } from "react";
import { testimonyData } from "../../../appData";

// imported CSS
import "./Testimony.css";

const Testimony = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleArrowClick = (type) => {
    const maxCards = 4;

    if (type === "up") {
      setCurrentCard((prev) => (prev <= 0 ? maxCards - 1 : prev - 1));
    } else {
      setCurrentCard((prev) => (prev >= maxCards - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div className="testimony" id="testimony">
      <h1>Customer Review</h1>
      <div className="review_box">
        <div
          className="slide"
          style={{ transform: `translateY(${currentCard * -50}vh)` }}
        >
          {testimonyData.map((value, index) => (
            <div key={value.id} className="card_wrapper">
              <div className={`card ${currentCard === index ? "active" : ""}`}>
                <p>
                  <span>
                    <i class="fas fa-quote-left" />
                  </span>

                  {value.review}
                  <span>
                    <i class="fas fa-quote-right" />
                  </span>
                </p>
                <div className="profile">
                  <img src={value.image} alt="image" />
                  <div>
                    <h3>{value.name}</h3>
                    <p>{value.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <i class="fas fa-arrow-up" onClick={() => handleArrowClick("up")} />

          <span className="current_card_number">
            {currentCard + 1}/<span>{testimonyData.length}</span>
          </span>

          <i
            class="fas fa-arrow-down"
            onClick={() => handleArrowClick("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
