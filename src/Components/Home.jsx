import "..//Styles/home.css";

const Home = () => {
  const logo = "/sandwich-shop.png";
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <br />
          <h1>One-Stop Sandwich Shop</h1>
          <br />
        </div>
        <img id="logo" src={logo} alt="store logo" height={250}/>
        <br />
        <br />
        <div className="lower-container">
          <h2>Address:</h2>
          <h3>647 4th Ave, </h3>
          <h3>Brooklyn, NY 11232</h3>
          <br />
          <h2>Phone:</h2>
          <h3>212-555-5555</h3>
          <br />
          <h2>Hours</h2>
          <h3>9:00 am until 4:00 pm - 7 days a week!</h3>
          <br />
          <a href="/menu" target="_blank">
            <button id="menu" type="submit" name="myButton">
              Menu: Order Online
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
