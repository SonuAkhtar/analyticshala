import { useState } from "react";
import "./courses.css";

import { coursesData } from "../../../appData";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(coursesData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const courseCategory = [
    "All",
    "Data Analytics",
    "Visualization",
    "Web Development",
  ];

  const handleCategoryClick = (type) => {
    setSelectedCategory(type);

    const filteredCourses = coursesData.filter((course) => {
      return course.category === type;
    });

    if (type === "All") {
      setSelectedCourse(coursesData);
    } else {
      setSelectedCourse(filteredCourses);
    }
  };

  return (
    <div className="courses_container">
      <div className="courses_wrapper">
        <h1>COURSES we offer</h1>
        <div className="course_nav">
          {courseCategory.map((course, index) => (
            <button
              key={index}
              className={`${selectedCategory === course ? "active" : ""}`}
              onClick={() => handleCategoryClick(course)}
            >
              {course}
            </button>
          ))}
        </div>
        <div className="course_cards">
          {selectedCourse.map((course, index) => (
            <div key={index} className="course_card">
              <div className="course_category_number">
                <span className="course_category">{course.category}</span>
                <span className="course_number">{course.number}</span>
              </div>
              <div className="course_info">
                <h2>{course.title}</h2>
                <p>{course.subtitle}</p>
              </div>
              <button className="course_btn">Know more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
