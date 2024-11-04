import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((prevId) => prevId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }
  // Function to reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(1); // Reset to the first question
    setScore(0); // Reset the score
    setQuestions(quiz); // Reset the questions (in case you modify it later)
  };

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
            <button onClick={resetQuiz}>Play Again</button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
