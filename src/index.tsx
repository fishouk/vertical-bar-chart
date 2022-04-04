import React from "react";

import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { theme } from "assets/styles/theme";

import { App } from "./App";
import { reportWebVitals } from "./reportWebVitals";

import "assets/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
