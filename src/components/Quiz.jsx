import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';

const Quiz = () => {
  const [userAnswers, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Throfy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
