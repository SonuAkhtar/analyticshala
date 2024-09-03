import React, { useState } from "react";

// imported Data
import { skillsData } from "../../../appData";

// imported CSS
import "./skills.css";

// imported icons
import arrowIcon from "/assets/skills/arrow.gif";

const Skills = () => {
  const [skillsList, setSkillsList] = useState(0);

  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section_title">Skills</h2>
          <span className="section_subtitle">Technical</span>

          <main className="skills_main">
            {skillsData.map((skill, index) => (
              <div key={skill.id} className="skills_content">
                <div className="skills_header">
                  <i className={`skills_icon ${skill.icon}`} />
                  <div>
                    <h1 className="skills_title">{skill.title}</h1>
                    <span className="skills_subtitle">{skill.subtitle}</span>
                  </div>
                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className={`skills_arrow ${
                      skillsList === index && "rotate"
                    }`}
                    onClick={() =>
                      setSkillsList((prev) =>
                        skillsList === index ? (prev = null) : (prev = index)
                      )
                    }
                  />
                </div>
                <div
                  className={`skills_list ${
                    skillsList === index ? "show" : ""
                  }`}
                >
                  {skill.data.map((item) => (
                    <div key={item.id} className="skills_data">
                      <div className="skills_titles">
                        <h3 className="skills_name">{item.name}</h3>
                        <span className="skills_number">{item.number}%</span>
                      </div>
                      <div className="skills_bar">
                        <span
                          className="skills_percentage"
                          style={{ width: `${item.number}%` }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default Skills;
