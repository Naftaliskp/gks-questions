import React, { useState } from 'react';

const Category = ({ category, questions }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="category">
      <div 
        className="category-header"
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
      >
        <span className="category-title">{category}</span>
        <span className="dropdown-icon">{isCategoryOpen ? '∨' : '>'}</span>
      </div>
      
      {isCategoryOpen && (
        <div className="questions-container">
          {questions.map((q) => (
            <QuestionItem key={q.id} question={q} />
          ))}
        </div>
      )}
    </div>
  );
};

const QuestionItem = ({ question }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <div className="question-item">
      <div 
        className="question-header"
        onClick={() => setIsQuestionOpen(!isQuestionOpen)}
      >
        <span className="question-text">Q{question.id}. {question.question}</span>
        <span className="dropdown-icon">{isQuestionOpen ? '∨' : '>'}</span>
      </div>
      
      {isQuestionOpen && (
        <div className="answer-container">
          <p className="answer-text">{question.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Category;