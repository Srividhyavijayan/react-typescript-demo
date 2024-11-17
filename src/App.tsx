import React from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Content from './components/Content';
import Footer from './components/Footer';
//import UploadLogo from './components/UploadLogo';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import LogoUploadPage from './components/UploadLogo'; // Adjust path if needed

import './main.scss';
// import UploadLogo from './components/UploadLogo';

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
