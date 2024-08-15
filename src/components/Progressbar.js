import React from 'react';
import './Progressbar.css';

const Progressbar = ({ value }) => {
  const progress = (value / 150) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress}%`,
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default Progressbar;
