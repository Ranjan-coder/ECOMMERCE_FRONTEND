import React from 'react';

const GradientBufferBar = ({ isLoading }) => {
  return <div className={`buffer-bar ${isLoading ? 'visible' : ''}`}></div>;
};

export default GradientBufferBar;
