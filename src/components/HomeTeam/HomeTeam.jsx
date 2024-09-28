// imported Data
import { useState } from "react";
import { teamData } from "../../../appData";

// imported CSS
import "./homeTeam.css";

const HomeTeam = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <>
      <section className="homeTeam" id="homeTeam">
        <div className="container">
          <h2 className="section_title">Team</h2>
          <span className="section_subtitle">Meet the</span>

          <main className="homeTeam_main">
            {teamData.map((team, index) => (
              <div
                key={team.id}
                className={`card_container ${
                  currentCard === index ? "active" : ""
                }`}
                onClick={() => setCurrentCard(index)}
              >
                <img src={team.image} alt="team member" />

                <div className="teamCard_details">
                  <span className="teamCard_number">{team.number}</span>
                  <div className="teamCard_info">
                    <span>{team.name}</span>
                    <span className="teamCard_position">{team.position}</span>
                  </div>

                  <div className="social_buttons">
                    {team.social.map((val, i) => (
                      <a key={i} className="social_link" href={val.href}>
                        <i className={val.iconClass}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <span className="teamCard_profile">{team.profile}</span>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default HomeTeam;
