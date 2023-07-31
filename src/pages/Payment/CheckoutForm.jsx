import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    } else {
      navigate("/success");
      localStorage.removeItem("cart");
    }
  };

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
