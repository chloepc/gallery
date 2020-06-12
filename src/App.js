import React from "react";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Main } from "./Main";
import styles from "./App.module.css";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar>
          <Toolbar className={styles.toolbar}>
            <Typography>Gallery</Typography>

            <Link component={RouterLink} color="inherit" to="/about">
              About
            </Link>
            <Link component={RouterLink} color="inherit" to="/help">
              Help
            </Link>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}
