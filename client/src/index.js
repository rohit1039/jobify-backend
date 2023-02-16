import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { AppProvider } from "./context/appContext.js";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  )
);
