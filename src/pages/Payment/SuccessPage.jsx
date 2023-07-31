import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <section className="login-main-wrapper">
      <div className="main-container">
        <div className="login-process">
          <div className="login-main-container">
            <div className="thankyou-wrapper">
              <h1>
                <img
                  src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                  alt="thanks"
                />
              </h1>
              <p>we are still waiting for you</p>
              <a onClick={() => navigate("/products")}>Back to Shop</a>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>
  );
};

export default SuccessPage;
