import React, { useRef } from 'react';

//libararies
import { animated, useSpring, to } from 'react-spring';
import { useGesture } from '@use-gesture/react';

// //types 
import { Card } from '../../types/index';

type Props = {
    item: Card;
};

const CardItem = ({ item }: Props) => {

    const ref = useRef<HTMLDivElement>(null);

    const calcX = (y: number) => {
        if (ref.current) {
            const position = ref.current.getBoundingClientRect();
            const elCenter = (position.y + ref.current.clientHeight / 2);
            return -(y - elCenter) / 40;
        }
    };
    const calcY = (x: number) => {
        if (ref.current) {
            const position = ref.current.getBoundingClientRect();
            const elCenter = (position.x + ref.current.clientWidth / 2);
            return (x - elCenter) / 40;
        }
    };

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
                    rotateX: calcX(py),
                    rotateY: calcY(px),
                    scale: 1.05,
                });
        },
        onHover: (state) => {
            !state.hovering && api({ rotateX: 0, rotateY: 0, scale: 1 });
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
            ref={ref}
        >
            <div className='card--image' style={{ backgroundImage: `url(${item.avatar})` }} />
            <p className='paragraph--component -big text-center mb-4'>{item.name}</p>
            <p className='paragraph--component text-center'>{item.description}</p>
        </animated.div>
    );
};

export default CardItem;