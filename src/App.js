import React from 'react';
import Clicker from './Clicker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <h1>React Clicker</h1>
        <Clicker/>
        <p> A very simple implementation of a React clicker using React Hooks to update state.</p>
      </header>
    </div>
  );
}

export default App;
