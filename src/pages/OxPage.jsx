import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OxPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2 className="warning-h2" style={{ textAlign: "center" }}>
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.
        </h2>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}>
        <div
          style={{
            position: "absolute",
            marginTop: "30px",
            color: "white",
          }}>
          <h3 className="animation-h3" style={{ fontWeight: "700" }}>
            OXBAR G4000
          </h3>
          <h2 className="animation-h2" style={{ fontWeight: "900" }}>
            Your Ultimate Travel Companion
          </h2>
        </div>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_-G4000_-2023_03.png?v=1685614757"
        />
      </div>
      <div style={{ margin: "90px auto", width: "70%", textAlign: "center" }}>
        <h2 className="animation-h2" style={{ color: "#019aff" }}>
          OXBAR G4000
        </h2>
        <span className="animation-span">
          OXBAR G4000 boasts a powerful 950mAh battery, offering an extended
          vaping experience without recharging. Approximately 4000 puffs let
          users enjoy it during the whole week. With its upgraded mesh coil and
          natural organic cotton, delivers dense cloud and stable flavor. Get
          ready to embark on your travel adventures with the OXBAR G4000, the
          perfect companion for an enhanced vaping experience during the travel.
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_-G4000_-2023_05.png?v=1685668201"
        />
        <div
          className="ox-div3"
          style={{
            position: "absolute",
            bottom: "300px",
            left: "100px",
            width: "400px",
            color: "white",
          }}>
          <h2 className="animation-h2">Exceptional Battery Life</h2>
          <span className="animation-span">
            Equipped with a powerful 950mAh built-in battery, it offers an
            extended vaping experience during the whole week.
          </span>
          <h2 className="animation-h2" style={{ color: "#019aff" }}>
            950mAh
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_-G4000_-2023_06.png?v=1685669585"
        />
        <div
          className="ox-div4"
          style={{
            position: "absolute",
            bottom: "800px",
            left: "700px",
            width: "400px",
            color: "white",
          }}>
          <h2 className="animation-h2">Versatile Carry Option</h2>
          <span className="animation-span">
            Designed with a built-in lanyard hole, allows you to effortlessly
            hang it around your neck, showcasing a trendy, fashionable, and
            hands-free carrying style
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/OXBAR_-G4000_-2023_09.png?v=1685672997"
          />
          <div
            className="ox-div5"
            style={{
              position: "absolute",
              bottom: "400px",
              left: "100px",
              width: "400px",
              color: "white",
            }}>
            <h2 className="animation-h2">Food-Grade Materials Drip Tip</h2>
            <span className="animation-span">
              We prioritize your safety and satisfaction. It guarantees safety,
              durability, and high-temperature resistance, ensuring a worry-free
              vaping experience with every puff.
            </span>
          </div>
          <Button
            className="elf-btn"
            onClick={() => navigate("/products")}
            variant="outlined"
            size="large"
            sx={{
              position: "absolute",
              right: "100px",
              top: "70px",
              color: "#019aff",
            }}>
            Go to Shop!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OxPage;
