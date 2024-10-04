// imported CSS
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <main className="skills_main">
            <div className="skills_top">
              <div className="skills__heading">
                Get the skills you need to get a Job that is <br />
                <span>in Demand</span>
              </div>
              <div className="skills_details">
                <p>
                  The modern tech market dictates its own terms. Today, to be a
                  competitive spiaclist requires more than professional skills.
                </p>
                <div className="skills_data">
                  <div className="skills_data_item">
                    <div className="skills_number">5+</div>
                    <div className="skills_info">Years Experience</div>
                  </div>
                  <span>|</span>
                  <div className="skills_data_item">
                    <div className="skills_number">10</div>
                    <div className="skills_info">Courses</div>
                  </div>
                  <span>|</span>
                  <div className="skills_data_item">
                    <div className="skills_number">25</div>
                    <div className="skills_info">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills_bottom">
              <div className="skills_types">
                <div className="skills_type_item">
                  <i className="fas fa-medal" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Leadership</div>
                    <div className="skills_type_subtitle">
                      Fully commited to the success company
                    </div>
                  </div>
                </div>
                <div className="skills_type_item">
                  <i className="fas fa-brain" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Responsibility</div>
                    <div className="skills_type_subtitle">
                      Fully commited to the success company
                    </div>
                  </div>
                </div>

                <div className="skills_type_item">
                  <i className="fas fa-bolt" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Flexibility</div>
                    <div className="skills_type_subtitle">
                      Fully commited to the success company
                    </div>
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

export default Skills;
