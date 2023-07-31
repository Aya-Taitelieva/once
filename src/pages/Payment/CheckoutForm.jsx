import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// Компонент CheckoutForm, отвечающий за форму оплаты
const CheckoutForm = () => {
  // Получаем экземпляр Stripe с помощью хука 'useStripe'
  const stripe = useStripe();
  // Получаем экземпляр Elements с помощью хука 'useElements'
  const elements = useElements();
  // Получаем функцию 'navigate' для перенаправления пользователя с помощью хука 'useNavigate'
  const navigate = useNavigate();
  // Функция handleSubmit, обрабатывающая отправку формы оплаты

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Проверяем наличие экземпляра Elements
    if (elements == null) {
      return;
    }
    // Отправляем платежную форму с помощью метода 'submit' и получаем ошибку (если есть)
    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    } else {
      // Перенаправляем пользователя на страницу "/success" в случае успешной оплаты
      navigate("/success");
      // Удаляем данные корзины из Local Storage после успешной оплаты
      localStorage.removeItem("cart");
    }
  };
  // Возвращаем JSX для отображения формы оплаты
  return (
    <form onSubmit={handleSubmit} className="paymentForm">
      <div className="paymentWrapper">
        <PaymentElement />
        <div>
          Сумма к оплате: $
          {JSON.parse(localStorage.getItem("cart"))?.totalPrice}
          <button
            className="payment1-wrapper"
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
