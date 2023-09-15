import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";

function Menu() {
  return (
    <>
      <div className="category-container">
        <br />
        <h2>
          <a href="/byo-item">
            <button type="submit">Build Your Own Sandwich</button>
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
        <h2>Chips</h2>
        <ChipsItem />
        <br />
        <h2>Beverages</h2>
        <BeverageItem />
        <br />
      </div>
      <cart />
    </>
  );
}

export default Menu;
