import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const style = {
  container: {
    padding: "20px",
    border: "1px solid #E0E0E0",
    borderRadius: "15px",
    width: "max-content",
    marginBottom: "40px",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  options: {
    marginBottom: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#FFF",
    fontSize: "14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  feedback: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

function QuizApp() {
  // do not modify the questions or answers below
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === questions[currentQuestionIdx].correct;
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIdx = currentQuestionIdx + 1;

    if (nextQuestionIdx < questions.length) {
      setCurrentQuestionIdx(nextQuestionIdx);
      setSelectedOption("");
    } else {
      setFeedback(
        `Quiz Complete! You scored ${score + (isCorrect ? 1 : 0)} out of ${
          questions.length
        }!`
      );
    }
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {questions[currentQuestionIdx].question}
      </div>
      <div style={style.options}>
        {questions[currentQuestionIdx].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button style={style.button} id="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}></div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<QuizApp />);
