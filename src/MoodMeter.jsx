import React, { useState } from 'react';
import quizzes from './quizzes.js';

function pickRandomQuiz(excludeIds) {
  const pool = quizzes.filter((q) => !excludeIds.includes(q.id));
  return pool[Math.floor(Math.random() * pool.length)]; // NOSONAR - UI randomness only, not security-sensitive
}

export default function MoodMeter() {
  const [currentQuiz, setCurrentQuiz] = useState(() => pickRandomQuiz([]));
  const [answeredIds, setAnsweredIds] = useState([]);
  const [response, setResponse] = useState(null);

  const handleVote = (option) => {
    setResponse(option.response);
    setAnsweredIds((prev) => (prev.includes(currentQuiz.id) ? prev : [...prev, currentQuiz.id]));

    const event = new CustomEvent('leoday:mood-updated', {
      detail: { message: option.response },
    });
    window.dispatchEvent(event);
  };

  const handleNext = () => {
    const excludeIds = answeredIds.includes(currentQuiz.id) ? answeredIds : [...answeredIds, currentQuiz.id];
    setCurrentQuiz(pickRandomQuiz(excludeIds));
    setResponse(null);
  };

  const remaining = quizzes.length - answeredIds.length;
  const allAnswered = remaining === 0;
  const showNextIcon = response !== null && !allAnswered;

  return (
    <div style={{ color: '#ffffff', fontFamily: "'Source Sans Pro', sans-serif" }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#57B12D', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, textTransform: 'uppercase' }}>
        {currentQuiz.emoji} {currentQuiz.title}
      </h3>
      <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '15px' }}>
        {currentQuiz.subtitle}
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {currentQuiz.options.map((option) => (
          <button key={option.label} style={btnStyle} onClick={() => handleVote(option)}>
            {option.label}
          </button>
        ))}
      </div>

      {response && (
        <div style={resultStyle}>
          <span>
            <strong>Status Updated:</strong> {response}
          </span>
          {showNextIcon && (
            <button
              onClick={handleNext}
              title="Show me another random poll"
              aria-label="Show me another random poll"
              style={nextBtnStyle}
            >
              🎲
            </button>
          )}
        </div>
      )}

      {allAnswered && response && (
        <p style={{ color: '#8b949e', fontSize: '13px', marginTop: '10px' }}>
          🎉 You've answered every poll. That's the whole vibe check!
        </p>
      )}
    </div>
  );
}

const btnStyle = {
  background: '#21262d',
  border: '1px solid #30363d',
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
};

const resultStyle = {
  marginTop: '15px',
  padding: '10px',
  background: 'rgba(87, 177, 45, 0.15)',
  borderLeft: '3px solid #57B12D',
  borderRadius: '4px',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
};

const nextBtnStyle = {
  background: 'transparent',
  border: 'none',
  fontSize: '1.4em',
  cursor: 'pointer',
  lineHeight: 1,
  flexShrink: 0,
};
