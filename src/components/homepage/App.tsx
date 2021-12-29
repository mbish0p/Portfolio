import React from "react";

//components
import Slider from "./Slider";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <div className="sliders--container slidersContainer">
        <div className="container">
          <div className="head">
            <h2 className="header--h2 -white mb-4">Interesting components</h2>
            <p className="paragraph--component -big -violet subtitle">
              some interesting components
            </p>
          </div>
        </div>
        <Slider />
      </div>
      <Contact />
    </div>
  );
}

export default App;
