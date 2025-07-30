import React, { useState, ChangeEvent, FormEvent } from 'react';

interface GuessInputProps {
  onGuess: (guess: number) => void;
  disabled?: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const guess = parseInt(inputValue, 10);
    if (!isNaN(guess)) {
      onGuess(guess);
      setInputValue('');
    }
  };

  return (
    <form className="guess-input" onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Enter your guess"
      />
      <button type="submit" disabled={disabled || inputValue.trim() === ''}>
        Guess
      </button>
    </form>
  );
};

export default GuessInput;