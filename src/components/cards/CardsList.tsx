import React from "react";

import CardItem from "./CardItem";

const CardsList = () => {

    const cards = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
    ];

    return (
        <div className='cards--container'>
            {
                cards.map(() => (
                    <CardItem />
                ))
            }

        </div>
    );
};

export default CardsList;