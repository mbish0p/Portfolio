import React from "react";

//hooks
import { useRef, useEffect, useState } from "react";

//assets
import stars from '../../images/hero/stars.png';
import moon from '../../images/hero/moon.png';
import moutains_behind from '../../images/hero/mountains_behind.png';
import moutains_front from '../../images/hero/mountains_front.png';

const Hero = () => {

    const moonRef = useRef<HTMLImageElement>(null);
    const starsRef = useRef<HTMLImageElement>(null);
    const behindRef = useRef<HTMLImageElement>(null);

    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', function () {
            let offsetY = window.scrollY;
            starsRef.current!.style.left = offsetY * 0.25 + 'px';
            moonRef.current!.style.top = offsetY * 1.05 + 'px';
            behindRef.current!.style.top = offsetY * 0.3 + 'px';
        });
    }, []);

    return (
        <div className='hero--container'>
            <div className='head--container'>
                <a href='#' className='header--h2 uppercase'>Portfolio</a>
                <ul className='nav--items'>
                    <li className='item'><a href='#' className='paragraph--component'>Home</a></li>
                    <li className='item'><a href='#' className='paragraph--component'>About</a></li>
                    <li className='item'><a href='#' className='paragraph--component'>Work</a></li>
                    <li className='item'><a href='#' className='paragraph--component'>Contact</a></li>
                </ul>

                <div className={`mobile--menu ${isActive ? '-active' : ''}`}>
                    <div className={`toggle ${isActive ? '-active' : ''}`} onClick={() => setIsActive(!isActive)}>
                    </div>
                    <div className='item -home' style={{ '--i': '1' } as React.CSSProperties}>
                        <a href='#' className='link'></a>
                    </div>
                    <div className='item -about' style={{ '--i': '2' } as React.CSSProperties}>
                        <a href='#' className='link'></a>
                    </div>
                    <div className='item -work' style={{ '--i': '3' } as React.CSSProperties}>
                        <a href='#' className='link'></a>
                    </div>
                    <div className='item -contact' style={{ '--i': '4' } as React.CSSProperties}>
                        <a href='#' className='link'></a>
                    </div>
                </div>
            </div>
            <section className='paralax--animation'>
                <img ref={starsRef} src={stars} id='stars' alt='stars' className='img' />
                <img ref={moonRef} src={moon} id='moon' alt='moon' className='img -moon' />
                <img ref={behindRef} src={moutains_behind} id='moutains_behind' alt='moutains_behind' className='img' />
                <img src={moutains_front} id='moutains_front' alt='moutains_front' className='img -front' />
            </section>
        </div>
    );
};

export default Hero;