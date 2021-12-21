/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';

//hooks
import { useState, useEffect } from 'react';
import { animated } from 'react-spring';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slider = () => {

    const [smallSwiper, setSmallSwiper] = useState<SwiperCore>();
    const [bigSwiper, setBigSwiper] = useState<SwiperCore>();

    const smallSwipperSettings = {
        spaceBetween: 10,
        loop: true,
        allowTouchMove: false,
        initialSlide: 2,
        slideToClickedSlide: false,
        breakpoints: {
            1054: {
                slidesPerView: 2.2
            }
        }
    };

    const bigSwipperSettings = {
        loop: true,
        initialSlide: 0,
        allowTouchMove: false
    };

    const handlePrevSlide = () => {
        if (smallSwiper && bigSwiper) {
            bigSwiper.slidePrev();
            smallSwiper.slidePrev()
        }
    };

    const handleNextSlide = () => {
        if (smallSwiper && bigSwiper) {
            bigSwiper.slideNext();
            smallSwiper.slideNext()
        }
    };

    const handleNextClick = (isNext:boolean) =>{
        if(smallSwiper && bigSwiper){
            smallSwiper.slideNext()
            bigSwiper.slideNext();
        }
    }

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
                className='small--slider'
            >
                {
                    elementsList.map((item) => {
                        return (
                            <SwiperSlide className='slider--wrapper'
                                data-id={item.id}
                                data-title={item.title}
                                key={item.id}
                            >
                                {({ isNext }: any) => (
                                    <animated.div className='slider--item' 
                                    onClick={()=>handleNextClick(isNext)}
                                    >
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                    </animated.div>
                                )
                                }
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper >

            <div className='container'>
                <Swiper
                    onSwiper={setBigSwiper}
                    {...bigSwipperSettings}
                    className='big--slider bigSlider'
                >
                    {
                        elementsList.map((item) => {
                            return (
                                <SwiperSlide className='slider--wrapper' data-id={item.id} key={item.id}>
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