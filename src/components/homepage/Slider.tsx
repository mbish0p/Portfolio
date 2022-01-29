/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//assets
import cards from "../../images/main/components/cards.jpeg";
import vertical from "../../images/main/components/vertical.png";
import waves from "../../images/main/components/waves.png";
import picker from "../../images/main/components/picker.png";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slider = () => {
  const [smallSwiper, setSmallSwiper] = useState<SwiperCore>();
  const [bigSwiper, setBigSwiper] = useState<SwiperCore>();
  const [descriptionSwiper, setDescriptionSwiper] = useState<SwiperCore>();

  const smallSwipperSettings = {
    spaceBetween: 10,
    loop: true,
    allowTouchMove: false,
    initialSlide: 3,
    slideToClickedSlide: false,
    breakpoints: {
      1054: {
        slidesPerView: 2.2,
      },
    },
  };

  const bigSwipperSettings = {
    loop: true,
    initialSlide: 1,
    allowTouchMove: false,
  };

  const handlePrevSlide = () => {
    if (smallSwiper && bigSwiper && descriptionSwiper) {
      bigSwiper.slidePrev();
      smallSwiper.slidePrev();
      descriptionSwiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (smallSwiper && bigSwiper && descriptionSwiper) {
      bigSwiper.slideNext();
      smallSwiper.slideNext();
      descriptionSwiper.slideNext();
    }
  };

  const handleNextClick = (isNext: boolean) => {
    if (smallSwiper && bigSwiper && descriptionSwiper) {
      smallSwiper.slideNext();
      bigSwiper.slideNext();
      descriptionSwiper.slideNext();
    }
  };

  const [elementsList, setElementsList] = useState([] as any[]);

  useEffect(() => {
    //to do fetch from api
    const sliderElements: any[] = [
      {
        id: 1,
        title: "3D cards hover animation",
        description:
          "Card 3D hover animation effect, based on gesture calulate deviation from the center. Possibility of using in all types of list of products or person blocks.",
        background: cards,
        href: "/cards",
      },
      {
        id: 2,
        title: "Vertical slider as website",
        description:
          "Donec lectus ipsum, finibus posuere imperdiet id, porttitor ullamcorper tortor. Pellentesque nec rhoncus leo.",
        background: vertical,
        href: "/verticals",
      },
      {
        id: 3,
        title: "Morphic blob and waves",
        description:
          "Sed ultrices turpis vel nulla placerat, in dictum ex elementum. Nunc lacinia diam vel tortor iaculis tincidunt. Vivamus malesuada dolor a semper convallis.",
        background: waves,
        href: "/waves",
      },
      {
        id: 4,
        title: "Option picker animation",
        description:
          "Etiam nisi lacus, dictum vitae purus quis, posuere sodales tortor",
        background: picker,
        href: "/picker",
      },
    ];
    setElementsList(sliderElements);
  }, []);

  return (
    <div>
      <div className="relative">
        <Swiper
          onSwiper={setSmallSwiper}
          {...smallSwipperSettings}
          className="small--slider"
        >
          {elementsList.map((item) => {
            return (
              <SwiperSlide
                className="slider--wrapper"
                data-id={item.id}
                data-title={item.title}
                key={item.id}
              >
                {({ isNext }: any) => (
                  <div
                    className="slider--item"
                    onClick={() => handleNextClick(isNext)}
                    style={{ backgroundImage: `url(${item.background})` }}
                  ></div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="container">
          <Swiper
            onSwiper={setBigSwiper}
            {...bigSwipperSettings}
            className="big--slider bigSlider"
          >
            {elementsList.map((item) => {
              return (
                <SwiperSlide
                  className="slider--wrapper"
                  data-id={item.id}
                  key={item.id}
                >
                  {({ isActive }: any) => (
                    <div
                      className="slider--item"
                      style={{ backgroundImage: `url(${item.background})` }}
                    >
                      <Link to={item.href} className="w-full h-full block" />
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Swiper
        onSwiper={setDescriptionSwiper}
        {...bigSwipperSettings}
        autoHeight={true}
        className="description--slider"
      >
        <div className="description container">
          <div className="slide--nav">
            <div className="nav--wrapper -left" onClick={handlePrevSlide}>
              <div className="swiper-button-prev"></div>
            </div>
            <div className="nav--wrapper -right" onClick={handleNextSlide}>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
        {elementsList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="container">
                <p className="paragraph--component -small pb-6 md:pb-10 description -border">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
