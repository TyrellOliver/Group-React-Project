
import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react'

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return ( 
    <header>
      <h3>Your One Stop Sandwich Shop</h3>
      <nav ref={NavBar}>
     <a href='/#'>Home</a>
     <span> </span> 
    <a href='/#'>Menu</a>
    <span> </span> 
        <a href='/#'>Checkout</a>
        <span> </span> 
        <a href='/#'>About</a>
        <span> </span> 
        <button onClick={showNavBar}>
          <FaTimes/>
        </button>
      </nav>
      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );

}










/*const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/"> Home </Link>
          </div>
          <div className="nav-link">
            <Link to="/about"> About </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
*/

export default NavBar;
