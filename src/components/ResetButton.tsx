import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <div className="reset-button">
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;