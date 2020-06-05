import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Main } from "./Main";

import "./styles.css";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar>
          <Toolbar>
            <Typography>Gallery</Typography>
          </Toolbar>
        </AppBar>
        <Main />
      </div>
    </BrowserRouter>
  );
}
