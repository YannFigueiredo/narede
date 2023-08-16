import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Title from "pages/Title";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/title/:id/:chap" element={<Title />} />
      </Routes>
    </BrowserRouter>
  );
}