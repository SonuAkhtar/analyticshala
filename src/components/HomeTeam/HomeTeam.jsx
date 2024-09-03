// imported Data
import { teamData } from "../../../appData";

// imported CSS
import "./homeTeam.css";

const HomeTeam = () => {
  return (
    <>
      <section className="homeTeam" id="homeTeam">
        <div className="container">
          <h2 className="section_title">Team</h2>
          <span className="section_subtitle">Meet the</span>

          <main className="homeTeam_main">
            {teamData.map((team) => (
              <div key={team.id} className="card_container">
                <img src={team.image} alt="team member" />

                <div className="teamCard_details">
                  <span className="teamCard_number">{team.number}</span>
                  <div className="teamCard_info">
                    <span>{team.name}</span>
                    <span className="teamCard_position">{team.position}</span>
                  </div>

                  <button className="teamCard_button">Know More</button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default HomeTeam;
