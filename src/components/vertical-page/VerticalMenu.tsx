import React from "react";
import { useState, useEffect } from "react";

//libraries
import { useTransition, animated } from "react-spring";
import SwiperCore from "swiper";

//components
import NewsList from "./NewsList";

type Props = {
  slider: SwiperCore | undefined;
};

const VerticalMenu = ({ slider }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (slider) {
      showInfo ? slider.disable() : slider.enable();
    }
  }, [showInfo]);

  const menuTransition = useTransition(showMenu, {
    from: { opacity: 0, transform: "translate3d(0%,-100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0%,-100%,0)" },
  });

  const handleOpenInfo = () => {
    setShowInfo(true);
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide)
      activeSlide.querySelector(".verticalFooter")?.classList.add("-blur");
  };

  return (
    <div className="vertical--menu">
      <NewsList showInfo={showInfo} setShowInfo={setShowInfo} />
      <div className={`circle -info ${showMenu ? "opacity-0" : "opacity-100"}`}>
        <div className="info--icon icon" onClick={handleOpenInfo} />
      </div>
      <h2 className="header--h2 uppercase -small -black mb-16 mt-4 md:mt-2">
        Portfolio
      </h2>
      <div
        className={`circle -menu  ${showInfo ? "opacity-0" : "opacity-100"}`}
      >
        <div
          className="menu--icon icon"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {menuTransition(
        (styles, item) =>
          item && (
            <animated.div className="main--menu" style={styles}>
              <div className="content">
                <h5 className="header--h5 -white">Home</h5>
                <h5 className="header--h5 -white">Work</h5>
                <h5 className="header--h5 -white">About</h5>
                <h5 className="header--h5 -white">FAQ</h5>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default VerticalMenu;
