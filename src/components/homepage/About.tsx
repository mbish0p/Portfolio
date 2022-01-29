import React from "react";

//assets
import CV from "../../Mateusz-Biskup.pdf";

const About = () => {
  return (
    <div className="about--container container aboutContainer">
      <div className="head">
        <h2 className="header--h2 -white mb-4 md:mb-0">About me</h2>
        <p className="paragraph--component -big -violet subtitle">
          who I&nbsp;am
        </p>
      </div>
      <div className="content">
        <div className="avatar--wrapper">
          <div className="avatar" />
        </div>
        <div className="description">
          <p className="paragraph--component -lead mb-6">
            I'm Mateusz&nbsp;and I'm&nbsp;
            <span className="uppercase -violet">Webdeveloper</span>
          </p>
          <p className="paragraph--component main">
            Hi, I am software developer located in Poland, through my commercial
            career I was mainly focused on creating client/graphical side of
            websites or mobile application following coding standarts and best
            practises. Besides that I also create all server side application to
            my personal projects, all of them was node based applications wit.
            In the future if is possible I want work as fullstack developer.
            Highly interested on learning and working with new technologies with
            positive people. After work, adept of martial arts such as boxing or
            ju-jitsu. Fan of asian culture, outdoor activity, TV-series and
            fantasy books.
          </p>

          <a href={CV} className="btn--component mt-12" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
