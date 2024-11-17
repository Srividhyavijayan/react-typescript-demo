 import React from 'react';

const Content: React.FC = () => {
  return (
    <div className="content">
      <h2>How do you want to be called?</h2>
      <p>Enter the Company's name and also the name of your venue, which will be the title of the listing.</p>
      <form className="form">
        <input type="text" placeholder="Company Name" className="input-field" required />
        <input type="text" placeholder="Name of Your Venue" className="input-field" required />
      </form>
    </div>
  );
};

export default Content;
