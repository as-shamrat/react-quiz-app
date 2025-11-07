import { useCallback, useState } from "react";
import questions from "../questions";
import completeLogo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [useranswers, setUseranswers] = useState([]);
  const activeQuestionIndex = useranswers.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUseranswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },
    [activeQuestionIndex]
  );
  const handleSelectNull = useCallback(
    function handleSelectNull() {
      handleSelectAnswer(null);
    },
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return <Summary answers={useranswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkip={handleSelectNull}
        activeQuestionIndex={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
