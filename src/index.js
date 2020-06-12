import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { App } from "./App";

const theme = createMuiTheme({
  palette: { primary: red },
  typography: {
    h1: { fontSize: "2rem", fontWeight: "500" }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  rootElement
);
