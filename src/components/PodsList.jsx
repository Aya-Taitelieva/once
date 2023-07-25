import React, { useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";
import { Box, CircularProgress } from "@mui/material";
import PodsItem from "./PodsItem";

const PodsList = () => {
  const { pods, getPods } = useMainContext();

  useEffect(() => {
    getPods();
  }, []);
  console.log(pods);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {pods.length > 0 ? (
        <div className="card-wrapper">
          {pods.map((item) => (
            <PodsItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <CircularProgress
          sx={{ mx: "auto", mt: 5, display: "block" }}
          size={200}
        />
      )}
    </Box>
  );
};

export default PodsList;
