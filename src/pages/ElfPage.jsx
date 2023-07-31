import { Button } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

function ElfPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2 className="warning-h2" style={{ textAlign: "center" }}>
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.
        </h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://dbh4s5ja0maaw.cloudfront.net/products/pi7000/floor1_bg1.jpg"
          />
          <Carousel.Caption>
            <h4
              className="elf-h4"
              style={{ fontSize: "50px", fontWeight: "bold" }}>
              Daily Oasis in Your Palm
            </h4>
            <p className="elf-p" style={{ fontSize: "20px" }}>
              When you're riding high, you'll naturally gravitate toward bold
              looks.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://dbh4s5ja0maaw.cloudfront.net/products/pi7000/floor1_bg2.jpg"
          />
          <Carousel.Caption>
            <h4
              className="elf-h4"
              style={{ fontSize: "50px", fontWeight: "bold" }}>
              Daily Oasis in Your Palm
            </h4>
            <p className="elf-p" style={{ fontSize: "20px" }}>
              Just ease up on yourself and you might light on some unexpected
              inspirations.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://dbh4s5ja0maaw.cloudfront.net/products/pi7000/floor1_bg3.jpg"
          />
          <Carousel.Caption>
            <h4
              className="elf-h4"
              style={{ fontSize: "50px", fontWeight: "bold" }}>
              Daily Oasis in Your Palm
            </h4>
            <p className="elf-p" style={{ fontSize: "20px" }}>
              When you feel empowered, you tend to take on something
              adventurous.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="elf-div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="elf-div2" style={{ width: "500px", margin: "50px" }}>
          <h3>Always Vape Worry-Free</h3>
          <span style={{ width: "150px" }}>
            No more unexpected depletion, 2 LED lights tell you when to recharge
            or get a new one.
          </span>
          <div
            style={{
              display: "flex",
              margin: "30px",
              gap: "50px",
            }}>
            <ul>
              E-liquid
              <li style={{ color: "green" }}>100%-50%</li>
              <li style={{ color: "#e7e742" }}>50%-5%</li>
              <li style={{ color: "red" }}>Less than 5%</li>
            </ul>
            <ul>
              Battery
              <li style={{ color: "green" }}>100%-60%</li>
              <li style={{ color: "#e7e742" }}>60%-20%</li>
              <li style={{ color: "red" }}>Less than 20%</li>
            </ul>
          </div>
        </div>
        <img
          className="img-elf"
          style={{ width: "50%", margin: "50px 10px" }}
          src="https://dbh4s5ja0maaw.cloudfront.net/products/pi7000/floor2_bg.jpg"
        />
      </div>
      <div style={{ position: "relative" }}>
        <Button
          className="elf-btn"
          sx={{
            position: "absolute",
            left: "5%",
            top: "90px",
            color: "white",
          }}
          onClick={() => navigate("/products")}
          variant="outlined"
          size="large"
          color="error">
          GO to Shop!
        </Button>
        <img
          style={{ width: "100%" }}
          src="https://dbh4s5ja0maaw.cloudfront.net/products/pi7000/floor1_bg4.jpg"
        />
      </div>
    </div>
  );
}

export default ElfPage;
