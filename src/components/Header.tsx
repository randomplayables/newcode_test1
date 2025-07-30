import React from 'react';
import ResetButton from './ResetButton';

interface HeaderProps {
  attemptCount: number;
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ attemptCount, onReset }) => {
  return (
    <div className="header">
      <h1>Prime Number Guessing Game</h1>
      <div className="attempt-count">Attempts: {attemptCount}</div>
      <ResetButton onReset={onReset} />
    </div>
  );
};

export default Header;