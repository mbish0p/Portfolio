import React, { useRef } from 'react';

//libararies
import { animated, useSpring, to } from 'react-spring';
import { useGesture } from '@use-gesture/react';

const CardItem = () => {

        const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;
        const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

        const ref = useRef();

        const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
                () => ({
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scale: 1,
                        zoom: 0,
                        x: 0,
                        y: 0,
                        config: { mass: 5, tension: 350, friction: 40 },
                })
        );

        const bind = useGesture({
                onMove: (state) => {
                        const { xy: [px, py], dragging } = state;
                        !dragging &&
                                api({
                                        rotateX: calcX(py, y.get()),
                                        rotateY: calcY(px, x.get()),
                                        scale: 1.1,
                                });
                        console.log('moving', state);
                },
                onHover: (state) => {
                        !state.hovering && api({ rotateX: 0, rotateY: 0, scale: 1 });
                        console.log(state);
                }
        });

        return (
                <animated.div
                        {...bind()}
                        className='card'
                        style={{
                                transform: 'perspective(600px)',
                                x,
                                y,
                                scale: to([scale, zoom], (s, z) => s + z),
                                rotateX,
                                rotateY,
                                rotateZ,
                        }}
                >
                        <p>hi</p>
                </animated.div>
        );
};

export default CardItem;