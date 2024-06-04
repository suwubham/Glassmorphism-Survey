import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Page1 from "./routes/Page1.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/Glassmorphism-Survey">
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  </Router>
);
