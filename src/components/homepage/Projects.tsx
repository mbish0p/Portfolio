import React from "react";
import { useState, useEffect, useRef } from "react";

//libs
import { animated, useSpring, config } from "react-spring";

//assets
import projectImage1 from "../../images/main/projects/project_mff.png";
import projectImage2 from "../../images/main/projects/project_hyundai.png";
import projectImage3 from "../../images/main/projects/project_elektrolux.png";
import projectImage4 from "../../images/main/projects/project_pilsner.png";
import projectImage5 from "../../images/main/projects/project_luxtorpeda.png";
import projectImage6 from "../../images/main/projects/project_brandenburgia.png";
import projectImage7 from "../../images/main/projects/project_romeloft.png";
import projectImage8 from "../../images/main/projects/project_asystent.png";
import projectImage9 from "../../images/main/projects/project_wyprobuj.png";

let projects = [
  {
    id: 1,
    name: "Media For Freedom",
    href: "https://mediaforfreedom.org/",
    image: projectImage1,
    technologies: ["preact", "react-spring", "tailwind", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 2,
    name: "Hyundai Electric Cars",
    href: "https://energianadroge.pl/",
    image: projectImage2,
    technologies: ["preact", "react-spring", "tailwind", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 5,
    name: "Luxtorpeda",
    href: "https://play.google.com/store/apps/details?id=pl.quantoo.luxtorpeda.app&hl=pl&gl=US",
    image: projectImage5,
    technologies: ["react", "redux", "ionic", "scss", "vanillaJS"],
    isMobile: true,
  },
];

const projects1 = [
  {
    id: 3,
    name: "Elektrolux Projekt Kuchnia",
    href: "https://projektkuchnia.onet.pl/",
    image: projectImage3,
    technologies: ["preact", "react-spring", "tailwind", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 4,
    name: "Pilsner Urquell",
    href: "https://nicniepobijeoryginalu.onet.pl/",
    image: projectImage4,
    technologies: ["preact", "react-spring", "tailwind", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 6,
    name: "Brandenburgia",
    href: "https://brandenburgia.onet.pl/",
    image: projectImage6,
    technologies: ["preact", "tailwind", "scss", "vanillaJS"],
    isMobile: false,
  },
];

const projects2 = [
  {
    id: 7,
    name: "Romeloft",
    href: "https://beta.romeloft.com/",
    image: projectImage7,
    technologies: ["Wordpress", "HTML5", "JQuery", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 8,
    name: "Asystent IQOS",
    href: "https://systemiqos.pl/pl/asystent-iqos/",
    image: projectImage8,
    technologies: ["HTML5", "JQuery", "scss", "vanillaJS"],
    isMobile: false,
  },
  {
    id: 9,
    name: "Wypróbuj IQOS",
    href: "https://systemiqos.pl/pl/wyprobuj/",
    image: projectImage9,
    technologies: ["HTML5", "JQuery", "scss", "vanillaJS"],
    isMobile: false,
  },
];

const projectsMaps = [projects1, projects2];

const Projects = () => {
  const [fetchedProjects, setFetchedProjects] = useState(1);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      window.dispatchEvent(new Event("resize"));
    }
  });

  const { y } = useSpring({
    y: projectsMaps.length >= fetchedProjects ? height + 310 : height + 210,
    config: config.slow,
  });

  const fetchMoreProjects = () => {
    const fetchingProjects = projectsMaps[fetchedProjects - 1];
    projects = [...projects, ...fetchingProjects];
    setFetchedProjects(fetchedProjects + 1);
  };

  return (
    <animated.div
      className="projects--container container"
      style={{
        height: y.to((y) => `${y}px`),
      }}
    >
      <div className="head">
        <h2 className="header--h2 -white mb-4">Recent project</h2>
        <p className="paragraph--component -big -violet subtitle">
          websites which I&nbsp;was involved in creation
        </p>
      </div>
      <div ref={ref} className="content">
        {projects.map((item) => {
          return (
            <a
              href={item.href}
              rel="noreferrer"
              target="_blank"
              key={item.id}
              className="project--container"
            >
              {item.isMobile && (
                <div className="mobile--image" title="Mobile App" />
              )}
              <div className="navbar">
                <div className="mac--items">
                  <div className="red" />
                  <div className="orange" />
                  <div className="green" />
                </div>
                <p className="paragraph--component name">{item.name}</p>
                <div />
              </div>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="image"
              ></div>
            </a>
          );
        })}
      </div>
      <div>
        {projectsMaps.length >= fetchedProjects && (
          <button className="btn--component" onClick={fetchMoreProjects}>
            See more
          </button>
        )}
      </div>
    </animated.div>
  );
};

export default Projects;
