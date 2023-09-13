<<<<<<< HEAD
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "..//Styles/NavBar.css";
import { Link } from "react-router-dom";
=======
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import "..//Styles/NavBar.css"
import { Link } from 'react-router-dom'



>>>>>>> 2c31d430717f2c10b0b0f7bf8a6b9af620bdcd6c

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Your One Stop Sandwich Shop</h3>
      <nav ref={navRef}>
<<<<<<< HEAD
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/about">About</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
=======
      <Link to="/home">Home</Link>
  <Link to="/menu">Menu</Link>
  <Link to="/checkout">Checkout</Link>
  <Link to="/about">About</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
>>>>>>> 2c31d430717f2c10b0b0f7bf8a6b9af620bdcd6c
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
