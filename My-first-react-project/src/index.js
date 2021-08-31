import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { SmartApp } from "./components/App.jsx";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SmartApp />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

