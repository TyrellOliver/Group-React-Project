import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";
import Cart from "./Cart.jsx";

function Menu() {
  const drinksImage = "/beverage-bottles.png";
  const chipsBag = "/Potato-Chips-Menu.png";

  const sigSandwichStyles = {
    textDecoration: "underline",
    marginLeft: "20px",
  };
  return (
    <>
      <div className="menu-container">
        <br />
        <h2 style={sigSandwichStyles}>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
        <br />
        <br />
        <br />
        <h2>Build Your Own Sandwich</h2>
        <p>
          Create your own sandwich by building it from the bread up to the
          toppings and dressings!
        </p>
        <br />
        <div className="lower-menu-container">
          <img id="chips" src={chipsBag} alt="potato-chips" height={138} />
          <h2>Chips</h2>
          <ChipsItem />
          <br />
          <img
            id="beverages"
            src={drinksImage}
            alt="bottled-beverages"
            height={138}
          />
          <h2>Beverages</h2>
          <BeverageItem />
        </div>
      </div>
    </>
  );
}

export default Menu;

{
  /* <button onClick={() => handleRedirect(index)} type="submit">Build Your Own Sandwich</button></a> */
}
