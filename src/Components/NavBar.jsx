import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Your One Stop Sandwich Shop</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <span> </span>
        <a href="/#">Menu</a>
        <span> </span>
        <a href="/#">Checkout</a>
        <span> </span>
        <a href="/#">About</a>
        <span> </span>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
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
