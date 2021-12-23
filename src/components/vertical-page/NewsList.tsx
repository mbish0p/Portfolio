import React from "react";

//libraries
import { useTransition, animated } from "react-spring";

//assets
import holiday1 from "../../images/vertical-slider/news/holidays_1.jpeg";
import holiday2 from "../../images/vertical-slider/news/holidays_2.jpeg";
import holiday3 from "../../images/vertical-slider/news/holidays_3.jpeg";
import holiday4 from "../../images/vertical-slider/news/holidays_4.jpeg";
import holiday5 from "../../images/vertical-slider/news/holidays_5.jpeg";
import holiday6 from "../../images/vertical-slider/news/holidays_6.jpeg";
import holiday7 from "../../images/vertical-slider/news/holidays_7.jpeg";

type Props = {
  showInfo: boolean;
  setShowInfo: (toggle: boolean) => void;
};

type News = {
  id: number;
  name: string;
  descritpion: string;
  image: string;
};

const newsList: News[] = [
  {
    id: 1,
    name: "Cras varius",
    descritpion:
      "Maecenas vel tortor laoreet, vestibulum odio vel, dapibus leo. Duis mollis, magna nec pellentesque sodales, augue elit convallis enim.",
    image: holiday1,
  },
  {
    id: 2,
    name: "Donec dictum",
    descritpion:
      "Sroin accumsan ante id ultricies tincidunt. Integer sed tempor massa. Proin fringilla tellus lacus, sit amet tincidunt orci posuere feugiat.",
    image: holiday2,
  },
  {
    id: 3,
    name: "Vestibulum auctor",
    descritpion:
      "Pusto et molestie egestas, augue odio faucibus est, in consequat leo justo at ligula. Integer euismod dolor ac convallis ultrices.",
    image: holiday3,
  },
  {
    id: 4,
    name: "Integer tristique",
    descritpion:
      "Curabitur placerat libero mollis metus malesuada, ac consequat mauris pretium. Ut id posuere massa, vitae bibendum mauris.",
    image: holiday4,
  },
  {
    id: 5,
    name: "Aliquam et",
    descritpion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur suscipit arcu purus, at congue libero luctus et.",
    image: holiday5,
  },
  {
    id: 6,
    name: "Integer tristique",
    descritpion:
      "Curabitur placerat libero mollis metus malesuada, ac consequat mauris pretium. Ut id posuere massa, vitae bibendum mauris.",
    image: holiday6,
  },
  {
    id: 7,
    name: "Nam ut odio",
    descritpion:
      "Proin ac orci bibendum nisi sollicitudin pharetra. Suspendisse euismod magna eu faucibus cursus. Donec sodales metus sem, eu hendrerit lacus dapibus sit amet. Aliquam imperdiet sed erat eu feugiat.",
    image: holiday7,
  },
];

const NewsList = ({ showInfo, setShowInfo }: Props) => {
  const newsTransition = useTransition(showInfo, {
    from: { opacity: 0, transform: "translate3d(-100%,0%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0%,0)" },
  });

  const handleCloseInfo = () => {
    setShowInfo(false);
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide)
      activeSlide.querySelector(".verticalFooter")?.classList.remove("-blur");
  };

  return (
    <>
      {newsTransition(
        (styles, item) =>
          item && (
            <animated.div style={styles} className="news--container">
              <div className="navigation">
                <div className="close--wrapper" onClick={handleCloseInfo}>
                  <div className="close--icon" />
                </div>
              </div>
              <div className="news">
                <h5 className="header--h5 -white title">What's happening</h5>
                <div className="content--container">
                  {newsList.map((item) => {
                    return (
                      <div className="content--item" key={item.id}>
                        <div
                          className="image"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <p className="paragraph--component -big mb-4 -white">
                          {item.name}
                        </p>
                        <p className="paragraph--component -gray">
                          {item.descritpion}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default NewsList;
