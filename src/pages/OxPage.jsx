import React from "react";

const OxPage = () => {
  return (
    <div>
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
          <h3 style={{ fontWeight: "700" }}>OXBAR G4000</h3>
          <h2 style={{ fontWeight: "900" }}>Your Ultimate Travel Companion</h2>
        </div>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_-G4000_-2023_03.png?v=1685614757"
        />
      </div>
      <div style={{ margin: "90px auto", width: "70%", textAlign: "center" }}>
        <h2 style={{ color: "#019aff" }}>OXBAR G4000</h2>
        <span>
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
          style={{
            position: "absolute",
            bottom: "300px",
            left: "100px",
            width: "400px",
            color: "white",
          }}>
          <h2>Exceptional Battery Life</h2>
          <span>
            Equipped with a powerful 950mAh built-in battery, it offers an
            extended vaping experience during the whole week.
          </span>
          <h2 style={{ color: "#019aff" }}>950mAh</h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.oxbar.com/cdn/shop/files/OXBAR_-G4000_-2023_06.png?v=1685669585"
        />
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            left: "700px",
            width: "400px",
            color: "white",
          }}>
          <h2>Versatile Carry Option</h2>
          <span>
            Designed with a built-in lanyard hole, allows you to effortlessly
            hang it around your neck, showcasing a trendy, fashionable, and
            hands-free carrying style
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OxPage;
