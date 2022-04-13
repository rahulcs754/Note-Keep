import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./fronted/Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);