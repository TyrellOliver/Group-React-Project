import React from 'react';
import { useState } from "react";
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import About from "./Components/About"
import Menu from "./Components/Menu"
import Checkout from "./Components/Checkout"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div></div>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/About" element={<About />} />
  </Routes>
</Router>
);
}

export default App;
