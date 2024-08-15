import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setIsReset(true);  // Signal the Counter component to reset
    setTimeout(() => setIsReset(false), 0);  // Clear the reset signal immediately after resetting
  };

  return (
    <div className="App">
      <header>
        <h1>Counter Progress Bar Application</h1>
        <p>
          This application allows you to increment and decrement a number using buttons, visualize the current number using a progress bar, and undo/redo your operations. The value is constrained between 0 and 150.
        </p>
      </header>

      <main>
        <Counter isReset={isReset} />
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </main>

      <footer>
        <p>Developed By Risav Kumar Jha!!</p>
      
      </footer>
    </div>
  );
}

export default App;
