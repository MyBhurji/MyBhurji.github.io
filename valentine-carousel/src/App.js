import React, { useState } from 'react';
import Home from './components/Home/Home';
import Roses from './components/Roses/Roses';
import './App.css';
import Information from './components/Information/Information';
import Valentine from './components/Valentine/Valentine';

// Navigation Component
const Navigation = ({ activePage, setActivePage }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          onClick={() => setActivePage('home')}
          className={`nav-button ${activePage === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage('valentine')}
          className={`nav-button ${activePage === 'valentine' ? 'active' : ''}`}
        >
          Valentine
        </button>
        <button
          onClick={() => setActivePage('roses')}
          className={`nav-button ${activePage === 'roses' ? 'active' : ''}`}
        >
          Roses
        </button>
        <button
          onClick={() => setActivePage('information')}
          className={`nav-button ${activePage === 'information' ? 'active' : ''}`}
        >
          Information
        </button>
      </div>
    </nav>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'valentine':
        return <Valentine />;
      case 'roses':
        return <Roses />;
      case 'information':
        return <Information />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default App;