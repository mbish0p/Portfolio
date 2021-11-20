import React from 'react';
import Slider from './Slider';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="sliders--container">
        <div className='container'>
          <h2 className='header--h2 pb-20 text-left'>Przygotowane prace</h2>
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
