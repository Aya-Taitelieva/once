import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AddPodsPage from "../pages/AddPodsPage";
import EditPodsPage from "../pages/EditPodsPage";
import ProductsPodsPage from "../pages/ProductsPodsPage";

import OxPage from "../pages/OxPage";
import ElfPage from "../pages/ElfPage";
import WakaPage from "../pages/WakaPage";
import Favorites from "../components/Favorites/Favorites";
import AuthPage from "../pages/AuthPage";
import AdminRoute from "./AdminRoute";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";

import VerificationPage from "../pages/VerificationPage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<VerificationPage />} />
      <Route element={<MainLayouts />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPodsPage />} />

        <Route path="/ox" element={<OxPage />} />
        <Route path="/elf" element={<ElfPage />} />
        <Route path="/waka" element={<WakaPage />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route element={<AdminRoute />}>
          <Route path="/add" element={<AddPodsPage />} />
          <Route path="/edit/:id" element={<EditPodsPage />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default MainRoutes;
