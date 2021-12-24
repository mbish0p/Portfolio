import React from "react";
import { useRef, useEffect, useState } from "react";

//components
import VerticalMenu from "./VerticalMenu";

//libraries
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

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
    description:
      "Curabitur laoreet sem rutrum nulla consequat, eu pretium nisi eleifend. Sed feugiat placerat ornare. Pellentesque imperdiet eu ligula eu cursus.",
  },
  {
    id: 2,
    backgroundImage: background2,
    description:
      "Etiam venenatis neque tellus, a semper dolor consequat et. Quisque aliquam luctus volutpat.",
  },
  {
    id: 3,
    backgroundImage: background3,
    description:
      "Curabitur congue, tortor eu ultrices tristique, turpis ante iaculis elit, id consectetur ipsum tellus quis lectus. Nunc commodo ornare congue.",
  },
  {
    id: 4,
    backgroundImage: background4,
    description:
      "Curabitur congue, tortor eu ultrices tristique, turpis ante iaculis elit, id consectetur ipsum tellus quis lectus. Nunc commodo ornare congue.",
  },
  {
    id: 5,
    backgroundImage: background5,
    description:
      "Aenean pellentesque sit amet dolor eu mollis. Integer lacinia at dui sit amet rhoncus. Donec auctor eu orci dapibus mattis. Praesent ac porttitor felis.",
  },
  {
    id: 6,
    backgroundImage: background6,
    description:
      "Etiam accumsan tortor nec porta tincidunt. Fusce bibendum nisi sit amet cursus pellentesque. Donec euismod est vel nunc feugiat lobortis.",
  },
];

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const VerticalPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [verticalSwiper, setVerticalSwiper] = useState<SwiperCore>();

  useEffect(() => {
    if (ref.current)
      ref.current.style.backgroundImage = `url(${items[0].backgroundImage})`;
  }, []);

  const handlePrevStart = async (swiper: any) => {
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${swiper.slides[
        swiper.activeIndex
      ].getAttribute("data-image")})`;
    }
  };

  const handleNextStart = (swiper: any) => {
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${swiper.slides[
        swiper.activeIndex
      ].getAttribute("data-image")})`;
      ref.current.classList.add("-next");
    }
  };

  return (
    <div ref={ref} className="verticle--wrapper">
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
                    <h5 className="header--h5">{item.description}</h5>
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
