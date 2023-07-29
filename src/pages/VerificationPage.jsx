import React from "react";
import { useNavigate } from "react-router";

const VerificationPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="veri"
      style={{ textAlign: "center", margin: "100px auto", width: "500px" }}>
      <div style={{}}>
        <h2>Age Verification</h2>
        <h4>
          You must be 18 or older to visit this website. Your age will be
          verified at checkout.
        </h4>
      </div>
      <button onClick={() => navigate("/")} className="btnV">
        <span className="spanV">NO</span>
      </button>
      <button onClick={() => navigate("/home")} className="btnV">
        <span className="spanV">YES</span>
      </button>
    </div>
  );
};

export default VerificationPage;
