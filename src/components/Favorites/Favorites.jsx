import React from "react";
import "./style.css";
import { useFavContext } from "../../contexts/CartFavorite";
import PodsItem from "../PodsItem";

function Favorites() {
  const { getDataFromLS } = useFavContext();
  const favorites = getDataFromLS();

  return (
    <div className="container fav-wrapper">
      {favorites.map((fav) => (
        <PodsItem item={fav} />
      ))}
    </div>
  );
}

export default Favorites;
