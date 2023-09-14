import NavBar from "./NavBar";
import "..//Styles/home.css";
// import SandwichDetails from "./SandwichDetails";
// import "./sandwichDetails.css";

const Home = () => {
  
const logo = "/sandwich-shop.png"
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="home-container">
        <div className="upper-container">
          <h1>One-Stop Sandwich Shop</h1>

          <h2>Hours</h2>
        </div>
          <img id="logo" src={logo} alt="store logo" height={200} />
        <br />
        <br />
        <br />
        <br />
        <div className="lower-container">
          <h2>Address</h2>
          <h2>Phone</h2>
          <h2>Order Online</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
