import React, { useState, useEffect } from 'react';
import ProgressBar from './Progressbar';
import './Counter.css'; // Import the CSS file

const Counter = ({ isReset }) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (isReset) {
      setCount(0);
      setHistory([]);
      setCurrentIndex(-1);
    }
  }, [isReset]);

  const handleAdd = () => {
    if (count < 150) {
      const newCount = count + 1;
      setCount(newCount);
      updateHistory(newCount);
    }
  };

  const handleSubtract = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateHistory(newCount);
    }
  };

  const updateHistory = (newCount) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newCount]);
    setCurrentIndex(newHistory.length);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCount(history[newIndex]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCount(history[newIndex]);
    }
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={handleSubtract} disabled={count <= 0}>Subtract 1</button>
      <button onClick={handleAdd} disabled={count >= 150}>Add 1</button>
      <div>
        <button onClick={handleUndo} disabled={currentIndex <= 0}>Undo</button>
        <button onClick={handleRedo} disabled={currentIndex >= history.length - 1}>Redo</button>
      </div>
      <h3>Progress:</h3>
      <ProgressBar value={count} />
    </div>
  );
};

export default Counter;
