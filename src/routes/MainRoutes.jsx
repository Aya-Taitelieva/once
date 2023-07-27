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


const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPodsPage />} />


        <Route path="/ox" element={<OxPage />} />
        <Route path="/elf" element={<ElfPage />} />
        <Route path="/waka" element={<WakaPage />} />

        <Route path="/add" element={<AddPodsPage />} />
        <Route path="/edit/:id" element={<EditPodsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
