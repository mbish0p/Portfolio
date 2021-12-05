import React from "react";

//hooks 
import { useState, useEffect } from 'react';

//libraries
import { animated, useTransition, useSpring } from 'react-spring';

type Props = {
        children?: any;
        open: boolean;
        closeCallback: any;
        type: string;
};

const Modal = ({ children, open, closeCallback, type }: Props) => {
        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
                setIsOpen(open);
        }, [open]);

        const transition = useTransition(isOpen, {
                from: { opacity: 0, transform: 'translate3d(-50%, -300%, 0)' },
                enter: { opacity: 1, transform: 'translate3d(-50%, 0%, 0)' },
                leave: { opacity: 0, transform: 'translate3d(-50%, -300%, 0)' }
        });

        const spring = useSpring({ opacity: isOpen ? 1 : 0 });

        const handleClose = () => {
                console.log('click', open);
                setIsOpen(false);
                closeCallback();
        };

        return (
                <animated.div className='modal--background' style={spring}>
                        {
                                transition((style, item) => (
                                        item && <animated.div className='modal--container' style={style}>
                                                <div className='head'>
                                                        <div className='info--wrapper'>
                                                                <div className='modal--icon' />
                                                                <p className='paragraph--component'>{type}</p>
                                                        </div>
                                                        <div className='close--icon' onClick={handleClose} />
                                                </div>
                                                <div className='content'>
                                                        {children}
                                                </div>
                                        </animated.div>
                                ))
                        }
                </animated.div>
        );
};

export default Modal;
