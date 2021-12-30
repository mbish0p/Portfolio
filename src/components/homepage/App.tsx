import React from "react";
import { Helmet } from "react-helmet";

//components
import Slider from "./Slider";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mateusz Biskup</title>
        <meta
          name="description"
          content="Portfolio created by Mateusz Biskup"
        />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>

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
