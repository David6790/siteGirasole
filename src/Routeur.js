import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/reactPages/Home";
import Menu from "./assets/reactPages/Menu";
import Reservations from "./assets/reactPages/Reservations";
import Contact from "./assets/reactPages/Contact";
import PageNotFound from "./assets/reactPages/PageNotFound";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
