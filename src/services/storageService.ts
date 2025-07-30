const HIGH_SCORE_KEY = 'prime-guessing-game-high-score';

export function getHighScore(): number | null {
  try {
    const stored = localStorage.getItem(HIGH_SCORE_KEY);
    if (!stored) {
      return null;
    }
    const parsed = parseInt(stored, 10);
    return isNaN(parsed) ? null : parsed;
  } catch (error) {
    console.error('Error getting high score from localStorage:', error);
    return null;
  }
}

export function saveHighScore(score: number): void {
  try {
    const current = getHighScore();
    if (current === null || score < current) {
      localStorage.setItem(HIGH_SCORE_KEY, score.toString());
    }
  } catch (error) {
    console.error('Error saving high score to localStorage:', error);
  }
}

export function clearHighScore(): void {
  try {
    localStorage.removeItem(HIGH_SCORE_KEY);
  } catch (error) {
    console.error('Error clearing high score from localStorage:', error);
  }
}