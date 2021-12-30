import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//components
import Routing from "./routing/Routes";
import MetaTags from "./components/common/MetaTags";

//styles
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaTags />
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
