import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import App from "../components/homepage/App";
import WavesMain from "../components/waves/WavesMain";
import CardsMain from "../components/cards/CardsMain";
import MenuMain from "../components/menus/MenuMain";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/waves' element={<WavesMain />} />
            <Route path='/cards' element={<CardsMain />} />
            <Route path='/menu' element={<MenuMain />} />
        </Routes>
    );
};

export default Routing;