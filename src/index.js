import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./contexts/MainContext";
import CartFavorite from "./contexts/CartFavorite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainContext>
      <CartFavorite>
        <App />
      </CartFavorite>
    </MainContext>
  </BrowserRouter>
);
