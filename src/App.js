import React from "react";
import {BrowserRouter} from "react-router-dom";


import {Main} from "./Main";

import "./styles.css";

export function App() {
  return (
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
  );
}
