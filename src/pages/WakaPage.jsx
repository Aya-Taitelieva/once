import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const WakaPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal.png?v=1677564825&width=1920"
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.wakavaping.com/cdn/shop/files/8_-1w.jpg?v=1682063583&width=1920"
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.wakavaping.com/cdn/shop/files/8_2-1w.jpg?v=1682063583&width=1920"
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.wakavaping.com/cdn/shop/files/8_3-1w.jpg?v=1682063583&width=1920"
        />
        <Button
          sx={{
            position: "absolute",
            left: "1000px",
            top: "1800px",
            color: "white",
          }}
          onClick={() => navigate("/products")}
          variant="outlined"
          size="large"
          color="error">
          Go to Shop!
        </Button>
      </div>
    </div>
  );
};

export default WakaPage;
