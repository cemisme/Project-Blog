import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./globalstyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <App />
        <ToastContainer></ToastContainer>
      </GlobalStyle>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
