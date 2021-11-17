import React from "react";

//hooks
import { useRef, useEffect } from "react";

//assets
import stars from './images/hero/stars.png';
import moon from './images/hero/moon.png';
import moutains_behind from './images/hero/mountains_behind.png';
import moutains_front from './images/hero/mountains_front.png';

//style 
import './Hero.scss';

const Hero = () => {

    const moonRef = useRef<HTMLImageElement>(null);
    const starsRef = useRef<HTMLImageElement>(null);
    const behindRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);


    useEffect(() => {
        const textRight = textRef.current!.offsetLeft;
        console.log(textRight, 'lama');
        window.addEventListener('scroll', function () {
            let offsetY = window.scrollY;
            starsRef.current!.style.left = offsetY * 0.25 + 'px';
            moonRef.current!.style.top = offsetY * 1.05 + 'px';
            behindRef.current!.style.top = offsetY * 0.3 + 'px';
            textRef.current!.style.right = (offsetY * 2 + textRight) + 'px';
        });
    }, []);

    return (
        <div className='hero--container'>
            <div className='head--container'>
                <a href='#' className='logo'>Logo</a>
                <ul className='nav--items'>
                    <li className='item'><a href='#'>Home</a></li>
                    <li className='item'><a href='#'>About</a></li>
                    <li className='item'><a href='#'>Work</a></li>
                    <li className='item'><a href='#'>Contact</a></li>
                </ul>
            </div>
            <section className='paralax--animation'>
                <img ref={starsRef} src={stars} id='stars' alt='stars' className='img' />
                <img ref={moonRef} src={moon} id='moon' alt='moon' className='img -moon' />
                <h2 ref={textRef} className='text'>Portfolio</h2>
                <img ref={behindRef} src={moutains_behind} id='moutains_behind' alt='moutains_behind' className='img' />
                <img src={moutains_front} id='moutains_front' alt='moutains_front' className='img -front' />
            </section>
        </div>
    );
};

export default Hero;