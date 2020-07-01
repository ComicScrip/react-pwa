import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstallBanner from './InstallBanner';

function App() {
  return (
    <div className="App">
      <InstallBanner/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
