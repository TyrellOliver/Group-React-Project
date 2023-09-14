import NavBar from "./NavBar";
import "..//Styles/home.css";
// import SandwichDetails from "./SandwichDetails";
// import "./sandwichDetails.css";

const Home = () => {
  // const signatureSandwiches = [
  //     {
  //       id: "ss-01",
  //       name: "Jackal Sandwich",
  //       description:
  //         "Boar's Head Cap-Off Top Round Pastrami, Feta and Provolone Cheese, Avocado, Pickles, Banana Peppers, Mixed Greens, Pesto and Honey Mustard on Slice Whole Wheat Bread.",
  //       price: 12.99,
  //       image: "Jackal-Sandwich.jpg"
  //     },
  //     {
  //       id: "ss-02",
  //       name: "Daryn's' Club",
  //       description:
  //         "Boar's Head Ovengold Roasted Turkey Breast, Thick-Cut Applewood Bacon, Lettuce, Sliced Tomato and Mayo on a Hero.",
  //       price: 8.99,
  //       image: "Daryn's-Club.jpg"
  //     },
  //     {
  //       id: "ss-03",
  //       name: "Tyrell's Turkey Sandwich",
  //       description:
  //         "Boar's Head Ovengold Roasted Turkey Breast, Boar's Head Maple Glazed Honey Turkey Breast, Boar's Head Baby Swiss, Sliced Red Onion and Mayo on Sliced Whole Wheat Bread.",
  //       price: 11.49,
  //       image: "Tyrell's-Turkey-Sandwich.jpg"
  //     },
  //     {
  //       id: "ss-04",
  //       name: "Rico's B-B-Q Honey Ham Sandwich",
  //       description:
  //         "Boar's Head Maple Glazed Honey Coat Ham, Boar's Head Vermont Yellow Cheddar, Lettuce, Sliced Tomato and Red Onion, Bread & Butter Pickles and BBQ Sauce on a Keysor Roll.",
  //       price: 6.79,
  //       image: "Rico's-B-B-Q-Honey-Ham-Sandwich.jpg"
  //     }
  //   ];
const logo = "/Images/sandwich-shop.png"
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
