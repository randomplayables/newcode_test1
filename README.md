# Prime Number Guessing Game

A prime number guessing game built with Vite, React, and TypeScript. Try to guess the secret prime number within a limited number of attempts. Feedback is provided for each guess, and your high score (fewest attempts) is saved in your browser’s local storage.

## Features

- Generates a random prime number within a configurable range
- Validates user input for primality and range
- Provides feedback: too low, too high, or correct
- Tracks and displays guess history and attempt count
- Persists high score (best game) in local storage
- Responsive UI built with React and CSS

## Technologies

- React 18
- TypeScript
- Vite
- Custom React hooks for game logic
- Local storage for persistent high score

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository  
   `git clone https://github.com/your-username/prime-guessing-game.git`

2. Install dependencies  
   `cd prime-guessing-game`  
   `npm install`

3. Start the development server  
   `npm run dev`  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production  
   `npm run build`

5. Preview production build  
   `npm run preview`

## Project Structure

src/  
├─ components/  
│  ├─ Header.tsx           # Displays game title, attempt count, and reset  
│  ├─ GuessInput.tsx       # Input field and submit button  
│  ├─ GuessResult.tsx      # Feedback on last guess  
│  ├─ GuessHistory.tsx     # List of previous guesses and outcomes  
│  └─ ResetButton.tsx      # Resets game state  
├─ constants/  
│  └─ index.ts             # Game constants (range, max attempts)  
├─ hooks/  
│  └─ usePrimeGame.ts      # Custom hook encapsulating game logic  
├─ services/  
│  └─ storageService.ts    # Local storage persistence for high score  
├─ types/  
│  └─ index.ts             # TypeScript interfaces and types  
├─ utils/  
│  └─ primeUtils.ts        # Prime generation and primality check  
├─ App.tsx                 # Root component orchestrating UI and state  
├─ main.tsx                # Application bootstrap and render  
├─ index.css               # Global styles  
└─ App.css                 # Component-specific styles  

## Contributing

Contributions are welcome! Please open issues for bugs or feature requests and submit pull requests for enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.