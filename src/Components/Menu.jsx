import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";
import Cart from "./Cart.jsx"

function Menu() {
  return (
    <>
      <div className="category-container">
        <br />
        <h2>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
        <h2>Build Your Own Sandwich</h2>
        <p>
          Create your own sandwich by building it from the bread up to the
          toppings and dressings!
        </p>
        <br />
        <h2>Chips</h2>
        <ChipsItem />
        <br />
        <h2>Beverages</h2>
        <BeverageItem />
      </div>
      <div>
        <Cart/>
      </div>
    </>
  );
}

export default Menu;
