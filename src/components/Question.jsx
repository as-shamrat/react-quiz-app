import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../questions";
const Question = ({ activeQuestionIndex, onSkip, onSelect }) => {
  let timer = 6000;
  const [answer, setAnswer] = useState({
    isCorrect: null,
    selectedAnswer: "",
  });
  function handleSelectAnswer(answer) {
    setAnswer({
      isCorrect: null,
      selectedAnswer: answer,
    });
    setTimeout(() => {
      setAnswer({
        isCorrect: questions[activeQuestionIndex].answers[0] === answer,
        selectedAnswer: answer,
      });
      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect === null) {
    answerState = "answered";
    timer = 1000;
  } else if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
    timer = 2000;
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer ? null : onSkip}
      />
      <h2>{questions[activeQuestionIndex].text}</h2>
      <Answers
        onSelect={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        answers={questions[activeQuestionIndex].answers}
      />
    </div>
  );
};

export default Question;
