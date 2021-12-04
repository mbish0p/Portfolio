import React from "react";

type Props = {
        children?: any;
};

const Modal = ({ children }: Props) => {
        return (
                <div className='modal--container'>
                        <div className='head'>
                                <div>
                                        <div className='modal--icon' />
                                        <p className='paragraph--component'>Title</p>
                                </div>
                                <div className='close--icon' />
                        </div>
                        <div className='content'>
                                {children}
                        </div>
                </div>
        );
};

export default Modal;
