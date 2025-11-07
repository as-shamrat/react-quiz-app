import React from "react";
import completeLogo from "../assets/quiz-complete.png";
import questions from "../questions";
const Summary = ({ answers }) => {
  const correctAnswers = answers.filter(
    (answer, i) => answer !== null && answer === questions[i].answers[0]
  );
  const correctAnswersPercentage = Math.floor(
    (correctAnswers.length / answers.length) * 100
  );
  const wrongAnswers = answers.filter(
    (answer, i) => answer !== null && answer !== questions[i].answers[0]
  );
  const wrongAnswersPercentage = Math.floor(
    (wrongAnswers.length / answers.length) * 100
  );
  const skippedAnswers = answers.filter((answer, i) => answer === null);
  const skippedAnswersPercentage = Math.floor(
    (skippedAnswers.length / answers.length) * 100
  );
  return (
    <div id="summary">
      <img src={completeLogo} alt="" />
      <h2>Quiz is complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correctAnswersPercentage}%</span>
          <span className="text">Correct Answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercentage}%</span>
          <span className="text">Wrong Answers</span>
        </p>
        <p>
          <span className="number">{skippedAnswersPercentage}%</span>
          <span className="text">Skipped Answers</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
