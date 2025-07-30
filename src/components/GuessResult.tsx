import React from 'react';

interface GuessResultProps {
  lastResult: 'low' | 'high' | 'correct' | null;
}

const GuessResult: React.FC<GuessResultProps> = ({ lastResult }) => {
  if (!lastResult) {
    return null;
  }

  let message = '';
  if (lastResult === 'low') {
    message = 'Too low!';
  } else if (lastResult === 'high') {
    message = 'Too high!';
  } else {
    message = 'Correct!';
  }

  return (
    <div className="guess-result">
      {message}
    </div>
  );
};

export default GuessResult;
