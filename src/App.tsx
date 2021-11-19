import React from 'react';
import Slider from './Slider';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="sliders--container">
        <Slider />
      </div>
    </div>
  );
}

export default App;
