import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Title from "pages/Title";
import Categories from "pages/Categories";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quadrinho/:id/:chap" element={<Title />} />
        <Route path="/biblioteca" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}