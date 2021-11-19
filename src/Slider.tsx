/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Controller, Navigation } from 'swiper';

//hooks
import { useState, useEffect } from 'react';
import { animated } from 'react-spring';

//styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, Controller, Navigation]);

const Slider = () => {

    const [smallSwiper, setSmallSwiper] = useState<SwiperCore>();
    const [bigSwiper, setBigSwiper] = useState<SwiperCore>();

    const smallSwipperSettings = {
        slidesPerView: 'auto' as 'auto',
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        allowTouchMove: false,
        slideToClickedSlide: true,
    };

    const bigSwipperSettings = {
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false,
        loopedSlides: 5,
        slideToClickedSlide: true,
    };

    const handlePrevSlide = () => {
        if (bigSwiper) {
            bigSwiper.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (bigSwiper) {
            bigSwiper.slideNext();
        }
    };


    const [elementsList, setElementsList] = useState([] as any[]);


    useEffect(() => {

        //to do fetch from api
        const sliderElements: any[] = [
            {
                id: 1,
                title: 'Lorem ipsum dolor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum quam nisi, a condimentum metus feugiat vitae. Sed accumsan feugiat accumsan.'
            },
            {
                id: 2,
                title: 'Sed imperdiet justo',
                description: 'Donec lectus ipsum, finibus posuere imperdiet id, porttitor ullamcorper tortor. Pellentesque nec rhoncus leo.'
            },
            {
                id: 3,
                title: 'Nam venenatis interdum',
                description: 'Sed ultrices turpis vel nulla placerat, in dictum ex elementum. Nunc lacinia diam vel tortor iaculis tincidunt. Vivamus malesuada dolor a semper convallis.'
            },
            {
                id: 4,
                title: 'Etiam nisi lacus',
                description: 'Etiam nisi lacus, dictum vitae purus quis, posuere sodales tortor'
            },
            {
                id: 5,
                title: 'Etiam nisi lacus',
                description: 'Donec est massa, faucibus in diam quis, efficitur sagittis lorem. Aliquam dictum vehicula rhoncus. In molestie porta risus eu congue. Sed vel diam eu tortor cursus aliquam sit amet sit amet lacus.'
            },
            {
                id: 6,
                title: 'Praesent et ante',
                description: 'Duis malesuada lacus eget odio vulputate faucibus. Nunc a neque quis nisi porttitor varius. Fusce volutpat elementum sapien. '
            },
            {
                id: 7,
                title: 'Phasellus nisl est',
                description: 'Nam nec magna a justo euismod porta molestie at massa. Donec lectus ipsum, finibus posuere imperdiet id, porttitor ullamcorper tortor. Pellentesque nec rhoncus leo.'
            },
            {
                id: 8,
                title: 'Donec est massa',
                description: 'Morbi venenatis, felis et tempor venenatis, turpis arcu sodales sem, vel sagittis diam magna a ipsum. Nam sodales sed est et sagittis.'
            },
            {
                id: 9,
                title: 'Vestibulum iaculis ligula',
                description: 'Vestibulum neque metus, porta at sapien ut, vestibulum imperdiet augue. Phasellus posuere libero sed turpis auctor fringilla. Etiam vel porttitor nibh, vel varius mi.'
            }
        ];
        setElementsList(sliderElements);
    }, []);


    return (
        <div className='relative'>
            <Swiper
                onSwiper={setSmallSwiper}
                {...smallSwipperSettings}
                controller={{ control: bigSwiper }}
                className='small--slider'
            >
                {
                    elementsList.map((item, i) => {
                        return (
                            <SwiperSlide className='slider--wrapper'
                                data-id={item.id}
                                data-title={item.title}
                            >
                                {({ isActive }: any) => (
                                    <animated.div className='slider--item' ></animated.div>
                                )
                                }
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper >

            <div className='container'>
                <h2 className='header--h2 pb-20 text-left'>Przygotowane prace</h2>
                <Swiper
                    onSwiper={setBigSwiper}
                    {...bigSwipperSettings}
                    controller={{ control: smallSwiper }}
                    className='big--slider bigSlider'
                >
                    {
                        elementsList.map((item, i) => {
                            return (
                                <SwiperSlide className='slider--wrapper' data-id={item.id}>
                                    {({ isActive }: any) => (
                                        <div className='slider--item'>
                                            <div className={`description ${isActive ? '-active' : ''}`}>
                                                <h3 className='header--h4 mb-6'>{item.title}</h3>
                                                <p className='paragraph--component -small pb-6 md:pb-10'>{item.description}</p>

                                                <div className='slide--nav'>
                                                    <div className='nav--wrapper -left' onClick={handlePrevSlide}>
                                                        <div className='swiper-button-prev'></div>
                                                    </div>
                                                    <div className='nav--wrapper -right' onClick={handleNextSlide}>
                                                        <div className='swiper-button-next'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;