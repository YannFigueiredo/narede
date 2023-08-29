import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Title from "pages/Title";
import Categories from "pages/Categories";
import Reader from "pages/Reader";
import Producer from "pages/Producer";
import Blog from "pages/Blog";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quadrinho/:id/:chap" element={<Title />} />
        <Route path="/biblioteca" element={<Categories />} />
        <Route path="/leitor" element={<Reader />} />
        <Route path="/produtor" element={<Producer />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}