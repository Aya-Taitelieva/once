import React, { createContext, useContext, useState } from "react";

const mainContext = createContext();

export function useFavContext() {
  return useContext(mainContext);
}

const initState = [];

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("Favorite"));
  if (!data) {
    data = [];
  }
  return data;
}

const CartFavorite = ({ children }) => {
  const [cart, setCart] = useState(initState);

  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  function addToFav(item) {
    const data = getDataFromLS();
    data.push(item);

    localStorage.setItem("Favorite", JSON.stringify(data));
    getCart();
  }

  function deleteFromFav(id) {
    let data = getDataFromLS();
    data = data.filter((item) => item.id !== id);

    localStorage.setItem("Favorite", JSON.stringify(data));
    getCart();
  }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    console.log(id);
    const isInCart = data.some((item) => item.id === id);
    return isInCart;
  }

  function clearCart() {
    localStorage.removeItem("Favorite");
    getCart();
  }

  const value = {
    cart,
    getCart,
    addToFav,
    isAlreadyInCart,
    deleteFromFav,
    clearCart,
    getDataFromLS,
  };
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default CartFavorite;
