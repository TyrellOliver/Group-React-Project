import React from 'react';
import { useState } from "react";
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import About from "./Components/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (

  
    <Router>
          <React.Fragment>
          < NavBar />
      <Routes>
      </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
