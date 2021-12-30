import React from "react";
import { useRef, useEffect, useState } from "react";

//hooks
import useScrollIntoView from "../../hooks/useScrollIntoView";

//assets
import stars from "../../images/hero/stars.png";
import moon from "../../images/hero/moon.png";
import moutains_behind from "../../images/hero/mountains_behind.png";
import moutains_front from "../../images/hero/mountains_front.png";

const Hero = () => {
  const moonRef = useRef<HTMLImageElement>(null);
  const starsRef = useRef<HTMLImageElement>(null);
  const behindRef = useRef<HTMLImageElement>(null);

  const { scrollToTarget } = useScrollIntoView();

  const handleScroll = (target: string): void => {
    scrollToTarget(`.${target}`);
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (moonRef.current && starsRef.current && behindRef.current) {
        let offsetY = window.scrollY;
        starsRef.current.style.left = offsetY * 0.25 + "px";
        moonRef.current.style.top = offsetY * 1.05 + "px";
        behindRef.current.style.top = offsetY * 0.3 + "px";
      }
    });
  }, []);

  return (
    <div className="hero--container">
      <div className="head--container">
        <h2 className="header--h2 uppercase">Portfolio</h2>
        <ul className="nav--items">
          <li className="item">
            <p
              className="paragraph--component"
              onClick={() => handleScroll("aboutContainer")}
            >
              About
            </p>
          </li>
          <li className="item">
            <p
              className="paragraph--component"
              onClick={() => handleScroll("projectContainer")}
            >
              Projects
            </p>
          </li>
          <li className="item">
            <p
              className="paragraph--component"
              onClick={() => handleScroll("slidersContainer")}
            >
              Components
            </p>
          </li>
          <li className="item">
            <p
              className="paragraph--component"
              onClick={() => handleScroll("contactContainer")}
            >
              Contact
            </p>
          </li>
        </ul>

        <div className={`mobile--menu ${isActive ? "-active" : ""}`}>
          <div
            className={`toggle ${isActive ? "-active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          ></div>
          <div
            className="item -about"
            style={{ "--i": "1" } as React.CSSProperties}
            onClick={() => handleScroll("aboutContainer")}
          >
            <label className="menu--label">About</label>
          </div>
          <div
            className="item -projects"
            style={{ "--i": "2" } as React.CSSProperties}
            onClick={() => handleScroll("projectContainer")}
          >
            <label className="menu--label">Projects</label>
          </div>
          <div
            className="item -work"
            style={{ "--i": "3" } as React.CSSProperties}
            onClick={() => handleScroll("slidersContainer")}
          >
            <label className="menu--label">Components</label>
          </div>
          <div
            className="item -contact"
            style={{ "--i": "4" } as React.CSSProperties}
            onClick={() => handleScroll("contactContainer")}
          >
            <label className="menu--label">Contact</label>
          </div>
        </div>
      </div>
      <section className="paralax--animation">
        <img
          ref={starsRef}
          src={stars}
          id="stars"
          alt="stars"
          className="img"
        />
        <img
          ref={moonRef}
          src={moon}
          id="moon"
          alt="moon"
          className="img -moon"
        />
        <img
          ref={behindRef}
          src={moutains_behind}
          id="moutains_behind"
          alt="moutains_behind"
          className="img"
        />
        <img
          src={moutains_front}
          id="moutains_front"
          alt="moutains_front"
          className="img -front"
        />
      </section>
    </div>
  );
};

export default Hero;
