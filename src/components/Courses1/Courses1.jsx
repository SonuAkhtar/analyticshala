// import CSS
import "./courses1.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Courses1 = () => {
  return (
    <section className="courses1" id="courses1">
      <div className="container">
        <SectionHeader number="02" title="Review the" subtitle="Courses" />

        <main>
          <div className="course_card">
            <div className="course_card_left">
              <div className="card_left_name">Course</div>
              <div className="card_left_title">
                <span>01</span>Data Analytics
              </div>
            </div>
            <div className="course_card_right">
              <div className="card_right_name">Chapters</div>
              <div className="card_right_chapters">
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
                <span>Four</span>
                <span>Five</span>
                ...
              </div>

              <div className="course_right_view">
                <a href="">
                  View all Chapters <i class="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="course_card">
            <div className="course_card_left">
              <div className="card_left_name">Course</div>
              <div className="card_left_title">
                <span>01</span>Data Analytics
              </div>
            </div>
            <div className="course_card_right">
              <div className="card_right_name">Chapters</div>
              <div className="card_right_chapters">
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
                <span>Four</span>
                <span>Five</span>
                ...
              </div>

              <div className="course_right_view">
                <a href="">
                  View all Chapters <i class="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="course_card">
            <div className="course_card_left">
              <div className="card_left_name">Course</div>
              <div className="card_left_title">
                <span>01</span>Data Analytics
              </div>
            </div>
            <div className="course_card_right">
              <div className="card_right_name">Chapters</div>
              <div className="card_right_chapters">
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
                <span>Four</span>
                <span>Five</span>
                ...
              </div>

              <div className="course_right_view">
                <a href="">
                  View all Chapters <i class="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Courses1;
