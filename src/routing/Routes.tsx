import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import App from "../components/homepage/App";
import WavesMain from "../components/waves/WavesMain";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/waves' element={<WavesMain />} />
        </Routes>
    );
};

export default Routing;