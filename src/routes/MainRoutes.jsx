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

import Payment from "../pages/Payment/Payment";
import SuccessPage from "../pages/Payment/SuccessPage";


import VerificationPage from "../pages/VerificationPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path="/details/:id" element={<DetailsPage />} />


        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<SuccessPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/add" element={<AddPodsPage />} />
          <Route path="/edit/:id" element={<EditPodsPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
