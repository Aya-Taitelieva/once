import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useMainContext } from "../contexts/MainContext";
import { useNavigate } from "react-router-dom";
import { useFavContext } from "../contexts/CartFavorite";
import { Favorite } from "@mui/icons-material";
import { useAuthContext } from "../contexts/AuthContext";

const PodsItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const { deletePods } = useMainContext();
  const { addToFav, isAlreadyInCart, deleteFromFav } = useFavContext();
  const {isAdmin} = useAuthContext()
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Card
      sx={{ width: "400px", height: "530px", marginTop: "40px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isAdmin() && <IconButton
        onClick={handleClick}
        aria-label="settings"
        sx={{ marginLeft: "360px", position: "absolute" }}>
        <MoreVertIcon />
      </IconButton>}
      {isAdmin() && <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem
          component={Button}
          endIcon={<DeleteIcon />}
          sx={{ textTransform: "capitalize", color: "red" }}
          onClick={() => deletePods(item.id)}>
          Delete
        </MenuItem>
        <MenuItem
          component={Button}
          endIcon={<EditIcon />}
          sx={{ textTransform: "capitalize", width: "100%" }}
          onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </MenuItem>
      </Menu>}
      <CardMedia
        sx={{ height: "350px" }}
        component="img"
        height="350"
        image={hovered ? item.imageBack : item.image}
        alt={item.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6">{`${item.price} $`}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.taste}
        </Typography>
      </CardContent>
      <CardActions>
        {isAlreadyInCart(item.id) ? (
          <Favorite
            sx={{ color: "red" }}
            onClick={() => deleteFromFav(item.id)}
          />
        ) : (
          <FavoriteBorderIcon onClick={() => addToFav(item)} />
        )}
        <LocalMallIcon />
      </CardActions>
    </Card>
  );
};

export default PodsItem;
