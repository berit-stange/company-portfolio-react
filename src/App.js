import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <p>
          COMPANY PORTFOLIO
        </p>

      </header>
    </div>
  );
}

export default App;