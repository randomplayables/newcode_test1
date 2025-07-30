export type GuessResult = 'low' | 'high' | 'correct';

export interface GuessEntry {
  guess: number;
  result: GuessResult;
}

export interface GameState {
  secretNumber: number;
  guesses: GuessEntry[];
  attemptCount: number;
  lastResult: GuessResult | null;
  gameOver: boolean;
}

export interface UsePrimeGameReturn {
  guesses: GuessEntry[];
  lastResult: GuessResult | null;
  attemptCount: number;
  gameOver: boolean;
  handleGuess: (guess: number) => void;
  resetGame: () => void;
}

export interface HeaderProps {
  attemptCount: number;
  onReset: () => void;
}

export interface GuessInputProps {
  onGuess: (guess: number) => void;
  disabled?: boolean;
}

export interface GuessResultProps {
  lastResult: GuessResult | null;
}

export interface GuessHistoryProps {
  guesses: GuessEntry[];
}

export interface ResetButtonProps {
  onReset: () => void;
}