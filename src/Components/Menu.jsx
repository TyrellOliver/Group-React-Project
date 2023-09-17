import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";

function Menu() {
  return (
    <>
      <div className="menu-container">
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
    </>
  );
}

export default Menu;
