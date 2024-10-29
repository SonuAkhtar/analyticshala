// import CSS
import "./courses1.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

// import appData
import { coursesData } from "../../../appData";

const Courses1 = () => {
  return (
    <section className="courses1" id="courses1">
      <div className="container">
        <SectionHeader number="02" title="Review the" subtitle="Courses" />

        <main>
          {coursesData.map((course) => (
            <div key={course.id} className="course_card">
              <div className="course_card_left">
                <div className="card_left_name">Course</div>
                <div className="card_left_title">
                  <span>0{course.id}</span>
                  {course.title}
                </div>
              </div>
              <div className="course_card_right">
                <div className="card_right_name">Subjects</div>
                <div className="card_right_chapters">
                  {course.chapters.map((chapter, i) => (
                    <span key={i}>{chapter}</span>
                  ))}
                  ...
                </div>

                <div className="course_right_view">
                  <a href="">
                    View all Chapters <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Courses1;
