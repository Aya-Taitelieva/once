import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AddPodsPage from "../pages/AddPodsPage";
import EditPodsPage from "../pages/EditPodsPage";
import ProductsPodsPage from "../pages/ProductsPodsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPodsPage />} />
        <Route path="/add" element={<AddPodsPage />} />
        <Route path="/edit/:id" element={<EditPodsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
