import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./screens/LoginPage";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);
