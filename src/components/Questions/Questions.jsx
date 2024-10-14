import "./questions.css";
import { questionsData } from "../../../appData";
import { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section className="questions" id="questions">
      <div className="container">
        <SectionHeader
          number="01"
          title="Frequently Asked"
          subtitle="Questions"
        />

        <main className="questions_main">
          {questionsData.map((question, index) => (
            <div
              key={index}
              className={`question_item ${
                currentQuestion === index ? "active" : ""
              }`}
            >
              <div className="question_number">{question.number}</div>
              <div className="question_answer">
                <h3>{question.question}</h3>
                <p>{question.answer}</p>
              </div>
              <div
                className="question_arrow"
                onClick={() => setCurrentQuestion(index)}
              >
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Questions;
