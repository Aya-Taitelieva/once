import React, { createContext, useContext, useState } from "react";

// Создаем новый контекст с именем 'cartContext'

const cartContext = createContext();

// Создаем новый контекст с именем 'cartContext'

export function useCartContext() {
  return useContext(cartContext);
}

// Начальное состояние для корзины

const initState = {
  dishes: [], // Массив для хранения добавленных блюд   // Общая стоимость всех блюд в корзине
  totalPrice: 0,
};

// Функция для получения данных корзины из Local Storage или их инициализации, если данных нет

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      dishes: [], // Инициализируем пустой массив, если данные корзины не найдены
      // Устанавливаем общую стоимость в ноль, если данные корзины не найдены
      totalPrice: 0,
    };
  }
  return data;
}

// Компонент CartContext отвечает за управление состоянием корзины и ее функциональностью

const CartContext = ({ children }) => {
  // Используем хук 'useState', чтобы создать состояние 'cart' и функцию 'setCart' для его обновления
  const [cart, setCart] = useState(initState);

  // Функция для получения данных корзины из Local Storage и обновления состояния 'cart'

  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  // Функция для добавления блюда в корзину

  function addDishToCart(dish) {
    const data = getDataFromLS();
    data.dishes.push({ ...dish, count: 1, subPrice: dish.price }); // Добавляем новое блюдо с начальным количеством и стоимостью

    // Рассчитываем новую общую стоимость, суммируя стоимости всех блюд в корзине

    data.totalPrice = data.dishes.reduce((acc, item) => acc + item.subPrice, 0);
    // Сохраняем обновленные данные корзины в Local Storage
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }
  // Функция для удаления блюда из корзины на основе предоставленного 'id'
  function deleteDishFromCart(id) {
    const data = getDataFromLS();
    data.dishes = data.dishes.filter((item) => item.id !== id); // Удаляем блюдо с указанным 'id'

    data.totalPrice = data.dishes.reduce((acc, item) => acc + item.subPrice, 0);
    // Сохраняем обновленные данные корзины в Local Storage
    localStorage.setItem("cart", JSON.stringify(data));
    // Обновляем состояние 'cart'
    getCart();
  }
  // Функция для проверки, есть ли блюдо с указанным 'id' в корзине
  function isAlFinish(id) {
    const data = getDataFromLS();
    const isInCart = data.dishes.some((item) => item.id === id); // Проверяем, есть ли блюдо с указанным 'id'
    return isInCart;
  }
  // Функция для увеличения количества и стоимости блюда в корзине на основе указанного 'id'
  function increaseCount(id) {
    const data = getDataFromLS();

    data.dishes = data.dishes.map((item) => {
      if (item.id === id) {
        // Увеличиваем количество и обновляем стоимость
        item.count += 1;
        item.subPrice += item.price;
      }
      return item;
    });
    // Пересчитываем общую стоимость после увеличения количества блюда
    data.totalPrice = data.dishes.reduce((acc, item) => acc + item.subPrice, 0);
    // Сохраняем обновленные данные корзины в Local Storage
    localStorage.setItem("cart", JSON.stringify(data));
    // Обновляем состояние 'cart'
    getCart();
  }
  // Функция для уменьшения количества и стоимости блюда в корзине на основе указанного 'id'
  function decreaseCount(id) {
    const data = getDataFromLS();

    data.dishes = data.dishes.map((item) => {
      if (item.id === id) {
        // Уменьшаем количество и обновляем стоимость
        item.count -= 1;
        item.subPrice -= item.price;
      }
      return item;
    });
    // Пересчитываем общую стоимость после уменьшения количества блюда
    data.totalPrice = data.dishes.reduce((acc, item) => acc + item.subPrice, 0);
    // Сохраняем обновленные данные корзины в Local Storage
    localStorage.setItem("cart", JSON.stringify(data));
    // Обновляем состояние 'cart'
    getCart();
  }
  // Функция для очистки корзины путем удаления данных корзины из Local Storage
  function clearCart() {
    localStorage.removeItem("cart");
    // Обновляем состояние 'cart' (т.е., возвращаем его к начальному состоянию)
    getCart();
  }
  // Создаем объект 'value', содержащий состояние корзины и функции для взаимодействия с корзиной
  const value = {
    cart,
    getCart,
    addDishToCart,
    isAlFinish,
    deleteDishFromCart,
    increaseCount,
    decreaseCount,
    clearCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
