import React, { useEffect, useState } from "react";
import { useMainContext } from "../contexts/MainContext";
import { useNavigate, useParams } from "react-router";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const DetailsPage = () => {
  const { pod, getOnePods } = useMainContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [onePod, setOnePod] = useState({
    title: "",
    taste: "",
    description: "",
    image: "",
    imageBack: "",
    price: "",
  });
  useEffect(() => {
    getOnePods(id);
  }, []);
  console.log(pod, "sdadasd");
  useEffect(() => {
    setOnePod(pod);
  }, [pod]);

  return (
    <Container
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "30px",
      }}>
      <ImageList
        sx={{ width: 1000, height: 400 }}
        variant="standard"
        cols={2}
        gap={8}>
        <ImageListItem>
          <img src={onePod.image} width="500" />
        </ImageListItem>
        <ImageListItem>
          <img src={onePod.imageBack} width="500" />
        </ImageListItem>
      </ImageList>
      <Box
        sx={{
          width: 650,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
        variant="standard">
        <h3>{onePod.title}</h3>
        <p>{onePod.taste}</p>
        <p>{onePod.description}</p>
        <h3>{`${onePod.price}$`}</h3>
        <Button variant="outline" onClick={() => navigate("/products")}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default DetailsPage;
