import React from 'react';

const ProgressBar: React.FC = () => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: '60%' }}></div> 
    </div>
  );
};

export default ProgressBar;
