// import NavBar from "./NavBar";
import "..//Styles/home.css";

const Home = () => {
  const logo = "./sandwich-shop.png";
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <h1>One-Stop Sandwich Shop</h1>
          <br />
          <br />
        </div>
        <img id="logo" src={logo} alt="store logo" height={200} />
        <br />
        <br />
        <br />
        <br />
        <div className="lower-container">
          <h2>Address:</h2>
          <h3>647 4th Ave, </h3>
          <br />
          <h3>Brooklyn, NY 11232</h3>
          <br />
          <br />
          <h2>Phone</h2>
          <h3>212-555-5555</h3>
          <br />
          <br />
          <h2>Hours</h2>
          <br />
          <h3>9:00 am until 4:00 pm - 7 days a week!</h3>
          <br />
          <br />
          <a href="/menu" target="_blank">
            <button type="submit" name="myButton">
              Menu: Order Online
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
