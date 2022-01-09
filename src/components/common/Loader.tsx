import React from "react";
import { useSpring, animated } from "react-spring";

type Props = {
  isOpen: boolean;
};

const Loader = ({ isOpen }: Props) => {
  const spring = useSpring({ opacity: isOpen ? 1 : 0 });

  return (
    <animated.div
      className={`loader--background ${!isOpen ? "-closed" : ""}`}
      style={spring}
    >
      <div className="loader--body">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
    </animated.div>
  );
};

export default Loader;
