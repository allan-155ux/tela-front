import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ColectionPage from "./pages/ColectionPage";
import ProductPage from "./pages/ProductPage";
import './index.css'
import { CartProvider } from "./contexts/cartContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CartProvider><MainLayout></MainLayout></CartProvider>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="product/:id" element={<ProductPage/>}/>
        <Route path="colection/:colection" element={<ColectionPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);