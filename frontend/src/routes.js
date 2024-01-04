import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Title from "pages/Title";
import Categories from "pages/Categories";
import Reader from "pages/Reader";
import Producer from "pages/Producer";
import Blog from "pages/Blog";
import About from "pages/About";
import Search from "pages/Search";
import Plans from "pages/Plans";
import NotFound from "pages/NotFound";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quadrinho/:id/:chap" element={<Title />} />
        <Route path="/catalogo" element={<Categories />} />
        <Route path="/leitor" element={<Reader />} />
        <Route path="/quadrinista" element={<Producer />} />
        <Route path="/comunidade" element={<Blog />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}