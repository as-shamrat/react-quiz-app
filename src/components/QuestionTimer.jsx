import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(() => {
      if (onTimeout) {
        onTimeout();
      }
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  return <progress max={timeout} value={remainingTime} id="question-time" />;
};

export default QuestionTimer;
