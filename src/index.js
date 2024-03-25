import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ColectionPage from "./pages/ColectionPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import './index.css'
import { CartProvider } from "./contexts/cartContext";
import DashBoard from "./layout/DashBoard";
import DashBoardProducts from "./pages/DashBoardProducts";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<CartProvider><MainLayout></MainLayout></CartProvider>}>
        <Route path="" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="colection/:colection" element={<ColectionPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="dashboard" element={<DashBoard />}>
        <Route path="products" element={<DashBoardProducts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);