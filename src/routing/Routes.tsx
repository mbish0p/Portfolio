import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import App from "../components/homepage/App";
import WavesMain from "../components/waves/WavesMain";
import CardsMain from "../components/cards/CardsMain";
import VerticalPage from "../components/vertical-page/VerticalPage";
import Picker from "../components/picker/Picker";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/waves" element={<WavesMain />} />
      <Route path="/cards" element={<CardsMain />} />
      <Route path="/verticals" element={<VerticalPage />} />
      <Route path="/picker" element={<Picker />} />
    </Routes>
  );
};

export default Routing;
