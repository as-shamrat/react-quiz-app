import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, onSelect, answerState }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
