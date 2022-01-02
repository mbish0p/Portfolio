import React from "react";

//hooks
import { useState, useEffect } from "react";

//libraries
import {
  animated,
  useTransition,
  useSpring,
  useSpringRef,
  useChain,
} from "react-spring";

type Props = {
  children?: any;
  open: boolean;
  closeCallback: any;
  type: string;
};

const Modal = ({ children, open, closeCallback, type }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const springRef = useSpringRef();
  const transitionRef = useSpringRef();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: "translate3d(-50%, -300%, 0)" },
    enter: { opacity: 1, transform: "translate3d(-50%, 0%, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, -300%, 0)" },
    ref: transitionRef,
  });

  const spring = useSpring({
    ref: springRef,
    from: {
      opacity: 0,
      display: "block",
    },
    to: [{ opacity: open ? 1 : 0 }, { display: open ? "block" : "none" }],
  });

  useChain(
    isOpen ? [springRef, transitionRef] : [transitionRef, springRef],
    [0, 0.5]
  );

  const handleClose = () => {
    closeCallback();
  };

  return (
    <animated.div className="modal--background" style={spring}>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="modal--container" style={style}>
              <div className="head">
                <div className="info--wrapper">
                  <div className="modal--icon" />
                  <p className="paragraph--component">{type}</p>
                </div>
                <div className="close--icon" onClick={handleClose} />
              </div>
              <div className="content">{children}</div>
            </animated.div>
          )
      )}
    </animated.div>
  );
};

export default Modal;
