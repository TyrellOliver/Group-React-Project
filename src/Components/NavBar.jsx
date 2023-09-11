import { Link } from 'react-router-dom';


const NavBar = () => {
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
};

export default NavBar;
