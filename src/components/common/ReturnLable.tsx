import React from "react";

//libraries
import { animated, useSpring } from "react-spring";
import { useNavigate } from "react-router-dom";

//assets
import arrowLeft from "../../images/icons/arrowLeft.png";

type Props = {
  href: string;
};

const ReturnLabel = ({ href }: Props) => {
  let navigate = useNavigate();

  const styles = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 5,
    },
    loop: { reverse: true },
  });

  const handleTransfer = () => {
    console.log("click");
    navigate(href, { replace: true });
  };

  return (
    <div className="return--container" onClick={handleTransfer}>
      <animated.img
        alt="return"
        src={arrowLeft}
        className="arrow"
        style={{ ...styles }}
      />
      <h5 className="header--h5">back</h5>
    </div>
  );
};

export default ReturnLabel;
