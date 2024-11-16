import React from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Content from './components/Content';
import Footer from './components/Footer';
import './main.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <ProgressBar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
