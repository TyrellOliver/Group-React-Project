import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";

function Menu() {
  const drinksImage = "/beverage-bottles.png";
  const chipsBag = "/Potato-Chips-Menu.png";

  return (
    <>
      <div id="menu-title">
        <br />
        <h1>Our Menu:</h1>
      </div>
      <div className="category-container">
        <h2>
          <a href="/byo-item" target="_blank">
            <button id="byo-button" type="submit">
              Build Your Own Sandwich
            </button>
          </a>
        </h2>
        <p>
          Create your own sandwich by building it from the bread up to the
          toppings and dressings!
        </p>
        <br />
        <h2>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
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
    </>
  );
}

export default Menu;

{
  /* <button onClick={() => handleRedirect(index)} type="submit">Build Your Own Sandwich</button></a> */
}
