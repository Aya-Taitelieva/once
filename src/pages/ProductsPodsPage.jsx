import React from "react";
import PodsList from "../components/PodsList";
import Filter from "../components/Filter";
import Pg from "../components/Pg";

const ProductsPodsPage = () => {
  return (
    <div>
      <Filter />
      <PodsList />
      <Pg />
    </div>
  );
};

export default ProductsPodsPage;
