import React from 'react';
import './App.scss';
import './index.css';
import Slider from './Slider';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <header className="App-header">
        <Slider />
      </header>
    </div>
  );
}

export default App;
