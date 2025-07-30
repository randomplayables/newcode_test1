import React from 'react';

interface GuessHistoryProps {
  guesses: {
    guess: number;
    result: 'low' | 'high' | 'correct';
  }[];
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return null;
  }

  return (
    <div className="guess-history">
      <ul>
        {guesses.map((entry, index) => (
          <li key={index}>
            <span>{entry.guess}</span>
            <span>
              {entry.result === 'low'
                ? 'Too low!'
                : entry.result === 'high'
                ? 'Too high!'
                : 'Correct!'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuessHistory;
