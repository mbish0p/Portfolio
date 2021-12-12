import React from 'react';

//libraries
import { Swiper, SwiperSlide } from "swiper/react";


const items = [
        {
                id: 1,

        }
];

const MenuMain = () => {
        const swipperSettings = {
                slidesPerView: 1,
                loop: true
        };

        return (
                <div className='menu--body'>
                        <Swiper
                                direction={'vertical'}
                                {...swipperSettings}
                        >
                        </Swiper>
                </div>
        );
};

export default MenuMain;