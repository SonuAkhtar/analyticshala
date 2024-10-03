import "./questions.css";
import { questionsData } from "../../../appData";
import { useState } from "react";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="questions_container">
      <div className="questions_wrapper">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>

        <div className="questions_main">
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
        </div>
      </div>
    </div>
  );
};

export default Questions;
