import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";
import FoodData from "./APi.jsx";
import Cart from "./Cart.jsx";

import { Link } from "react-router-dom";

function Menu() {
  const drinksImage = "/beverage-bottles.png";
  const chipsBag = "/Potato-Chips-Menu.png";

  const sigSandwichStyles = {
    textDecoration: "underline",
    marginLeft: "20px"
  };
  // <Cart />;

  const byoButtonStyles = {
    textDecoration: "underline",
    textAlign: "center",
    color: "#000080",
    backgroundColor: "transparent"
  };
  return (
    <>
      <div className="menu-container">
        <br />
        <div id="menu-title">
          <br />
          <h1>Our Menu:</h1>
        </div>
        <h2 className="h2-button">
          <Link to="/byo-item">
            <button id="byo-button" type="submit" style={byoButtonStyles}>
              Build Your Own Sandwich
            </button>
          </Link>

          <p>
            Create your own sandwich by building it from the bread up to the
            toppings and dressings!
          </p>
        </h2>
        <br />
        <h2 style={sigSandwichStyles}>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="lower-menu-container">
          <div className="chips-div">
            <img id="chips" src={chipsBag} alt="potato-chips" height={138} />
            <h2 style={{ textDecoration: "underline" }}>Chips</h2>
            <ChipsItem />
          </div>
          <br />
          <div className="beverages-div">
            <img
              id="beverages"
              src={drinksImage}
              alt="bottled-beverages"
              height={138}
            />
            <h2 style={{ textDecoration: "underline" }}>Beverages</h2>
            <BeverageItem />
          </div>
        </div>
        <Cart />
      </div>
      <FoodData />
      <br />
      <br />
    </>
  );
}

export default Menu;

{
  /* <button onClick={() => handleRedirect(index)} type="submit">Build Your Own Sandwich</button></a> */
}
