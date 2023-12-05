import React, { useState, useEffect } from 'react';
import './question.css';

function Question() {
  let HOST = '';
  if (process.env.NODE_ENV === 'production') {
    HOST = 'https://xtend-back.onrender.com';
  } else {
    // Assuming development environment
    HOST = 'http://localhost:8080';
  }
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${HOST}/api/questions`);
      const questionsData = await response.json();
      setQuestions(questionsData);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="container">
      <div className="quiz-container">
        {questions.map((question, index) => (
          <div key={index}>
            <p className="question">{index + 1}. {question.question}</p>
            <ul className="options">
              {question.options.map((option, i) => (
                <li key={i} className="option">{String.fromCharCode(65 + i)}. {option}</li>
              ))}
            </ul>
            <p className="correct-answer">Correct Answer: {question.correctAnswer}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
