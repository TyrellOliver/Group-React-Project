import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import "./App.css";
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import About from "./Components/About"
import Menu from "./Components/Menu"
import Checkout from "./Components/Checkout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

>>>>>>> 2c31d430717f2c10b0b0f7bf8a6b9af620bdcd6c

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
=======
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Router>
);
>>>>>>> 2c31d430717f2c10b0b0f7bf8a6b9af620bdcd6c
}

export default App;
