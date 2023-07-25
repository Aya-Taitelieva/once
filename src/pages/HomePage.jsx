import Button from "@mui/material/Button";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsPodsPage from "./ProductsPodsPage";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ marginLeft: "15px" }}>
          <span style={{ fontSize: "25px" }}>World's Best New Comer!</span>
          <h1>WAKA Shines at the Vapouround Global Awards 2023</h1>
        </div>
        <img
          style={{ width: "55vw" }}
          src="https://www.wakavaping.com/cdn/shop/files/lQLPJv97-K2Z3R7NBpTNCbuww_bXxgjcoiwEfj3MKAAqAA_2491_1684.png?v=1686624213&width=1280"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "50px auto",
        }}>
        <img
          style={{ width: "50vw" }}
          src="https://www.wakavaping.com/cdn/shop/files/PC_2x_bed97bcf-6f7f-409e-829b-b3086eabfb95.png?v=1679477483&width=1280"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Wanna Buy WAKA Vapes Online?</h2>
          <span>Visit online shops and get your favorite WAKA</span>
          <Button
            onClick={() => navigate("/products")}
            sx={{ width: "100px", marginTop: "10px" }}
            variant="outlined">
            Visit
          </Button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://dbh4s5ja0maaw.cloudfront.net/uploads/upload/upload/202306211601157103_5120X1560.jpg"></img>
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "200px",
            zIndex: 1,
            color: "white",
          }}>
          <h5>ELFBAR Pi7000 </h5>
          <h1>Daily Oasis in Your Palm</h1>
          <Button
            onClick={() => navigate("/products")}
            sx={{
              width: "200px",
              marginTop: "10px",
              color: "white",
            }}>
            Learn More >
          </Button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_banner_G4000.png?v=1685929942"
        />
        <div
          style={{
            position: "absolute",
            top: "280px",
            left: "200px",
            zIndex: 1,
            color: "white",
          }}>
          <Button
            onClick={() => navigate("/ox")}
            sx={{ width: "200px", marginTop: "10px", color: "white" }}>
            Learn More >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
