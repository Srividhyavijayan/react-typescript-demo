import React from 'react';

const Footer: React.FC = () => {
  const handleNextClick = () => {
    alert('Proceeding to the next step');
  };

  return (
    <div className="footer">
      <button className="back-button">Go back</button>
      <p className="auto-save">Progress Automatically Saved</p>
      <div className="navigation">
        <button className="preview-button">Preview</button>
        <button className="next-button" onClick={handleNextClick}>Next Step</button>
      </div>
    </div>
  );
};

export default Footer;
