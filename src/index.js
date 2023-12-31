import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./contexts/MainContext";
import CartFavorite from "./contexts/CartFavorite";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";
import CommentContext from "./contexts/CommentContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainContext>
      <AuthContext>
        <CartContext>
          <CommentContext>
            <CartFavorite>
              <App />
            </CartFavorite>
          </CommentContext>
        </CartContext>
      </AuthContext>
    </MainContext>
  </BrowserRouter>
);
