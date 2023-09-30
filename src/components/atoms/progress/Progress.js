// components/ProgressBar.js

import React from 'react';

const Progress = ({ height, width, percentage, color }) => {
  const progressBarStyle = {
    width: width,
    height: height,
    backgroundColor: '#1E1C3A', // Default background color
    position: 'relative',
    borderRadius: '10px',
  };

  const completionBarStyle = {
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: color,
    borderRadius: '10px',
  };

  return (
    <div className="progress-bar" style={progressBarStyle}>
      <div className="completion-bar" style={completionBarStyle}></div>
    </div>
  );
};

export default Progress;
