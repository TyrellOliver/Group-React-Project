import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import BYODetails from "./Components/BYODetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/byo-details" element={<BYODetails />} />
        <Route path="/menu/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

//
// import React from "react";
// import { useState } from "react";
