import React from "react";
import { useRef, useEffect, useState } from "react";

//components
import VerticalMenu from "./VerticalMenu";
import InfoModal from "../common/modals/InfoModal";

//libraries
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { animated, useSpring } from "react-spring";

//assets
import background1 from "../../images/vertical-slider/background1.jpg";
import background2 from "../../images/vertical-slider/background2.jpg";
import background3 from "../../images/vertical-slider/background3.jpg";
import background4 from "../../images/vertical-slider/background4.jpg";
import background5 from "../../images/vertical-slider/background5.jpg";
import background6 from "../../images/vertical-slider/background6.jpg";

const items = [
  {
    id: 1,
    backgroundImage: background1,
    descriptionTitle: "Praesent in volutpat",
    description:
      "Curabitur laoreet sem rutrum nulla consequat, eu pretium nisi eleifend. Sed feugiat placerat ornare. Pellentesque imperdiet eu ligula eu cursus.",
  },
  {
    id: 2,
    backgroundImage: background2,
    descriptionTitle: "Cras consequat tincidunt",
    description:
      "Etiam venenatis neque tellus, a semper dolor consequat et. Quisque aliquam luctus volutpat.",
  },
  {
    id: 3,
    backgroundImage: background3,
    descriptionTitle: "Cras consequat tincidunt",
    description:
      "Curabitur congue, tortor eu ultrices tristique, turpis ante iaculis elit, id consectetur ipsum tellus quis lectus. Nunc commodo ornare congue.",
  },
  {
    id: 4,
    backgroundImage: background4,
    descriptionTitle: "Cras consequat tincidunt",
    description:
      "Curabitur congue, tortor eu ultrices tristique, turpis ante iaculis elit, id consectetur ipsum tellus quis lectus. Nunc commodo ornare congue.",
  },
  {
    id: 5,
    backgroundImage: background5,
    descriptionTitle: "Cras consequat tincidunt",
    description:
      "Aenean pellentesque sit amet dolor eu mollis. Integer lacinia at dui sit amet rhoncus. Donec auctor eu orci dapibus mattis. Praesent ac porttitor felis.",
  },
  {
    id: 6,
    backgroundImage: background6,
    descriptionTitle: "Cras consequat tincidunt",
    description:
      "Etiam accumsan tortor nec porta tincidunt. Fusce bibendum nisi sit amet cursus pellentesque. Donec euismod est vel nunc feugiat lobortis.",
  },
];

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const VerticalPage = () => {
  const modalTitle = "Wawes and SVGs morphing animations";
  const modalDescription =
    "While in some cases you might be able to create SVG morphing animations via CSS3 transition, this component was developed to provide various solutions for working with complex shapes, bringing convenience, resources and clarity to one of the most complex types of animation.";
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [verticalSwiper, setVerticalSwiper] = useState<SwiperCore>();

  useEffect(() => {
    if (ref.current)
      ref.current.style.backgroundImage = `url(${items[0].backgroundImage})`;

    setIsModalOpen(true);
    window.scrollTo(0, 0);
  }, []);

  const handlePrevStart = async (swiper: any) => {
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${swiper.slides[
        swiper.activeIndex
      ].getAttribute("data-image")})`;
    }
  };

  const closeCallback = () => {
    setIsModalOpen(false);
  };

  const handleNextStart = (swiper: any) => {
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${swiper.slides[
        swiper.activeIndex
      ].getAttribute("data-image")})`;
      ref.current.classList.add("-next");
    }
  };

  const spring = useSpring({
    from: {
      opacity: 1,
      display: "block",
    },
    to: hideFooter
      ? [{ opacity: 0 }, { display: "none" }]
      : [{ display: "block" }, { opacity: 1 }],
  });

  return (
    <div ref={ref} className="verticle--wrapper">
      <InfoModal
        open={isModalOpen}
        closeCallback={closeCallback}
        lead={modalTitle}
        description={modalDescription}
      />
      <VerticalMenu slider={verticalSwiper} />
      <div className="menu--body">
        <Swiper
          onSwiper={setVerticalSwiper}
          direction={"vertical"}
          slidesPerView={"auto"}
          mousewheel={true}
          pagination={true}
          loop={true}
          speed={700}
          onSlidePrevTransitionStart={handlePrevStart}
          onSlideNextTransitionStart={handleNextStart}
          className="vertical--slider"
        >
          {items.map((item) => {
            return (
              <SwiperSlide data-image={item.backgroundImage}>
                <div
                  className="slide--background"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                >
                  <div className="footer verticalFooter">
                    <div
                      className="footer--nav"
                      onClick={() => setHideFooter(!hideFooter)}
                    >
                      <h5 className="header--h5 mb-6">
                        {item.descriptionTitle}
                      </h5>
                      <div
                        className={`arrow--down mt-2 ml-12 ${
                          hideFooter ? "-rotate" : ""
                        }`}
                      />
                    </div>
                    <animated.p
                      style={spring}
                      className={`paragraph--component -big`}
                    >
                      {item.description}
                    </animated.p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VerticalPage;
