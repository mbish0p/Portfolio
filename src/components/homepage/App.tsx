import React from "react";

//components
import Slider from "./Slider";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="sliders--container">
        <div className="container">
          <h2 className="header--h2 pb-20 text-left">Przygotowane prace</h2>
        </div>
        <About />
        <Slider />
      </div>
    </div>
  );
}

export default App;
